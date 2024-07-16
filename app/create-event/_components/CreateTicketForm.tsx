// _components/TicketForm.jsx
import { useSignUp } from "@clerk/nextjs";
import { event } from "@prisma/client";
import Image from "next/image";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

interface TicketFormProps {
  setUploadedImages: React.Dispatch<
    React.SetStateAction<{ file: File; type: string }[]>
  >;
  uploadedImages: { file: File; type: string }[];
}

const CreateTicketForm: React.FC<TicketFormProps> = ({
  setUploadedImages,

  uploadedImages = [],
}) => {
  const { register, setValue } = useFormContext();
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).map((file) => ({ file, type }));
      const previewURLs = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setUploadedImages([...uploadedImages, ...files]);
      setPreviewImages([...previewImages, ...previewURLs]);
      setValue(type, e.target.files); // Update form value with selected files
    }
  };

  return (
    <div className="space-y-4">
      {previewImages.map((previewURL, index) => (
        <div key={index} className="mb-2">
          <label className="block text-sm font-medium text-gray-700">
            {index < uploadedImages.length &&
            uploadedImages[index].type === "ticketImage"
              ? "Ticket Image Preview:"
              : ""}
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
      <div>
        <label
          htmlFor="ticketImage"
          className="block text-sm font-medium text-gray-700"
        >
          Ticket Image:
        </label>
        <input
          type="file"
          id="ticketImage"
          {...register("ticketImage", { required: true })}
          onChange={(e) => handleImageChange(e, "ticketImages")}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="ticketName"
          className="block text-sm font-medium text-gray-700"
        >
          Ticket Name:
        </label>
        <input
          type="text"
          id="ticketName"
          {...register("ticketDescription", { required: true })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      {/* <div>
        <label
          htmlFor="ticketDescription"
          className="block text-sm font-medium text-gray-700"
        >
          Ticket Image:
        </label>
        <input
          type="text"
          id="ticketDescription"
          {...register("ticketDescription", { required: true })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div> */}

      <div>
        <label
          htmlFor="ticketPrice"
          className="block text-sm font-medium text-gray-700"
        >
          Ticket Price:
        </label>
        <input
          type="number"
          id="ticketPrice"
          {...register("ticketPrice", { required: true })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      {/* Add more form fields as needed */}
    </div>
  );
};

export default CreateTicketForm;
