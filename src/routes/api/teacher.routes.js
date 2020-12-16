const express = require('express');
const router = express.Router();

const verify = require('../../middlewares/authToken');
const teacherController = require('../../controllers/teacher.controller');

// get all data
router.get('/all', verify,teacherController.list);
// get data using id
router.get('/:id',verify, teacherController.show);
// post data
router.post('/register', teacherController.create);
//login
router.post('/login',teacherController.login);
// update data using id
router.put('/update/:id',verify, teacherController.update);
// delete data using id
router.delete('/delete/:id',verify, teacherController.delete);


module.exports = router;
