"use client";

import { clsx } from "clsx";
import { SunMoon } from "lucide-react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useGlobalStore } from "@/store/globalStore";

export default function HomePage() {
  // Using Zustand global store for state management example
  const { loggedUser, setLoggedUser } = useGlobalStore();
  const { lightTheme, setLightTheme } = useGlobalStore();

  useEffect(() => {
    toast.success("Render page!");
  }); // no dependency array to demonstrate re-render toast

  function handleThemeToggle() {
    setLightTheme(!lightTheme);
    document.documentElement.classList.toggle("dark", lightTheme);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200 py-2 dark:bg-gray-800">
      <h1 className={clsx("mb-6 text-3xl font-bold", lightTheme ? "text-black" : "text-white")}>
        Hello, {loggedUser || ""}! 😎
      </h1>
      <input
        className="input input-primary"
        type="text"
        value={loggedUser || ""}
        onChange={(e) => setLoggedUser(e.target.value)}
      />
      <button className="btn mt-4 btn-primary" onClick={handleThemeToggle}>
        <SunMoon className="mr-2" size={24} />
        Toggle Theme
      </button>
    </div>
  );
}
