import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mx-auto mt-9 container flex justify-center items-center h-screen">
      <SignUp />
    </div>
  );
}