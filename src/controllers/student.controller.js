const studentService = require("../services/studentService");
const {createValidation} = require("../validation/schema/student.schema");
const { updateValidation } = require("../validation/schema/student.schema");


exports.list = async function (req, res, next) {
    try {
        const student = await studentService.list(res);
        return res.json({ status: "success", data: student });
    } catch (e) {
        return res.json({ status: "error", message: e.message });
    }
};
// api for getting data using id

exports.show = async function (req, res, next) {
    const id = req.params.id;

    try {
        const student = await studentService.show(id, res);
        return res.json({ status: "success", data: student });
    } catch (e) {
        return res.json({ status: "error", message: e.message });
    }
};

// api for posting
exports.create = async function (req, res, next) {
    const student = req.body;
    const verified = req.user
    try {
        const { error } = await createValidation(student);

        if (error) return res.json({ status: "error", message: error.message })
        student.teacher_id=verified.id
        dat = await studentService.create(student, res);
        return res.json({ status: "success", data: dat });
    } catch (e) {
        return res.json({ status: "error", message: e.message });
    }
};

// api for update
exports.update = async function (req, res, next) {
    try {
        const id = req.params.id;
        const student= req.body;
        const { error } = await updateValidation(student);

        if (error) return res.json({ status: "error", message: error.message })
        data = await studentService.update(id, student, res);
        return res.json({ status: "success", data: data });
    } catch (e) {
        return res.json({ status: "error", message: e.message });
    }
};
// api for delete
exports.delete = async function (req, res, next) {
    const id = req.params.id;

    try {
        const dat = await studentService.delete(id, res);

        return res.json({ status: "success", data: dat });
    } catch (e) {
        return res.json({ status: "error", message: e.message });
    }
};
// api for get result with respect to teacher
exports.result = async function (req, res, next) {
    try {
      const { limit } = req.query;
      const { page } = req.query;
      const { filter } = req.query;
      const { sort } = req.query;
      const result = await studentService.result(
        parseInt(page),
        parseInt(limit),
        filter,
        sort
      );
      return res.status(200).json(result);
    } catch (e) {
      return res.status(400).json({ status: "error", message: e.message });
    }
  };
