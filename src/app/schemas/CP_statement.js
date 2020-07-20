const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const CP_statement = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      default: 0,
    },
    user_id: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      enum: [0, 1, 2, 3],
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

CP_statement.plugin(AutoIncrement, { id: 'id_sequence', inc_field: 'id' });
module.exports = mongoose.model('statement', CP_statement);
