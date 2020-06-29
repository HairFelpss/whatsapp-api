const PGS = require('../../config/pagseguro');
const xmlParser = require('xml2json');

class PagSeguroController {
  async payment(req, res) {
    const { id, description, amount, quantity } = req.body;

    PGS.addItem({
      id,
      description,
      amount,
      quantity,
    });

    PGS.shipping({
      type: 3,
    });

    PGS.checkout((success, response) => {
      if (success) {
        const jsonResponse = JSON.parse(xmlParser.toJson(response));
        const boxInfo = jsonResponse.checkout;
        return res.json({ success, boxInfo });
      }
      return res.json({ response });
    });
  }
}

module.exports = new PagSeguroController();
