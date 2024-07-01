# Boilerplate

## Resources

- [Get started with Next.js and Xata](https://xata.io/docs/getting-started/nextjs)
- [Using Prisma with Xata's Postgres service](https://xata.io/blog/prisma-postgres-xata-integration)
- [Set up your Clerk account](https://clerk.com/docs/quickstarts/setup-clerk)
- [Clerk Next.js Quickstart](https://clerk.com/docs/quickstarts/nextjs)
- [Inngest Quickstart](https://www.inngest.com/docs/quick-start)

## Steps

### Steps already done for the boilerplate

```bash
npx create-next-app@latest --typescript xata-and-friends
npm install prisma --save-dev
npm install @prisma/adapter-pg pg

npm install @clerk/nextjs

npx prisma init
npx prisma generate
# the next steps require Xata provisioning (see: model in schema.prisma)
npx prisma db push
```

## Setup a Xata database

### Install Xata CLI

```bash
npm install -g @xata.io/cli
```

### Authenticate with Xata

```bash
xata auth login
```

1. Choose Create new API key in the browser
2. Create account or sign in in the browser
3. Create new API key

### Enable direct Postgres access in your Xata account

1. Go to the [Xata dashboard](https://app.xata.io/).
  - If you haven't previously created any Xata database, click "Skip connection guide" button.
2. Go to your workspace settings.
3. Select "Direct access to Postgres".

### Create a new Xata database with direct Postgres access

1. Go to the [Xata dashboard](https://app.xata.io/).
2. Create a new database, choosing the **Enable direct access to Postgres** option.

Once you've created the database, click the "Generate new API key" button in the database settings screen.

You will be now be able to see your Xata database connection string, with the pre-populated API key, which looks like this:

```
postgresql://<YOUR_WORKSPACE_ID>:<YOUR_API_KEY>@<YOUR_REGION>.sql.xata.sh:5432/<YOUR_DATABASE_NAME>:<YOUR_BRANCH_NAME>
```

<!-- REWORD -->
In your code editor, in your project root create a new file called `.env` and add a new environment variable called `DATABASE_URL`, like this (using the value from the previous step):

```conf
DATABASE_URL=postgresql://...?sslmode=require
```

### Create another Xata database to be used for Prisma Migrations

Migrations with Prisma require a [shadow database](https://www.prisma.io/docs/orm/prisma-migrate/understanding-prisma-migrate/shadow-database). For this purpose, you'll need to create an additional database in Xata.

Repeat the previous step's instructions to create a new database. Name it something like `<YOUR_APP_NAME>-migrations`.

<!-- REWORD: copy the PostgreSQL ndpoint, add the API key -->
This time you'll need to populate the API key in the connection string by hand. You can use the same API key as for the main database connection.

Once done, configure the database connection string in your `.env` file as `SHADOW_DATABASE_URL`:

```conf
SHADOW_DATABASE_URL=postgresql://...?sslmode=require
```

### Initialize database schema

Run the initial Prisma migration to create the database schema.

```bash
npx prisma db push
```

## Clerk

### Create a new application in Clerk

Sign up or sign in to [Clerk](https://dashboard.clerk.com/) and create a new application.

Choose any login mechanisms you'd like to allow your users to sign in with. You can change these later.

<!-- header is called: Set your environment variables -->
Once the application is created, copy the generated environment variables and add them to your `.env.local` file

```conf
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_abcdefghijklmnopqrstuvwxyz
CLERK_SECRET_KEY=••••••••••••••••••••••••••••••••••••••••••••••••••
```

You can skip the other suggested steps, they've already been included in this boilerplate.

## Inngest

The Inngest client is already fully configured, and you can run the local dev server with:

```bash
npx inngest-cli dev
```

You can add new Inngest functions by editing the [inngest/functions.ts](inngest/functions.ts) file.

Once you are ready to deploy your application to production, you can follow...
