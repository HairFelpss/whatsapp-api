import mongoose from 'moongose';

const EmailChangeSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      default: 0,
    },
    account: {
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
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

EmailChangeSchema.plugin(AutoIncrement, { id: 'id_s', inc_field: 'id' });
export default mongoose.model('email_change', EmailChangeSchema);
