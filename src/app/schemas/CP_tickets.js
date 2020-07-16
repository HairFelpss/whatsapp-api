import mongoose from 'moongose';

const CP_tickers = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    helper_id: {
      type: Number,
      required: true,
    },
    helped_id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['Open', 'Pending', 'Close'],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['Delay', 'Bug', 'Question'],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
/*
CREATE TABLE comments (
    comment_id  INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    ticket_id   INT NOT NULL REFERENCES tickets(ticket_id) ON DELETE CASCADE,
    comment_date    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    comment_content TEXT NOT NULL
);
*/
export default mongoose.model('tickets', CP_tickers);
