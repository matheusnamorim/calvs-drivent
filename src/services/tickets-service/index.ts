import ticketsRepository from "@/repositories/tickets-repository";
import { TicketType } from "@prisma/client";

async function getTicketsType(): Promise<TicketType[]> {
  const result = await ticketsRepository.findTypes();
  return result;
}

const ticketsServices = {
  getTicketsType
};

export default ticketsServices;
