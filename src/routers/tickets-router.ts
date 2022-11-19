import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import { addTickets, getTickets, getTicketsType } from "@/controllers";
import { createTicket } from "@/schemas/tickets-schemas";

const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
  .get("/types", getTicketsType)
  .get("/", getTickets)
  .post("/", validateBody(createTicket), addTickets);

export { ticketsRouter };
