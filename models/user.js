const mongoose = require("mongoose");

// 스키마 정의
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
module.exports = { User };
