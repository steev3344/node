const Joi = require("@hapi/joi");
const createValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(4).required(),
    subject: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  return schema.validate(data);
};
const updateValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(4).optional(),
    subject: Joi.string().optional(),
    email: Joi.string().optional(),
    password: Joi.string().optional(),
  });
  return schema.validate(data);
};
module.exports.createValidation = createValidation;
module.exports.updateValidation = updateValidation;
