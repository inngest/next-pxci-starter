import { prisma } from "@/prisma/client";
import { inngest } from "./client";

// Functions exported from this file are exposed to Inngest
// See: @/app/api/inngest/route.ts

export const helloWorld = inngest.createFunction(
  // each function should have a unique id
  { id: "hello-world" },

  // this function runs when an event by this name received
  { event: "test/hello.world" },

  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    const message = await prisma.messages.findFirst();
    return { event, body: `Here's your  last message: ${message?.text}!` };
  }
);
