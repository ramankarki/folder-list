const mongoose = require("mongoose");

const folderSchema = mongoose.Schema({
  userID: Number,
  title: {
    type: String,
    required: [true, "Title is required !"],
    unique: true,
    trim: true,
  },
  description: { type: String, trim: true },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  listData: [Object],
});

const Folder = mongoose.model("folders", folderSchema);
module.exports = Folder;
