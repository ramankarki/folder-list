const mongoose = require("mongoose");
const slugify = require("slugify");

const folderSchema = mongoose.Schema({
  userID: String,
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
  slug: String,
});

folderSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true, remove: /[`*+~.()'"!$:@#]/g });
  next();
});

const Folder = mongoose.model("folders", folderSchema);
module.exports = Folder;
