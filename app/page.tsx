"use client";

import { useGlobalStore } from "@/store/globalStore";

export default function HomePage() {
  const { loggedUser, setLoggedUser } = useGlobalStore();

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Hello, {loggedUser || ""}!
      </h1>
      <input
        className="input input-primary"
        type="text"
        value={loggedUser || ""}
        onChange={(e) => setLoggedUser(e.target.value)}
      />
    </div>
  );
} 