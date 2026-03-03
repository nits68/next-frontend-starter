import { create } from "zustand";

// Define the shape of the global state
type GlobalStateData = {
  loggedUser: string | null;
  lightTheme: boolean;
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
    lightTheme: true,
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
