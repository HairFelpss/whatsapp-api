import mongoose from 'moongose';

const CP_forgot_passwordSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    account: {
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

export default mongoose.model('forgot_password', CP_forgot_passwordSchema);
