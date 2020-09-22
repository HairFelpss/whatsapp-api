import mongoose from 'moongose';

const LogAdminSchema = new mongoose.Schema(
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
    ip: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

LogAdminSchema.plugin(AutoIncrement, { id: 'id_sequ', inc_field: 'id' });
export default mongoose.model('log_admin', LogAdminSchema);
