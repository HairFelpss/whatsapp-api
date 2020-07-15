import mongoose from 'moongose';

const CP_sales = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    account: {
      type: String,
      required: true,
    },
    coins_amount: {
      type: Number,
      required: true,
    },
    coins_delivered: {
      type: Number,
      required: true,
      default: 0,
    },
    coins_bonus: {
      type: Number,
      required: true,
      default: 0,
    },
    value: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    payment_method: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    transaction_code: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('sales', CP_sales);
