import { Response } from "express";
import { AuthenticatedRequest } from "@/middlewares";
import httpStatus from "http-status";
import paymentsServices from "@/services/payments-service";

export async function getPayments(req: AuthenticatedRequest, res: Response) {
  const { ticketId } = req.params;
  const { userId } = req;
  try {
    const result = await paymentsServices.getPayments(ticketId, userId);
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}
