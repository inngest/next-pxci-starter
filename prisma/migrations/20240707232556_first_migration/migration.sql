-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'EVENTPLANNER', 'EVENTVENDOR');

-- CreateTable
CREATE TABLE "messages" (
    "text" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "xata_updatedat" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "xata_id" TEXT NOT NULL DEFAULT ('rec_'::text || (xata_private.xid())::text),
    "xata_version" INTEGER NOT NULL DEFAULT 0,
    "xata_createdat" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "user" (
    "xata_id" TEXT NOT NULL DEFAULT ('rec_'::text || (xata_private.xid())::text),
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profilePic" TEXT NOT NULL,
    "isAdmin" BOOLEAN DEFAULT false,
    "isActive" BOOLEAN DEFAULT true,
    "xata_createdat" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clerkUserId" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER'
);

-- CreateTable
CREATE TABLE "event" (
    "xata_id" TEXT NOT NULL DEFAULT ('rec_'::text || (xata_private.xid())::text),
    "name" TEXT NOT NULL,
    "eventDate" TIMESTAMP(3)[],
    "eventDetails" TEXT NOT NULL,
    "eventCategory" TEXT NOT NULL,
    "rsvpName" TEXT NOT NULL,
    "rsvpTel" INTEGER NOT NULL,
    "eventImage" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_pgroll_users_xata_id_key" ON "messages"("xata_id");

-- CreateIndex
CREATE UNIQUE INDEX "_pgroll_user_xata_id_key" ON "user"("xata_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_clerkUserId_key" ON "user"("clerkUserId");

-- CreateIndex
CREATE UNIQUE INDEX "_pgroll_event_xata_id_key" ON "event"("xata_id");
