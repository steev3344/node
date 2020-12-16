const mongoose = require('mongoose');

const Teacher = mongoose.model('teacher', {
    name: { type: String, required: true },
    subject: { type: String, required: true },
    email: { type: String, required: false },
    password: { type: String, required: false },
});
module.exports = { Teacher };