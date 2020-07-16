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
    timestamps: true,
  }
);

export default mongoose.model('log_admin', CP_log_adminSchema);
