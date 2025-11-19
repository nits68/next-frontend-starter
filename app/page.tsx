"use client";

import { clsx } from "clsx";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useGlobalStore } from "@/store/globalStore";

export default function HomePage() {
  const { loggedUser, setLoggedUser } = useGlobalStore();
  const { lightTheme, setLightTheme } = useGlobalStore();

  useEffect(() => {
    toast.success("Render page!");
  });

  function handleThemeToggle() {
    document.documentElement.classList.toggle("dark", lightTheme);
    setLightTheme(!lightTheme);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200 dark:bg-gray-800">
      <h1 className={clsx("text-3xl font-bold", lightTheme ? "text-black" : "text-white")}>
        Hello, {loggedUser || ""}!
      </h1>
      <input
        className="input input-primary"
        type="text"
        value={loggedUser || ""}
        onChange={(e) => setLoggedUser(e.target.value)}
      />
      <button className="btn btn-primary mt-4" onClick={handleThemeToggle}>
        Toggle Theme
      </button>
    </div>
  );
}
