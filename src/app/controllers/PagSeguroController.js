const PGS = require('../../config/pagseguro');
const xmlParser = require('xml2json');

class PagSeguroController {
  async payment(req, res) {
    try {
      const { id, title, description, amount, quantity } = req.body;

      PGS.addItem({
        id,
        title,
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
    } catch (err) {
      return res.json({ err });
    }
  }
}

module.exports = new PagSeguroController();
