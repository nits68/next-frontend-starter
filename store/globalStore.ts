import { create } from "zustand";
import { persist } from "zustand/middleware";

type GlobalState = {
  loggedUser: string | null;
  isLightTheme: boolean;
  id: number | null;
  setId: (newId: number | null) => void;
  setLoggedUser: (user: string | null) => void;
  toggleTheme: () => void;
};

export const useGlobalStore = create<GlobalState>()(
  // persist middleware hozzáadása az állapot perzisztenciájához (frissítés után is megmarad)
  persist(
    (set) => ({
      loggedUser: null,
      isLightTheme: true,
      id: null,
      setId: (newId) => set({ id: newId }),
      setLoggedUser: (user) => set({ loggedUser: user }),
      toggleTheme: () =>
        set((state) => ({
          isLightTheme: !state.isLightTheme,
        })),
    }),
    { name: "global-store" }, // kulcsok a localStorage-ben tárolódnak ezzel a névvel
  ),
);
