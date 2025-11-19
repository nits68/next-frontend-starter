import { create } from "zustand";

type GlobalStore = {
  loggedUser: string | null;
  lightTheme: boolean;
  id: number | null;
  setId: (newId: number | null) => void;
  setLoggedUser: (newLoggedUser: string | null) => void;
  setLightTheme: (newLightTheme: boolean) => void;
};

export const useGlobalStore = create<GlobalStore>()((set) => ({
  loggedUser: null,
  lightTheme: true,
  id: null,
  // A set függvény itt egy új állapotobjektumot ad vissza
  setId: (newId) =>
    set((state) => ({
      // A visszatérési érték egy új objektum, ami az előző state-ből és a módosításokból áll
      ...state,
      id: newId,
    })),
  setLoggedUser: (newLoggedUser) =>
    set((state) => ({
      ...state,
      loggedUser: newLoggedUser,
    })),
  setLightTheme: (newLightTheme) =>
    set((state) => ({
      ...state,
      lightTheme: newLightTheme,
    })),
}));
