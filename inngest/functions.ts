import { inngest } from "./client";

// Functions exported from this file are exposed to Inngest
// See: @/app/api/inngest/route.ts

export const messageSent = inngest.createFunction(
  { id: "message-sent" }, // each function should have a unique id
  { event: "app/message.sent" }, // when an event by this name received, this function will run

  async ({ event, step, prisma }) => {
    await step.sleep("wait-a-moment", "1s");
    const message = await prisma.messages.findUnique({
      where: {
        xata_id: event.data.messageId,
      },
    });
    console.log(
      "Feel free to do whatever you want with this message:",
      message
    );
    return { event, body: `Here's your  last message: ${message?.text}!` };
  }
);
