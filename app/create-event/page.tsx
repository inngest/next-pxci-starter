import React from "react";

const page = () => {
  return (
    <section className=" ">
      {/* <article className='flex flex-col flex-1  mx-auto border shadow-md rounded-md gap-5'> */}
      <div className=" ">
        {/* <div className="mb-4">
        <h1 className="text-2xl font-semibold">Event Details</h1>
      </div> */}
        <form className="flex flex-row justify-around items-top min-h-screen gap-4  bg-[#F5F4F4] shadow-md rounded-md border mx-20 p-6">
          <article>
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
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                <label
                  className="block text-sm md:text-xl text-primary font-medium mb-1"
                  htmlFor="event-venue"
                >
                  Event venue:
                </label>
                <input
                  type="text"
                  id="event-venue"
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm md:text-xl text-primary font-medium mb-1">Date:</label>
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
              </div>

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
                  rows={4}
                ></textarea>
              </div>

              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm md:text-xl text-primary font-medium mb-1">RSVP:</label>
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
                      type="text"
                      id="rsvp-tel"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium mb-1">
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
              </div>
            </div>
          </article>

          <article>
            <div className="col-span-1 md:col-span-2">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="event-banner"
              >
                Event Banner:
              </label>
              <input
                type="file"
                id="event-banner"
                className="w-full p-2 border rounded-md"
              />
            </div>

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
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="col-span-1 md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Submit
              </button>
            </div>
          </article>
        </form>
      </div>
      {/* 
        </article> */}
    </section>
  );
};

export default page;
