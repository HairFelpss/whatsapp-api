import mongoose from 'moongose';

const ForgotPasswordSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      default: 0,
    },
    account_id: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

ForgotPasswordSchema.plugin(AutoIncrement, {
  id: 'id_se',
  inc_field: 'id',
});
export default mongoose.model('forgot_password', ForgotPasswordSchema);
