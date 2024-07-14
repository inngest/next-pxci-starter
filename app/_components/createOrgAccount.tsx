'use client'

import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormValues {
  organizationName: string;
  address: string;
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
    <form onSubmit={handleSubmit(onSubmit)}>
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
          <input
          className='block border p-2'
            type="text"
            value={newService}
            onChange={(e) => setNewService(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddService(); } }}
          />
          <Button type="button" onClick={handleAddService}>Add Service</Button>
        </div>
        <div>
          {services.map((service, index) => (
            <span key={index}>{service}</span>
          ))}
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
        <div className='flex'>
          <select
           className='block border p-2'
            value={newSocialMedia.platform}
            onChange={(e) => setNewSocialMedia({ ...newSocialMedia, platform: e.target.value })}
          >
            <option value="">Select Platform</option>
            <option value="Facebook">Facebook</option>
            <option value="Twitter">Twitter</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Instagram">Instagram</option>
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
        <div>
          {socialMedia.map((sm, index) => (
            <div key={index}>
              <span>{sm.platform}</span>
              <span>{sm.link}</span>
            </div>
          ))}
        </div>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};


