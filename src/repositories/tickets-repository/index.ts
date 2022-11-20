import { prisma } from "@/config";
import { TicketAndType } from "@/protocols";
import { TicketStatus } from "@prisma/client";

async function findTypes() {
  return prisma.ticketType.findMany();
}

async function findTickets(userId: number) {
  return prisma.ticket.findFirst({
    where: {
      Enrollment: {
        User: {
          id: userId
        }
      }
    },
    include: {
      TicketType: true
    }
  });
}

async function addTickets(ticketTypeId: number, enrollmentId: number): Promise<TicketAndType> {
  return prisma.ticket.create({ 
    data: {
      ticketTypeId,
      enrollmentId,
      status: TicketStatus.RESERVED,
    },
    include: {
      TicketType: true,
    }
  });
}

async function updateTickets(id: number) {
  return prisma.ticket.update({
    where: {
      id,
    },
    data: {
      status: TicketStatus.PAID
    }
  });
}

const ticketsRepository = {
  findTypes,
  findTickets,
  addTickets,
  updateTickets
};
  
export default ticketsRepository;
