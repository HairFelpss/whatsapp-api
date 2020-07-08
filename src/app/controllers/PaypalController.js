const paypal = require('../../config/paypal');

class PayPalController {
  payment(req, res) {
    try {
      const { description, amount } = req.body;

      const createPaymentJson = JSON.stringify({
        intent: 'sale',
        payer: { payment_method: 'paypal' },
        redirect_urls: {
          return_url: 'http://localhost:5000/paypal/success',
          cancel_url: 'http://localhost:5000/paypal/cancel',
        },
        transactions: [
          {
            amount: {
              total: amount,
              currency: 'BRL',
            },
            description,
          },
        ],
      });

      paypal.payment.create(createPaymentJson, function (error, payment) {
        if (error) throw error;
        const links = {};

        payment.links.forEach(function (linkObj) {
          links[linkObj.rel] = {
            href: linkObj.href,
            method: linkObj.method,
          };
        });

        if (links.hasOwnProperty('approval_url')) {
          return res.json(links['approval_url'].href);
        }

        return console.error('no redirect URI present');
      });
    } catch (err) {
      console.log(err);
    }
  }

  success(req, res) {
    const payerId = { payer_id: req.query.PayerID };
    const paymentId = req.query.paymentId;

    paypal.payment.execute(paymentId, payerId, (error, payment) => {
      if (error) {
        console.log(error.response);
        throw error;
      }
      console.log('Get Payment Response');
      console.log(JSON.stringify(payment));
      res.redirect('http://localhost:3000/products');
    });
  }
  cancel(req, res) {
    console.log('cancelled');
    res.json('Cancelled');
  }
}
module.exports = new PayPalController();
