
const { Student } =  require("../models/student.model");
const pagination = require("../middlewares/datatools");

// service for get all  data
exports.list = async function (res) {
    try {
        const student = await Student.find({});
        return student;
    } catch (e) {
        return res.json({ status: "error", message: e.message });
    }
};


// service for get data using id
exports.show = async function (id, res) {
    try {
        const student = await Student.findById(id);
        return student;
    } catch (e) {
        return res.json({ status: "error", message: e.message });
    }
};
// service for post data
exports.create = async function (student, res) {
    try {
        const dat = await new Student(student);
        tot = student.subject_1+student.subject_2+student.subject_3;
        dat.total = tot;
        await dat.save();
        return dat;
    } catch (error) {
        return res.json({ status: "error", message: error.message });
    }
};
// service for update data using id
exports.update = async function (id, student, res) {
    try {
        const dat = await Student.findByIdAndUpdate(id, student, { new: true });
        tot = dat.subject_1+dat.subject_2+dat.subject_3;
        dat.total = tot;
        return dat;
    } catch (error) {
        return res.json({ status: "error", message: error.message });
    }
};
// service for delete data using id
exports.delete = async function (id, res) {
    try {
        const dat = await Student.findByIdAndRemove(id);
        return dat;
    } catch (error) {
        return res.json({ status: "error", message: error.message });
    }
};
// service for get student result with respect to each teacher
exports.result = async function (page,limit,filter,sort) {
    try {
      const result = await pagination.paginate(page,limit,filter,sort,Student);
      return result;
    } catch (e) {
      throw Error("Error while getting all data  ");
    }
  };

