const { Teacher } = require("../models/teacher.model");
const bcrypt = require("bcryptjs");
const secret = process.env.TOKEN_SECRET;
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// service for get all  data
exports.list = async function (res) {
  try {
    const teacher = await Teacher.find({});
    return teacher;
  } catch (e) {
    return res.json({ status: "error", message: e.message });
  }
};

// service for get data using id
exports.show = async function (id, res) {
  try {
    const teacher = await Teacher.findById(id);
    return teacher;
  } catch (e) {
    return res.json({ status: "error", message: e.message });
  }
};
// service for post data
exports.create = async function (teacher, res) {
  try {
    const dat = await new Teacher(teacher);
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(dat.password, salt);
    dat.password = hash;
    await dat.save();
    return dat;
  } catch (error) {
    return res.json({ status: "error", message: error.message });
  }
};
// service for update data using id
exports.update = async function (id, teacher, res) {
  try {
    const dat = await Teacher.findByIdAndUpdate(id, teacher, { new: true });
    return dat;
  } catch (error) {
    return res.json({ status: "error", message: error.message });
  }
};
// service for delete data using id
exports.delete = async function (id, res) {
  try {
    const dat = await Teacher.findByIdAndRemove(id);
    return dat;
  } catch (error) {
    return res.json({ status: "error", message: error.message });
  }
};

// service for login with email and password
exports.login = async function (teacher, res) {
  emailid = teacher.email;
  const check = await Teacher.findOne({ email: emailid });
  password = check.password;
  try {
    if (check.status == false) throw Error("Your account is not activated yet");
    isMatch = await bcrypt.compare(teacher.password, password);
    if (isMatch == false) throw Error("invalid password");
    const payload = { id: check._id, name: check.name };
    const token = jwt.sign(payload, secret, { expiresIn: 36000 });

    return {
      _id: check._id,
      teacher_name: check.name,
      user_authentication: "sucess",
      token,
    };
  } catch (e) {
    return res.json({ status: "error", message: e.message });
  }
};
