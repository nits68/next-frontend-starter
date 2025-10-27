"use client";

import { clsx } from "clsx";
import { useGlobalStore } from "@/store/globalStore";

export default function HomePage() {
  const { loggedUser, setLoggedUser } = useGlobalStore();

  return (
    <div>
      <h1 className={clsx("text-3xl font-bold", { "text-red-500": !loggedUser })}>
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
