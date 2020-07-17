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
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    totalDownloads: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

CP_treasure.plugin(AutoIncrement, { id: 'id_seq', inc_field: 'id' });

module.export = mongoose.model('treasure', CP_treasure);
