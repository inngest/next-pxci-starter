import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isDashboard = createRouteMatcher(["/dashboard(.)*"]);

export default clerkMiddleware((auth, req) => {
  if (isDashboard(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
