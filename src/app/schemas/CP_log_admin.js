import mongoose from 'moongose';

const CP_log_adminSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    account_id: {
      type: Number,
      required: true,
    },
    ip: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

CP_log_adminSchema.plugin(AutoIncrement, { id: 'id_seq', inc_field: 'id' });
export default mongoose.model('log_admin', CP_log_adminSchema);
