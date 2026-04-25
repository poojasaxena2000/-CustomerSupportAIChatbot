import { Link } from "react-router-dom";
import { BotLogo } from "../assets";

export default function Sidebar() {
  return (
    <aside className="max-w-xs w-full h-full p-4">
      <Link
        to="/"
        className="w-full flex p-2.5 px-5 items-center justify-between rounded bg-gradient-to-r from-[#d7c7f4] to-[#d7c7f4]"
      >
        <img src={BotLogo} alt="logo" className="w-8" />
        New Query?
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </Link>
      <Link
        to="/history"
        className="w-full rounded p-2.5 mt-4 inline-block text-center bg-gradient-to-r from-[#d7c7f4] to-[#d7c7f4]"
      >
        Past Conversations
      </Link>
    </aside>
  );
}
