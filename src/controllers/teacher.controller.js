const teacherService = require("../services/teacherService");
const {createValidation} = require("../validation/schema/teacher.schema");
const { updateValidation } = require("../validation/schema/teacher.schema");

exports.list = async function (req, res, next) {
    try {
        const teacher = await teacherService.list(res);
        return res.json({ status: "success", data: teacher });
    } catch (e) {
        return res.json({ status: "error", message: e.message });
    }
};
// api for getting data using id

exports.show = async function (req, res, next) {
    const id = req.params.id;

    try {
        const teacher = await teacherService.show(id, res);
        return res.json({ status: "success", data: teacher });
    } catch (e) {
        return res.json({ status: "error", message: e.message });
    }
};

// api for posting
exports.create = async function (req, res, next) {
    const teacher = req.body;

    try {
        const { error } = await createValidation(teacher);

        if (error) return res.json({ status: "error", message: error.message })
        dat = await teacherService.create(teacher, res);
        return res.json({ status: "success", data: dat });
    } catch (e) {
        return res.json({ status: "error", message: e.message });
    }
};

// api for update
exports.update = async function (req, res, next) {
    try {
        const id = req.params.id;
        const teacher= req.body;
        const { error } = await updateValidation(teacher);

        if (error) return res.json({ status: "error", message: error.message })
        data = await teacherService.update(id, teacher, res);
        return res.json({ status: "success", data: data });
    } catch (e) {
        return res.json({ status: "error", message: e.message });
    }
};
// api for delete
exports.delete = async function (req, res, next) {
    const id = req.params.id;

    try {
        const dat = await teacherService.delete(id, res);

        return res.json({ status: "success", data: dat });
    } catch (e) {
        return res.json({ status: "error", message: e.message });
    }
};

exports.login = async function(req,res){
    try{
        const teacher = req.body
        const dat = await teacherService.login(teacher,res)
        return res.json({data:dat})
    }
    catch(e){
        return res.json({status:"error",msg:e.message})
    }
}
