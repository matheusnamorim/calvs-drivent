import { notFoundError, requestError, unauthorizedError } from "@/errors";
import { newPayment } from "@/protocols";
import paymentsRepository from "@/repositories/payments-repository";
import ticketsRepository from "@/repositories/tickets-repository";
import { Payment } from "@prisma/client";

async function getPayments(ticketId: string, userId: number): Promise<Payment> {
  await validateTicket(Number(ticketId), userId);
  const result = await paymentsRepository.findPayment(Number(ticketId));
  return result;
}

async function addPayments(body: newPayment, userId: number): Promise<Payment> {
  const resultTicket = await validateTicket(body.ticketId, userId);
    
  await ticketsRepository.updateTickets(resultTicket.id);
  const result = await paymentsRepository.createPayment(body, resultTicket.TicketType.price);
  return result;
}

async function validateTicket(ticketId: number, userId: number) {
  if(!ticketId) throw requestError(400, "ticketId is missing!");
  const result = await paymentsRepository.findTicket(ticketId);
    
  if(!result) throw notFoundError();
  if(userId !== result.Enrollment.userId) throw unauthorizedError();

  return result;
}

const paymentsServices = {
  getPayments,
  validateTicket,
  addPayments,
};

export default paymentsServices;
