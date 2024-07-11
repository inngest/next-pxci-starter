import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import logo from "../../public/images/Frame 44 (1).png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center px-4 py-1">
      <Image src={logo} alt="logo" className="w-[300px] h-[65px]" />
      <div>
        <SignedOut>
          <Link href="signup">
            <button className="px-5 py-2 border-2 border-primary z-1 bg-secondary text-primary rounded-[80px]">
              Create An Account
            </button>
          </Link>
        </SignedOut>

        <SignedIn>
          <div className="flex flex-row gap-3">
            <button className="px-5 py-2 border-2 border-primary z-1 bg-secondary text-primary rounded-[80px]">
              Explore
            </button>
            <button className="px-5 py-2 border-2 border-primary z-1 bg-secondary text-primary rounded-[80px]">
              My Dashboard
            </button>
            <button className="px-5 py-2 border-2 border-primary z-1 bg-secondary text-primary rounded-[80px]">
              <SignOutButton />
            </button>
          </div>
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
