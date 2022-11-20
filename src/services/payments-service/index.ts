import { notFoundError } from "@/errors";
import { Payment } from "@prisma/client";

async function getPayments(ticketId: string, userId: number): Promise<Payment> {
  return;
}

const paymentsServices = {
  getPayments,
};

export default paymentsServices;
