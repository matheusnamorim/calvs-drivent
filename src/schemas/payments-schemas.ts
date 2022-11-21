import { newPayment } from "@/protocols";
import Joi from "joi";

export const paymentSchema = Joi.object<newPayment>({
  ticketId: Joi.number().required(),
  cardData: Joi.object({
    issuer: Joi.string().required(),
    number: Joi.number().required(),
    name: Joi.string().required(),
    expirationDate: Joi.required(),
    cvv: Joi.number().required()
  })
});
