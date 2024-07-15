import { NextRequest, NextResponse } from "next/server";
import { inngest } from "../../../inngest/client"; // Import our client
import { NextApiRequest, NextApiResponse } from "next";

// Opt out of caching; every request should send a new event
interface SocialMediaLinks {
    fblink: string;
    iglink: string;
    xlink: string;
  }


// Create a simple async Next.js API route handler
export async function POST(req: NextApiRequest, res: NextApiResponse) {

    const { user, data } = req.body;

    
    if (!user || !data) {
        throw new Error('Missing user or data in the request body');
      }
    // Map social media links to schema fields
    const socialMediaLinks = data.socialMedia.reduce(({acc, sm}:any)=> {
      if (sm.platform.toLowerCase() === 'facebook') {
        acc.fblink = sm.link;
      } else if (sm.platform.toLowerCase() === 'instagram') {
        acc.iglink = sm.link;
      } else if (sm.platform.toLowerCase() === 'twitter') {
        acc.xlink = sm.link;
      }
      return acc;
    }, { fblink: '', iglink: '', xlink: '' });
  
  // Send your event payload to Inngest

  try{
    await inngest.send({
        name: "app/user.synced",
        data: {
          clerkUserId: user.id,
          email: user.emailAddresses[0].emailAddress,
          firstName: user.firstName,
          lastName: user.lastName,
          profilePic: user.imageUrl,
          role: "USER",
          organizationName: data.organizationName,
          address: data.address,
          state: data.state,
          country: data.country,
          phone: data.mainPhone,
          aboutUs: data.aboutOrganization,
          services: data.services,
          ...socialMediaLinks,
        },
      });
      console.log("User synced successfully");
  }
  
catch (error) {
  console.error("Error syncing user:", error);
}

  return res.json({ name: "Hello Inngest from Next!" });
}
