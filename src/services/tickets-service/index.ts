import { notFoundError } from "@/errors";
import enrollmentRepository from "@/repositories/enrollment-repository";
import ticketsRepository from "@/repositories/tickets-repository";
import { Ticket, TicketType } from "@prisma/client";
import { TicketAndType } from "@/protocols";

async function getTicketsType(): Promise<TicketType[]> {
  const result = await ticketsRepository.findTypes();
  return result;
}

async function getTickets(userId: number): Promise<Ticket> {
  const result = await ticketsRepository.findTickets(userId);
  if(!result) throw notFoundError();

  return result;
}

async function addTickets(ticketTypeId: number, userId: number): Promise<TicketAndType> {
  const resultEnrollment = await enrollmentRepository.findEnrollment(userId);
  if(!resultEnrollment) throw notFoundError();

  const result = await ticketsRepository.addTickets(ticketTypeId, resultEnrollment.id);

  return result;
}

const ticketsServices = {
  getTicketsType,
  getTickets,
  addTickets
};

export default ticketsServices;
