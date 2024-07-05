"use client";

import { useState } from "react";
import { useAuth } from "@clerk/nextjs";

export default function Form(props: { create: any; latestMessage: any }) {
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState<boolean>(false);

  const { userId, isLoaded } = useAuth();

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  const onSubmit = async (e: any) => {
    setSending(true);
    await props.create(message, userId);
  };

  const handleRefresh = async (e: any) => {
    console.log("hey");
    window.location.reload();
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="p-6 bg-indigo-900/10 dark:bg-indigo-400/10 flex flex-col items-start gap-4 rounded-lg border border-indigo-900/20  dark:border-indigo-400/20 mt-10 mb-10"
      >
        <label className="w-full flex flex-col gap-2">
          Send a message to yourself:
          <textarea
            name="message"
            required
            onChange={(e) => setMessage(e.target.value)}
            className="w-full min-h-[10rem] p-3 bg-slate-1000/40 border border-indigo-900/50 dark:border-indigo-400/50 outline-none rounded-md dark:text-black"
          />
        </label>
        <div className="mt-4 w-full flex flex-row items-center justify-center">
          <button
            type="submit"
            disabled={sending}
            className={`button group inline-flex items-center justify-center gap-0.5 rounded-full font-medium tracking-tight transition-all text-sm px-10 py-2.5 text-white bg-indigo-500 hover:bg-indigo-400 ${
              sending ? "opacity-50" : ""
            }`}
          >
            {sending ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
      <div className="inline-flex items-center justify-center">
        <p>
          {props.latestMessage?.author == "AI"
            ? "🤖 AI's response:"
            : "➡️ Your last message:"}
          {` "${props.latestMessage?.text}"` ?? "No message found"}
        </p>
      </div>
      {props.latestMessage?.author != "AI" && (
        <button
          onClick={handleRefresh}
          type="button"
          className="mt-2 button group inline-flex items-center justify-center gap-0.5 rounded-full font-medium tracking-tight transition-all text-sm px-10 py-2.5 text-white bg-sky-700 hover:bg-sky-600"
        >
          See AI response
        </button>
      )}
    </>
  );
}
