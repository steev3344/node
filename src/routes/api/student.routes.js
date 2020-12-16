const express = require('express');
const router = express.Router();

const verify = require('../../middlewares/authToken');
const studentController = require('../../controllers/student.controller');

// get student results
router.get('/result', studentController.result);
// get all data
router.get('/all',verify, studentController.list);
// get data using id
router.get('/:id',verify, studentController.show);
// post data
router.post('/create',verify, studentController.create);
// update data using id
router.put('/update/:id',verify, studentController.update);
// delete data using id
router.delete('/delete/:id',verify, studentController.delete);


module.exports = router;
