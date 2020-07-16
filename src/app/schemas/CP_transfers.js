import mongoose from 'moongose';

const CP_transfersSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    new_email: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('transfers', CP_transfersSchema);
