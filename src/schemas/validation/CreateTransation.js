import Joi from "joi";

export const CreateTransaction = Joi.object({
  value: Joi.number().required(),
  description: Joi.string().min(3).required(),
  type: Joi.string().valid("input", "output").required(),
  userId: Joi.object(),
  created: Joi.string(),
});