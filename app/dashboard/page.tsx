import { UserButton } from "@clerk/nextjs";
import Form from "./Form";

import { prisma } from "@/prisma/client";
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex w-2/3 justify-end pr-12">
        <UserButton />
      </div>
      <Form create={create} latestMessage={message} />

      <div className="mb-32 mt-20 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://www.prisma.io/docs"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Prisma Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Prisma ORM is an open source Node.js and TypeScript ORM with a
            readable data model, automated migrations, type-safety &
            auto-completion.
          </p>
        </a>

        <a
          href="https://xata.io/docs"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Xata Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Xata is a serverless data platform, providing a full-text and vector
            search engine, record-level file attachments, table-level
            aggregations and an optional ask endpoint to engage with with
            OpenAI's ChatGPT API.
          </p>
        </a>

        <a
          href="https://clerk.com/docs"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Clerk Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Clerk is a User Management Platform, offering a complete suite of
            embeddable UIs, flexible APIs, and admin dashboards to authenticate
            and manage your users.
          </p>
        </a>

        <a
          href="https://www.inngest.com/docs"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Inngest Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Inngest is an event-driven durable execution engine that enables you
            to run reliable code on any platform, including serverless.
          </p>
        </a>
      </div>
    </main>
  );
}
