"use client";

import { useGlobalStore } from "@/store/globalStore";
import { useEffect } from "react";

export default function Home() {
  const { loggedUser, setLoggedUser } = useGlobalStore();

  useEffect(() => {
    setLoggedUser("World");
  }, [setLoggedUser]);

  return (
    <div>
      <h1 className="text-3xl font-bold">Hello, {loggedUser || "Guest"}! </h1>
    </div>
  );
}
