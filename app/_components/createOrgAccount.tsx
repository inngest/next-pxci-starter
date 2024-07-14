'use client'

import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Global_Icon } from './global_Icon';

interface FormValues {
  organizationName: string;
  address: string;
  state: string;
  country: string;
  mainPhone: string;
  services: string[];
  aboutOrganization: string;
  socialMedia: { platform: string; link: string }[];
}

export const CreateOrgAccount: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [services, setServices] = useState<string[]>([]);
  const [socialMedia, setSocialMedia] = useState<{ platform: string; link: string }[]>([]);
  const [newService, setNewService] = useState<string>('');
  const [newSocialMedia, setNewSocialMedia] = useState<{ platform: string; link: string }>({ platform: '', link: '' });

  const onSubmit: SubmitHandler<FormValues> = data => {
    data.services = services;
    data.socialMedia = socialMedia;
    console.log('Form submitted successfully:', data);
    reset();
    setServices([]);
    setSocialMedia([]);
  };

  const handleAddService = () => {
    if (newService.trim() !== '') {
      setServices([...services, newService.trim()]);
      setNewService('');
    }
  };

  const handleAddSocialMedia = () => {
    if (newSocialMedia.platform.trim() !== '' && newSocialMedia.link.trim() !== '') {
      setSocialMedia([...socialMedia, newSocialMedia]);
      setNewSocialMedia({ platform: '', link: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-fit space-y-4  '>
      <div>
        <label>Organization Name:</label>
        <input 
         className='block border p-2'
        type="text" {...register('organizationName')} />
      </div>
      <div>
        <label>Address:</label>
        <input 
         className='block border p-2'
        type="text" {...register('address')} />
      </div>
      <div>
        <label>State:</label>
        <input 
         className='block border p-2'
        type="text" {...register('state')} />
      </div>
      <div>
        <label>Country:</label>
        <input 
         className='block border p-2'
        type="text" {...register('country')} />
      </div>
      <div>
        <label>State:</label>
        <input 
         className='block border p-2'
        type="text" {...register('state')} />
      </div>
      <div>
        <label>Main Phone:</label>
        <input
         className='block border p-2'
        type="text" {...register('mainPhone', {
          pattern: {
            value: /^\+\d{1,3}\s?\d{4,14}$/,
            message: 'Invalid phone number format'
          }
        })} />
      </div>
      <div>
        <label>Type of services you render:</label>
        <div>
        <div>

        </div>
        <div className='bg-secondary mix-blend-multiply p-3 rounded-md pb-2'>
            <div className='flex gap-2 flex-wrap'>

          {services.map((service, index) => (
            <p className='shadow-sm hover:shadow-mdpy-1 px-4 py-2 h-fit w-fit bg-card rounded-md ' key={index}>{service}</p>
          ))}
            </div>

          <input
          className='block border p-2'
            type="text"
            value={newService}
            onChange={(e) => setNewService(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddService(); } }}
          />
          <Button variant={'outline'} size={'sm'} type="button" onClick={handleAddService}>+</Button>
        </div>
        </div>
   
      </div>
      <div>
        <label>About your organization:</label>
        <textarea 
         className='block border p-2'
        {...register('aboutOrganization')}></textarea>
      </div>
      <div>
        <label>Social media:</label>
        <div className='bg-secondary mix-blend-multiply p-3 rounded-md pb-2'>

        <div className='flex gap-2 items-center'>
          <select
           className='block border p-2 rounded-lg'
            value={newSocialMedia.platform}
            onChange={(e) => setNewSocialMedia({ ...newSocialMedia, platform: e.target.value })}
          >
            <option value="" > Select </option>
            <option value="Facebook"><Global_Icon iconName={'fa:facebook-square'}/>Facebook</option>
            <option value="Twitter"><Global_Icon iconName={'fa6-brands:square-x-twitter'}/>Twitter</option>
            <option value="LinkedIn"><Global_Icon iconName={'fa:linkedin-square'}/>LinkedIn</option>
            <option value="Instagram"><Global_Icon iconName={'f7:logo-instagram'}/>Instagram</option>
          </select>
          <input
           className='block border p-2'
            type="text"
            value={newSocialMedia.link}
            onChange={(e) => setNewSocialMedia({ ...newSocialMedia, link: e.target.value })}
            placeholder="Link"
          />
          <Button type="button" onClick={handleAddSocialMedia}>+</Button>
        </div>
        <div className='space-y-1'>
          {socialMedia.map((sm, index) => (
            <div key={index} className='shadow-sm hover:shadow-mdpy-1 px-4 py-2 h-fit w-fit bg-card rounded-md '>
              <span>{sm.platform}</span>:{" "}
              <span>{sm.link}</span>
            </div>
          ))}
        </div>
      </div>
        </div>
      <Button className='w-full font-semibold' type="submit">Create Organization Account</Button>
    </form>
  );
};


