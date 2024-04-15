const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  fileLink: { type: String, required: true },
  userEmail: { type: String, required: true },
  fileName: { type: String, required: true },
});

module.exports = mongoose.model("File", FileSchema);
