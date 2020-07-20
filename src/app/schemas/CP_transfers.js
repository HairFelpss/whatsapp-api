import mongoose from 'moongose';

const CP_transfersSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      default: 0,
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
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

CP_transfersSchema.plugin(AutoIncrement, { id: 'id_seq', inc_field: 'id' });
export default mongoose.model('transfers', CP_transfersSchema);
