import React from "react";
import { CreateOrgAccount } from "../_components/createOrgAccount";
import Image from "next/image";

const CreateAccount = () => {
  return (
    <div className="flex gap-4 p-4">
      <div className="w-[50%] bg-green-500 rounded-3xl">
        <Image src={""} alt={""} />
      </div>

      <CreateOrgAccount />
    </div>
  );
};

export default CreateAccount;
