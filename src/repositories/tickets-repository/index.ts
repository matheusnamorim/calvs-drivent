import { prisma } from "@/config";

async function findTypes() {
  return prisma.ticketType.findMany();
}

const ticketsRepository = {
  findTypes,
};
  
export default ticketsRepository;
