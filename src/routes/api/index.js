const express = require("express");

const router = express.Router();

//root routes
const teacherRouter = require("./teacher.routes");
const studentRouter = require("./student.routes")

router.use("/teachers", teacherRouter);
router.use("/students", studentRouter);

module.exports = router;
