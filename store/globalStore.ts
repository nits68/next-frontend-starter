import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type GlobalState = {
  loggedUser: string | null;
  isLightTheme: boolean;
  id: number | null;
  setId: (newId: number | null) => void;
  setLoggedUser: (user: string | null) => void;
  toggleTheme: () => void;
};

export const useGlobalStore = create<GlobalState>()(
  persist(
    immer((set) => ({
      loggedUser: null,
      isLightTheme: true,
      id: null,
      setId: (newId) =>
        set((state) => {
          state.id = newId;
        }),
      setLoggedUser: (user) =>
        set((state) => {
          state.loggedUser = user;
        }),
      toggleTheme: () =>
        set((state) => {
          state.isLightTheme = !state.isLightTheme;
        }),
    })),
    { name: "global-store" }, // kulcs a localStorage-ben
  ),
);
