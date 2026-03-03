"use client";

import { clsx } from "clsx";
import dayjs from "dayjs";
import { SunMoon } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useGlobalStore } from "@/store/globalStore";

export default function HomePage() {
  // Using Zustand global store for state management example
  const { gs, set } = useGlobalStore();

  useEffect(() => {
    toast.success(`Render on: ${dayjs().format("YYYY.MM.DD HH:mm:ss")}`);
  }); // no dependency array to demonstrate re-render toast

  function handleThemeToggle() {
    set("lightTheme", !gs.lightTheme);
    document.documentElement.classList.toggle("dark", gs.lightTheme);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200 py-2 dark:bg-gray-800">
      <h1 className={clsx("mb-6 text-3xl font-bold", gs.lightTheme ? "text-black" : "text-white")}>
        {"Hello, "}
        {gs.loggedUser || (
          <Image
            alt="next logo"
            className="inline p-2 dark:rounded-md dark:bg-white"
            height={0}
            src="next.svg"
            width={110}
          />
        )}
        ! 😎
      </h1>
      <input
        className="input input-primary"
        id="nameInput"
        type="text"
        value={gs.loggedUser || ""}
        onChange={(e) => set("loggedUser", e.target.value)}
      />
      <button className="btn mt-4 btn-primary" onClick={handleThemeToggle}>
        <SunMoon className="mr-2" size={24} />
        Toggle Theme
      </button>
    </div>
  );
}
