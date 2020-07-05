const mercadopago = require('../../config/mercadopago');

class MercadoPagoController {
  async payment(req, res) {
    const { id, title, description, amount, quantity } = req.body;
    /*
    const payer = {
      name: 'Joao',
      surname: 'Silva',
      email: 'user@email.com',
      date_created: '2015-06-02T12:58:41.425-04:00',
      phone: {
        area_code: '11',
        number: '4444-4444',
      },

      identification: {
        type: 'CPF',
        number: '19119119100',
      },

      address: {
        street_name: 'Street',
        street_number: '123',
        zip_code: '06233200',
      },
    };
    */
    const preference = {
      items: [
        {
          id,
          title,
          description,
          quantity: parseInt(quantity),
          currency_id: 'BRL',
          unit_price: parseInt(amount),
        },
      ],
    };

    try {
      const mp = await mercadopago.preferences.create(preference);
      const response = mp.body.init_point;
      return res.json(response);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new MercadoPagoController();
