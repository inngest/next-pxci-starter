import Image from 'next/image'
import React from 'react'
import coverImage  from '../../public/images/coverImage.png'
import logo  from '../../public/images/musicfestLogo.png'
import { Icon } from '@iconify/react';
import { HeroSection } from './_comps/profile_heroSection';
import { SectionTitleBar } from '../_components/sectionTitleBar';
import { SectionContainer } from '../_components/sectionContainer';
import EventCard from '../_components/EventCard';
import evtImg from "../../public/images/Rectangle 1.svg";
import EventCard_h from '../_components/EventCard_h';
import { ContentContainer } from '../_components/contentContainer';


const events = [
    {
      id: 1,
      date: "2024-12-04",
      category: "Music Concert",
      title: "Music Fest",
      eventType: "Digital",
      organizer: "Favour Entertainment",
      location: "National Stadium, Lagos",
      image: evtImg,
      time: "2:00 PM - 6:00 PM",
    },
  
    {
      id: 2,
      date: "2024-12-04",
      category: "Music Concert",
      title: "Music Fest",
      eventType: "Digital",
      organizer: "Favour Entertainment",
      location: "National Stadium, Lagos",
      image: evtImg,
      time: "2:00 PM - 6:00 PM",
    },
  
    {
      id: 1,
      date: "2024-12-04",
      category: "Music Concert",
      title: "Music Fest",
      eventType: "Digital",
      organizer: "Favour Entertainment",
      location: "National Stadium, Lagos",
      image: evtImg,
      time: "2:00 PM - 6:00 PM",
    },
    // Add more events
  ];


const Vendor_profile = () => {
  return (
    <div>

        <HeroSection/>
<div className='flex px-16'>

{/* //left panel */}
<div className='space-y-4'>
    
<SectionContainer 
title={'About Us'} 
content={<p>Lorem ipsum dolor sit amet consectetur. Sollicitudin quisque diam purus urna fermentum magna massa aliquet tincidunt. Pulvinar pulvinar pellentesque ut tortor dui aliquam a. Cum cursus vestibulum ullamcorper felis eu nisl quis euismod elementum. Fermentum a tristique pellentesque porttitor interdum sit facilisis. Massa in varius nunc nisi est ac mi. Ut ut faucibus in faucibus posuere tristique ullamcorper. Pellentesque habitant est mauris pellentesque vulputate iaculis nisl. Elementum blandit turpis donec dignissim pulvinar tortor nisi proin. Mollis eleifend condimentum cras faucibus vulputate sed morbi ornare elit.</p>}
/>

<SectionContainer 
title={'Our Services'} 
content={<div className='flex gap-4'>
{Array.from({length:5}).map((t:any, i:number)=>(

<ContentContainer key={i} content='Content'/>

))} 
</div>}
/>

<SectionContainer 
title={'Contact'} 
content={<div className=' space-y-4 '>
<ContentContainer title='Address:' content='3 Lekki - Epe Expy, Victoria Island, Lagos 106104, Lagos'/>
<ContentContainer title='Phone:' content='09054787676'/>
<ContentContainer title='Email:' content='organization@email.com'/>
<ContentContainer title='Website:' content='organizationwebsite.com'/>

</div>}
/>
</div>




{/* //left panel */}
<div className=' min-w-[35%]'>
<SectionContainer 
title={'Porfolio'} 
content={<div className=' flex flex-wrap gap-2'>
{events.map((t:any, k:number)=>(
    <EventCard_h key={k} event={t}/>
))}
</div>}
/>
</div>
       
</div>
     </div>
  )
}

export default Vendor_profile