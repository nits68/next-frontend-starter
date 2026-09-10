// Example store using Zustand for global state management in a Next.js application
// Only use in small applications or exams

import { create } from "zustand";

// Define the shape of the global state
type GlobalStateData = {
  loggedUser: string | null;
  theme: "light" | "dark";
  id: number | null;
};

type GlobalStore = {
  gs: GlobalStateData;
  set: <K extends keyof GlobalStateData>(key: K, value: GlobalStateData[K]) => void;
};

export const useGlobalStore = create<GlobalStore>()((set) => ({
  // Initialize the global state:
  gs: {
    loggedUser: null,
    theme: "light",
    id: null,
  },

  set: (key, value) =>
    set((state) => ({
      gs: {
        ...state.gs,
        [key]: value,
      },
    })),
}));
