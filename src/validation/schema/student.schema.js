const Joi = require('@hapi/joi');
const createValidation = data => {
    const schema = Joi.object({
        name: Joi.string().min(4).required(),
        reg_no:Joi.number().required(),
        subject_1:Joi.number().required(),
        subject_2:Joi.number().required(),
        subject_3:Joi.number().required(),
        total:Joi.number().optional(),
        teacher_id:Joi.string().optional(),
    });
    return schema.validate(data);
};
const updateValidation = data => {
    const schema = Joi.object({
        name: Joi.string().min(4).optional(),
        reg_no:Joi.number().optional(),
        
        subject_1:Joi.number().optional(),
        subject_2:Joi.number().optional(),
        subject_3:Joi.number().optional(),
        total:Joi.number().optional(),
        teacher_id:Joi.string().optional(),
    });
    return schema.validate(data);
};
module.exports.createValidation = createValidation;
module.exports.updateValidation = updateValidation;
