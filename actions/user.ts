"use server"



import prisma from "@/prisma/client";
import { currentUser } from "@clerk/nextjs/server"

import { Prisma } from "@prisma/client";

export const getCurrentUserFromdb = async () => {
  try {
    //check if user exist on clerk
    const clerkUser = await currentUser();

    const xataUser = await prisma?.user.findUnique({
      where: {
        clerkUserId: clerkUser?.id,
      },
    });
    if (xataUser) {
      return {
        data: xataUser,
      };
    }

    //if user doesnt exist create new user
    const newUser: Prisma.userCreateInput = {
      clerkUserId: clerkUser?.id!,
      firstName: clerkUser?.firstName!,
      lastName: clerkUser?.lastName!,
      email: clerkUser?.emailAddresses[0].emailAddress!,
      profilePic: clerkUser?.imageUrl!,
      role: "USER", 
      isAdmin: false,
      isActive: true,
      
    };

    const result = await prisma?.user.create({
      data: newUser,
    });

    return {
      data: result,
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};


export const toggleUserToEventPLanner = async () => {
  try {
    const currentUserResult = await getCurrentUserFromdb();

    if (currentUserResult.error || !currentUserResult.data) {
      throw new Error(currentUserResult.error || "User not found");
    }

    const currentUser = currentUserResult.data;

    const updatedUser = await prisma.user.update({
      where: { clerkUserId: currentUser.clerkUserId },
      data: {
        role: "EVENTPLANNER",

       
        // Add other fields as needed
        // Example: otherInfo: otherInfo ?? currentUser.otherInfo,
      },
    });

    return {
      data: updatedUser,
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};


export const toggleUserToEventVendor = async () => {
  try {
    const currentUserResult = await getCurrentUserFromdb();

    if (currentUserResult.error || !currentUserResult.data) {
      throw new Error(currentUserResult.error || "User not found");
    }

    const currentUser = currentUserResult.data;

    const updatedUser = await prisma.user.update({
      where: { clerkUserId: currentUser.clerkUserId },
      data: {
        role: "EVENTVENDOR",

       
        // Add other fields as needed
        // Example: otherInfo: otherInfo ?? currentUser.otherInfo,
      },
    });

    return {
      data: updatedUser,
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};

