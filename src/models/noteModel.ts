import * as mongoose from 'mongoose';

const noteSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true
    },
    owner: {
      type: String,
      required: true
    },
    title: String,
    details: String,
    tags: [String]
  },
  {
    timestamps: true
  }
);
const note = mongoose.model('note', noteSchema);

export default note;
