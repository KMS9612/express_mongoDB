const { User } = require("../models/user.js");
// 사용자 생성
const createUser = async (req, res) => {
  const { name, email } = req.body;
  const user = new User({ name, email });
  try {
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "사용자 생성에 실패했습니다.", error });
  }
};

const FETCH_USERS = async (req, res) => {
  const users = await User.find();
  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createUser,
  FETCH_USERS,
};
