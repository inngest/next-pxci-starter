import { prisma } from "@/prisma/client";
import Form from "../Form";
import { inngest } from "@/inngest";

export async function create(message: string, userId: string) {
  "use server";
  if (!userId) {
    throw new Error("You must be signed in to create messages!");
  }
  const createdMessage = await prisma.messages.create({
    data: { text: message, author: userId },
  });

  await inngest.send({
    name: "app/message.sent",
    data: {
      messageId: createdMessage.xata_id,
    },
  });
}

export default async function DashboardPage() {
  const message = await prisma.messages.findFirst({
    orderBy: { xata_createdat: "desc" },
  });
  return (
    <div>
      <Form create={create} latestMessage={message} />
    </div>
  );
}
