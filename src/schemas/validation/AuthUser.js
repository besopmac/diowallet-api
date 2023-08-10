import Joi from "joi";

export const AuthUser = Joi.object({
  email: Joi.string().email().min(3).required(),
  password: Joi.string().min(3).required(),
});