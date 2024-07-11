"use client";
// import { inngest } from "@/inngest";
// import { useUser } from "@clerk/nextjs";
// import { user } from "@prisma/client";
// import { useEffect } from "react";

// const LandingPage = () => {
//   const { user } = useUser();

//   useEffect(() => {
//     if (user) {
//       // Trigger Inngest function
//       inngest
//         .send({
//           name: "app/user.synced",
//           data: {
//             clerkUserId: user.id,
//             email: user.emailAddresses[0].emailAddress,
//             firstName: user.firstName,
//             lastName: user.lastName,
//             profilePic: user.imageUrl,
//             role: "USER",
//             // Add other fields as necessary
//           } as user,
//         })
//         .then(() => {
//           console.log("User synced successfully");
//         })
//         .catch((error) => {
//           console.error("Error syncing user:", error);
//         });
//     }
//   }, [user]);

//   return (
//     <div>
//       <h1>Welcome to the Landing Page</h1>
//       <p>Welcome, {user ? user.firstName : "guest"}!</p>
//     </div>
//   );
// };

// export default LandingPage;
// pages/landing.js
import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { inngest } from '@/inngest';

const LandingPage = () => {
  const { user } = useUser();
  const [role, setRole] = useState('USER');

  useEffect(() => {
    if (user) {
      // Trigger Inngest function on user sync
      syncUserRole('USER');
    }
  }, [user]);

  const handleRoleChange = (event:any) => {
    const selectedRole = event.target.value;
    setRole(selectedRole);
    syncUserRole(selectedRole);
  };

  const syncUserRole = (selectedRole:any) => {
    if (user) {
      inngest
        .send({
          name: 'app/user.synced',
          data: {
            clerkUserId: user.id,
            email: user.emailAddresses[0].emailAddress,
            firstName: user.firstName,
            lastName: user.lastName,
            profilePic: user.imageUrl,
            role: selectedRole,
          },
        })
        .then(() => {
          console.log(`User role set to ${selectedRole} successfully`);
        })
        .catch((error) => {
          console.error(`Error setting user role to ${selectedRole}:`, error);
        });
    }
  };

  return (
    <div>
      <h1>Welcome to the Landing Page</h1>
      <p>Welcome, {user ? user.firstName : 'guest'}!</p>
      {user && (
        <div>
          <label htmlFor="role-select">Select your role: </label>
          <select id="role-select" value={role} onChange={handleRoleChange}>
            <option value="USER">User</option>
            <option value="EVENTPLANNER">Event Planner</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
