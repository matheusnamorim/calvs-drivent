import { prisma } from "@/config";

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

const ticketsRepository = {
  findTypes,
  findTickets
};
  
export default ticketsRepository;
