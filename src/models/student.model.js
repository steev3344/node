const mongoose = require("mongoose");

const Student = mongoose.model("student", {
  name: { type: String, required: true },
  reg_no: { type: Number, required: true },
  subject_1: { type: Number, required: false },
  subject_2: { type: Number, required: false },
  subject_3: { type: Number, required: false },
  total: { type: Number, required: false },
  teacher_id: { type: String, required: false },
});
module.exports = { Student };
