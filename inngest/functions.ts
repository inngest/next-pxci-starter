import { Prisma, user } from "@prisma/client";
import { inngest } from "./client";
import OpenAI from "openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Functions exported from this file are exposed to Inngest
// See: @/app/api/inngest/route.ts

export const messageSent = inngest.createFunction(
  { id: "message-sent" }, // Each function should have a unique ID
  { event: "app/message.sent" }, // When an event by this name received, this function will run

  async ({ event, step, prisma }) => {
    // Fetch data from the database
    const message = await prisma.messages.findUnique({
      where: {
        xata_id: event.data.messageId,
      },
    });

    if (!message) {
      return;
    }

    // You can execute code that interacts with external services
    // All code is retried automatically on failure
    // Read more about Inngest steps: https://www.inngest.com/docs/learn/inngest-steps
    const reply = await step.run("create-reply", async () => {
      if (OPENAI_API_KEY) {
        const openai = new OpenAI();
        const completion = await openai.chat.completions.create({
          messages: [
            {
              role: "system",
              content:
                "You are a helpful assistant. Create a funny reply to my message:",
            },
            { role: "user", content: message?.text },
          ],
          model: "gpt-3.5-turbo",
        });
        return (
          completion.choices[0]?.message.content ?? "Unexpected OpenAI response"
        );
      } else {
        return "Add OPENAI_API_KEY environment variable to get AI responses.";
      }
    });

    const newMessage = await step.run("add-reply-to-message", async () => {
      return await prisma.messages.create({
        data: { text: reply, author: "AI" },
      });
    });

    return { event, body: `Here's your last message: ${newMessage?.text}!` };
  }
);

export const syncUserFromClerk = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "app/user.synced" },

  async ({ event, step, prisma }) => {
    const user: user = event.data;

    const upsertUser = await prisma.user.upsert({
      where: { clerkUserId: user.clerkUserId },
      update: {
        organizationName: user.organizationName,
        state: user.state,
        address: user.address,
        phone: user.phone,
        aboutUs: user.aboutUs,
        fblink: user.fblink,
        iglink: user.iglink,
        xlink: user.xlink,
        email: user.email,
        profilePic: user.profilePic,

        role: user.role,
        xata_updatedat: new Date(),
      },
      create: {
        organizationName: user.organizationName,
        state: user.state,
        address: user.address,
        phone: user.phone,
        aboutUs: user.aboutUs,
        fblink: user.fblink,
        iglink: user.iglink,
        xlink: user.xlink,
        email: user.email,
        profilePic: user.profilePic,
        isAdmin: user.isAdmin,
        isActive: user.isActive,
        clerkUserId: user.clerkUserId,
        role: user.role,
        xata_createdat: new Date(),
        xata_updatedat: new Date(),
      },
    });

    console.log("User upserted:", upsertUser);

    return { status: "User synced successfully" };
  }
);

export const createEvent = inngest.createFunction(
  { id: "create-event" },
  { event: "app/event.create" },

  async ({ event, step, prisma }) => {
    const eventData = event.data;

    const newEvent = await prisma.event.create({
      data: {
       
        name: eventData.name,
        eventDate: eventData.eventDate,
        eventDetails: eventData.eventDetails,
        eventCategory: eventData.eventCategory,
        rsvpName: eventData.rsvpName,
        rsvpTel: eventData.rsvpTel,
        eventImage: eventData.eventImage,
        state: eventData.state,
        address: eventData.address,
        ticketImage: eventData.ticketImage,
        eventLogo: eventData.eventLogo,
        ticketPrice: eventData.ticketPrice,
        ticketDescription: eventData.ticketDescription,
      },
    });

    console.log("Event created:", newEvent);

    return { status: "Event created successfully", event: newEvent };
  }
);
