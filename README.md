# PXCI Boilerplate

This is a Next.js starter project featuring:

- **[Prisma](https://www.prisma.io/docs):** Prisma ORM is an open source Node.js and TypeScript ORM with a readable data model, automated migrations, type-safety, and auto-completion.
- **[Xata](https://xata.io/docs):** Xata is a serverless data platform, built on PostgreSQL which provides a full-text and vector search engine, record-level file attachments, table-level aggregations and an optional ask endpoint to engage with with OpenAI's ChatGPT API.
- **[Clerk](https://clerk.com/docs):** Clerk is a User Management Platform, offering a complete suite of embeddable UIs, flexible APIs, and admin dashboards to authenticate and manage your users.
- **[Inngest](https://www.inngest.com/docs):** Inngest is an event-driven durable execution engine that enables you to run reliable code on any platform, including serverless.

## App overview

![This is a screenshot of a web page with the title "Next.js PXCI starter" visible in the browser tab. The page features an unprotected landing page. Once logged in, you will see a text box titled "Send a message to yourself:" with a "Send" button below it. Below the button, there is a section displaying "Your last message: 'hello'". A user profile icon is visible in the top right corner of the page.](./app.png)

How the app works:

- The app features sign in/sign out functionality using Clerk and the avatar of the currently logged user is shown in the top-right corner
- A Clerk protected dashboard route, leading to the messaging UI after successful authentication
- User's messages are sent to/read from Xata using Prisma ORM
- Finally, an Inngest function is responsible for reliably generating an answer to the user's message using OpenAI

## Resources Get Started

- [Get started with Next.js and Xata](https://xata.io/docs/getting-started/nextjs)
- [Using Prisma with Xata's Postgres service](https://xata.io/blog/prisma-postgres-xata-integration)
- [Setting up your Clerk account](https://clerk.com/docs/quickstarts/setup-clerk)
- [Clerk Next.js Quick Start](https://clerk.com/docs/quickstarts/nextjs)
- [Inngest Quick Start](https://www.inngest.com/docs/quick-start)

## Using this boilerplate

This boilerplate was created using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), has Prisma already set up (see [`./prisma`](./prisma)), as well as Inngest (see [`./inngest`](./inngest) and [`./api/inngest`](./api/inngest)).

While Inngest requires an account for production, using [Inngest Dev Server](https://www.inngest.com/docs/local-development) for local development is free and doesn't require any setup.

The following steps will guide you through setting up your Xata and Clerk accounts.

### 1. Xata database setup

#### Install Xata CLI

```bash
npm install -g @xata.io/cli
```

#### Authenticate with Xata

```bash
xata auth login
```

Next:

1. Choose Create new API key in the browser.
2. Create account or sign in in the browser.
3. Create a new API key.

#### Create a new Xata database with direct Postgres access

1. Go to the [Xata dashboard](https://app.xata.io/).
2. Create a new database, choosing the **Enable direct access to Postgres** option.
3. Once you've created the database, click the "Generate new API key" button in the database settings screen.

You will be now be able to see your Xata database connection string, with the pre-populated API key, which looks like this:

```
postgresql://<YOUR_WORKSPACE_ID>:<YOUR_API_KEY>@<YOUR_REGION>.sql.xata.sh:5432/<YOUR_DATABASE_NAME>:<YOUR_BRANCH_NAME>
```

<!-- REWORD -->

Back in your code editor, in your project's root create a new file called `.env`. Using the value from the previous step, add a new environment variable called `DATABASE_URL`, like this:

```conf
DATABASE_URL=postgresql://...?sslmode=require
```

You can also see an example of the `.env` file in [`./.env.example`](./.env.example).

#### Create another Xata database to be used for Prisma Migrations

Migrations with Prisma require a [shadow database](https://www.prisma.io/docs/orm/prisma-migrate/understanding-prisma-migrate/shadow-database). For this purpose, you'll need to create an additional database in Xata.

Repeat the previous step's instructions to create a new database. Name it something like `<YOUR_APP_NAME>-migrations`.

This time you'll need to populate the API key in the connection string by hand. You can use the same API key as for the main database connection.

Once done, configure the database connection string in your `.env` file as `SHADOW_DATABASE_URL`:

```conf
SHADOW_DATABASE_URL=postgresql://...?sslmode=require
```

#### Initialize database schema

Run the initial Prisma migration to create the database schema.

```bash
npx prisma db push
```

### 2. Clerk

#### Create a new application in Clerk

Sign up or sign in to [Clerk](https://dashboard.clerk.com/) and create a new application.

Choose any login mechanisms you'd like to allow your users to sign in with. You can change these later.

Once the application is created, see the section called "Set your environment variables" and copy the generated environment variables and add them to your `.env` file

```conf
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_abcdefghijklmnopqrstuvwxyz
CLERK_SECRET_KEY=••••••••••••••••••••••••••••••••••••••••••••••••••
```

You'll also need to add one more variable to let Clerk know where to redirect on successful login

```conf
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard
```

You can skip the other suggested steps in the Clerk setup, they've already been included in this boilerplate.

## Running the app

You will use two Dev Servers.

### Next.js Dev Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see your app.

### Inngest Dev Server

```bash
npx inngest-cli dev
```

Open [http://localhost:8288](http://localhost:8288) with your browser to see the Inngest UI.

## Helpful Resources

- Blog post: [AI in production: Managing capacity with flow control](https://inngest.com/blog/ai-in-production-managing-capacity-with-flow-control)
- Video: [Automate All of Your Customer Emails with AI in Next.js](https://www.youtube.com/watch?v=EoFI_Bmzb4g)
- Blog post: [Semi-Autonomous AI Agents and Collaborative Multiplayer Asynchronous Workflows](https://inngest.com/blog/semi-autonomous-ai-agents)
- Docs: Inngest for AI
  - [Concurrency](https://inngest.com/docs/concurrency) - Concurrency controls the number of steps executing code at any one time. It works by creating multi-level virtual queues within each function, directly in code, without thinking about infrastructure.
  - [Debouncing](https://inngest.com/docs/guides/debounce) - Debounce delays function execution until a series of events are no longer received. This is useful for preventing wasted work when a function might be triggered in quick succession.
  - [Prioritization](https://inngest.com/docs/guides/priority) - Priority allows you to dynamically execute some runs ahead or behind others based on any data. This allows you to prioritize some jobs ahead of others without the need for a separate queue.
  - [Rate limiting](https://inngest.com/docs/guides/rate-limiting) - Rate limiting is a hard limit on how many function runs can start within a time period. Events that exceed the rate limit are skipped and do not trigger functions to start. This prevents excessive function runs over a given time period.
  - [Steps](https://www.inngest.com/docs/learn/inngest-steps) - Steps are fundamental building blocks in Inngest functions. Each step represents individual task (or other unit of work) within a function that can be executed independently.
  - [Throttling](https://inngest.com/docs/guides/throttling) - Throttling allows you to specify how many function runs can start within a time period. When the limit is reached, new function runs over the throttling limit will be enqueued for the future.
- Docs: [Prisma ORM](https://www.prisma.io/docs/orm)
- Resource: [Clerk Hackathon resources](https://www.notion.so/clerkdev/Clerk-Hackathon-Resources-1993bf4a3b3841fb91b01b209b9258d1)
