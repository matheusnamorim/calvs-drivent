import { notFoundError } from "@/errors";
import ticketsRepository from "@/repositories/tickets-repository";
import { Ticket, TicketType } from "@prisma/client";

async function getTicketsType(): Promise<TicketType[]> {
  const result = await ticketsRepository.findTypes();
  return result;
}

async function getTickets(userId: number): Promise<Ticket> {
  const result = await ticketsRepository.findTickets(userId);
  if(!result) throw notFoundError();

  return result;
}

const ticketsServices = {
  getTicketsType,
  getTickets
};

export default ticketsServices;
