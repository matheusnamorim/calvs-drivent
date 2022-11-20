import { prisma } from "@/config";
import { newPayment } from "@/protocols";
import { Payment } from "@prisma/client";

async function findTicket(id: number) {
  return prisma.ticket.findFirst({
    where: {
      id,
    },
    include: {
      Enrollment: true,
      TicketType: true
    }
  });
}

async function findPayment(id: number): Promise<Payment> {
  return prisma.payment.findFirst({
    where: {
      ticketId: id,
    }
  });
}

async function createPayment(body: newPayment, value: number): Promise<Payment> {
  return prisma.payment.create({
    data: {
      ticketId: body.ticketId,
      value: value,
      cardIssuer: body.cardData.issuer,
      cardLastDigits: body.cardData.number.toString().slice(11)
    }
  });
}

const paymentsRepository = {
  findTicket,
  findPayment,
  createPayment
};

export default paymentsRepository;
