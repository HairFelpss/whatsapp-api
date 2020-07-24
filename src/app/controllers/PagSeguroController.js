const PGS = require('../../config/pagseguro');
const xmlParser = require('xml2json');

class PagSeguroController {
  async payment(req, res) {
    try {
      const { id, title, description, price, amount } = req.body;
      PGS.addItem({
        id,
        title,
        description,
        amount: price,
        quantity: '1',
      });

      PGS.shipping({
        type: 3,
      });

      PGS.checkout((success, response) => {
        const jsonResponse = JSON.parse(xmlParser.toJson(response));
        if (success) {
          const boxInfo = jsonResponse.checkout;
          return res.json({ success, boxInfo });
        }
        return res.json({ jsonResponse });
      });
    } catch (err) {
      return res.json({ err });
    }
  }

  async success(req, res) {
    PGS.transaction(req.query.code, (success, response) => {
      const jsonResponse = JSON.parse(xmlParser.toJson(response));
      if (success) {
        return res.json({ success, jsonResponse });
      }
      return res.json({ jsonResponse });
    });
  }
  async notify(req, res) {
    //const { code } = req.body;
    PGS.notification(code, (success, response) => {
      const jsonResponse = JSON.parse(xmlParser.toJson(response));
      if (success) {
        return res.json({ success, jsonResponse });
      }
      return res.json({ jsonResponse });
    });
  }
}

module.exports = new PagSeguroController();
