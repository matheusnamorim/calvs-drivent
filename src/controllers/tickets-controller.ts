import { Response } from "express";
import { AuthenticatedRequest } from "@/middlewares";
import ticketsServices from "@/services/tickets-service";
import httpStatus from "http-status";

export async function getTicketsType(req: AuthenticatedRequest, res: Response) {
  try {
    const result = await ticketsServices.getTicketsType();
    console.log(result);
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    return res.sendStatus(httpStatus.UNAUTHORIZED);
  }
}
