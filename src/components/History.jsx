import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { BotLogo, User } from "../assets";

export default function History() {
  const [savedChats, setSavedChats] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setSavedChats(data);
  }, []);

  return (
    <div className="flex w-full h-screen">
      {/* left side */}
      <Sidebar />

      {/* right side */}
      <div className="w-full h-full flex flex-col bg-gray-50">
        <header className="h-16 w-full p-4">
          <h1 className="font-semibold text-lg tracking-wide text-[#9785ba]">
            Bot AI
          </h1>
        </header>

        <section className="w-full overflow-y-scroll grow p-4">
          <div>
            <h2 className="text-2xl font-semibold text-center">
              Conversation History
            </h2>
            <h3 className="text-lg font-semibold">Today's Chats</h3>
          </div>

          <div>
            {savedChats.length === 0 ? (
              <p>No saved conversations found.</p>
            ) : (
              savedChats.map(({ question, response, time }, index) => (
                <div key={index} className="space-y-4">
                  <div className="p-4 flex border rounded border-gray-300 gap-4">
                    <img
                      src={User}
                      alt="boy"
                      className="rounded-full w-16 h-16"
                    />
                    <div className="flex flex-col">
                      <strong>You</strong>
                      <p>{question}</p>
                      <p>{time}</p>
                    </div>
                  </div>

                  <div className="p-4 flex border rounded border-gray-300 gap-4">
                    <img
                      src={BotLogo}
                      alt="logo"
                      className="rounded-full w-16 h-16"
                    />
                    <div className="flex flex-col">
                      <strong>
                        <span>Soul AI</span>
                      </strong>
                      <p>{response}</p>
                      <p>{time}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        <div>
          <form className="w-full border-t border-gray-300 p-4 flex gap-4">
            <input
              type="text"
              placeholder="Message Bot AI..."
              className="w-full border border-gray-300 rounded p-2 px-4"
            />
            <div className="flex gap-4">
              <button type="submit" className="p-2 px-7 rounded bg-[#d7c7f4]">
                Ask
              </button>
              <button type="button" className="p-2 px-7 rounded bg-[#d7c7f4]">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
