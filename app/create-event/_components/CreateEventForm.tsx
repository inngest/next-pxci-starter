import { event } from "@prisma/client";
import Image from "next/image";
import React, { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

type SocialMediaLinkFormData = {
  platform: string;
  url: string;
};

export type FormData = {
  name: string;
  eventDate: string[]; // Use string for dates in forms for simplicity
  eventDetails: string;
  eventCategory: string;
  rsvpName: string;
  rsvpTel: string;
  eventImage: string;
  eventLogo: string;
  state: string;
  address: string;
  ticketImage: string;
  ticketPrice: number;
  ticketDescription: string;
  socialMediaLinks: SocialMediaLinkFormData[];
};

interface CreateEventFormProps {
  setUploadedImages: React.Dispatch<
    React.SetStateAction<{ file: File; type: string }[]>
  >;
  uploadedImages: { file: File; type: string }[];
}

const CreateEventForm: React.FC<CreateEventFormProps> = ({
  setUploadedImages,
  uploadedImages = [],
}) => {
  const [days, setDays] = useState(1);

  const [previewImages, setPreviewImages] = useState<string[]>([]);

  // const handleImageChange = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   type: string
  // ) => {
  //   if (e.target.files) {
  //     const files = Array.from(e.target.files).map((file) => ({ file, type }));
  //     const previewURLs = Array.from(e.target.files).map((file) =>
  //       URL.createObjectURL(file)
  //     );

  //     setPreviewImages((prev) => [...prev, ...previewURLs]);
  //     setUploadedImages((prev) => [...prev, ...files]);
  //     setValue(type as any, e.target.files); // Update form value with selected files
  //   }
  // };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).map((file) => ({ file, type }));
      const previewURLs = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      setPreviewImages([...previewImages, ...previewURLs]);
      setUploadedImages([...uploadedImages, ...files]);
      setValue(type, e.target.files[0]); // Update form value with selected files
    }
  };
  const { register, control, setValue, watch } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "socialMediaLinks",
  });

  return (
    <form className="flex flex-row  items-top gap-10">
      <article className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1 md:col-span-2">
            <label
              className="block text-sm md:text-xl text-primary font-medium mb-1"
              htmlFor="event-name"
            >
              Event name:
            </label>
            <input
              type="text"
              id="event-name"
              {...register("name", { required: true })}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label
              className="block text-sm md:text-xl text-primary font-medium mb-1"
              htmlFor="state"
            >
              State:
            </label>
            <input
              type="text"
              id="state"
              {...register("state", { required: true })}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label
              className="block text-sm md:text-xl text-primary font-medium mb-1"
              htmlFor="category"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              {...register("eventCategory", { required: true })}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label
              className="block text-sm md:text-xl text-primary font-medium mb-1"
              htmlFor="address"
            >
              Event Address:
            </label>
            <input
              type="text"
              id="address"
              {...register("address", { required: true })}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm md:text-xl text-primary font-medium mb-1">
              Date:
            </label>
            <div className="flex space-x-4 mb-4">
              <label className="block text-sm font-medium mb-1">
                Number of Days:
              </label>
              <select
                value={days}
                onChange={(e) => setDays(parseInt(e.target.value, 10))}
                className="p-2 border rounded-md"
              >
                <option value={1}>1 Day</option>
                <option value={2}>2 Days</option>
                <option value={3}>3 Days</option>
              </select>
            </div>
            <div className="flex space-x-4">
              {[...Array(days)].map((_, index) => (
                <div key={index}>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor={`date-day-${index + 1}`}
                  >
                    Day {index + 1}:
                  </label>
                  <input
                    type="datetime-local"
                    id={`date-day-${index + 1}`}
                    {...register(`eventDate.${index}` as const, {
                      required: true,
                      valueAsDate: true,
                    })}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* <div className="col-span-1 md:col-span-2">
            <label className="block text-sm md:text-xl text-primary font-medium mb-1">
              Date:
            </label>
            <div className="flex space-x-4">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="date-day-1"
                >
                  Day 1:
                </label>
                <input
                  type="datetime-local"
                  id="date-day-1"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="date-day-2"
                >
                  Day 2:
                </label>
                <input
                  type="datetime-local"
                  id="date-day-2"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
          </div> */}
          <div className="col-span-1 md:col-span-2">
            <label
              className="block text-sm md:text-xl text-primary font-medium mb-1"
              htmlFor="details"
            >
              Details:
            </label>
            <textarea
              id="details"
              className="w-full p-2 border rounded-md border-primary"
              {...register("eventDetails", { required: true })}
              rows={4}
            ></textarea>
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm md:text-xl text-primary font-medium mb-1">
              RSVP:
            </label>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="rsvp-name"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="rsvp-name"
                  {...register("rsvpName", { required: true })}
                  className="w-full p-2 border rounded-md border-primary"
                />
              </div>
              <div className="w-1/2">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="rsvp-tel"
                >
                  Tel:
                </label>
                <input
                  type="number"
                  id="rsvp-tel"
                  {...register("rsvpTel", { required: true })}
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
          </div>

          {/* <label className="block text-sm font-medium mb-1">
              Social Media:
            </label>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="social-name"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="social-name"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="w-1/2">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="social-link"
                >
                  Link:
                </label>
                <input
                  type="text"
                  id="social-link"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
          </div> */}
          <div className="col-span-1 md:col-span-2 mb-5">
            <label className="block text-sm md:text-xl text-primary font-medium mb-1">
              Social Media Links:
            </label>
            {fields.map((field, index) => (
              <div key={field.id} className="flex space-x-4 items-end mb-2">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Platform:
                  </label>
                  <select
                    {...register(
                      `socialMediaLinks.${index}.platform` as const,
                      { required: true }
                    )}
                    className="p-2 border rounded-md"
                  >
                    <option value="Facebook">Facebook</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Instagram">Instagram</option>
                    <option value="LinkedIn">LinkedIn</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">URL:</label>
                  <input
                    type="url"
                    {...register(`socialMediaLinks.${index}.url` as const, {
                      required: true,
                    })}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => append({ platform: "", url: "" })}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Add Social Media Link
            </button>
          </div>
        </div>
      </article>

      <article className="mt-12">
        <div className="col-span-1 md:col-span-2">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="event-banner"
          >
            Event Banner:
          </label>

          <input
            type="file"
            accept="image/*"
            {...register("eventImage", { required: true })}
            onChange={(e) => handleImageChange(e, "eventImages")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        {/* {imagePreview && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Image Preview:
            </label>
            <Image
              src={imagePreview}
              alt="Image Preview"
             
              className="mt-1 block w-full max-w-xs border border-gray-300 rounded-md"
            />
          </div>
        )} */}

        {previewImages.map((previewURL, index) => (
          <div key={index} className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              {index < uploadedImages.length &&
              uploadedImages[index].type === "eventImage"
                ? "Event Image Preview:"
                : "Event Logo Preview:"}
            </label>
            <Image
              src={previewURL}
              width={50}
              height={50}
              alt="Preview"
              className="mt-1 block w-full max-w-xs border border-gray-300 rounded-md"
            />
          </div>
        ))}
        {/* <input
            type="file"
            id="event-banner"
            {...register("event-banner", { required: true })}
            className="w-full p-2 border rounded-md"
          />
        </div> */}

        <div className="col-span-1 md:col-span-2">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="event-logo"
          >
            Event Logo:
          </label>
          <input
            type="file"
            id="event-logo"
            {...register("eventLogo", { required: true })}
            onChange={(e) => handleImageChange(e, "eventLogos")}
            className="w-full p-2 border rounded-md"
          />
        </div>
      </article>
    </form>
  );
};

export default CreateEventForm;
