const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const CP_treasure = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      default: 0,
    },
    title: {
      type: String,
      required: true,
      text: true,
    },
    description: {
      type: String,
      required: true,
      text: true,
    },
    image_url: {
      type: String,
      required: true,
    },
    qt_bought: {
      type: Number,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

CP_treasure.plugin(AutoIncrement, { id: 'id_seq', inc_field: 'id' });
module.exports = mongoose.model('treasure', CP_treasure);
