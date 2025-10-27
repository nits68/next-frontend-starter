import { create } from "zustand";
import { persist } from "zustand/middleware";

type GlobalStore = {
  loggedUser: string | null;
  isLightTheme: boolean;
  id: number | null;
  setId: (newId: number | null) => void;
  setLoggedUser: (newLoggedUser: string | null) => void;
  toggleTheme: () => void;
};

export const useGlobalStore = create<GlobalStore>()(
  persist(
    (set) => ({
      loggedUser: null,
      isLightTheme: true,
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
      toggleTheme: () =>
        set((state) => ({
          ...state,
          isLightTheme: !state.isLightTheme,
        })),
    }),
    { name: "global-store" }, // kulcs-érték párok a böngészó local storage-ben tárolódnak, így csak CSR esetén használható
  ),
);
// persist használata miatt a store állapota megmarad a böngésző újraindításakor is