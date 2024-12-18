import { create } from "zustand";

interface DarkModeState {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const useDarkModeStore = create<DarkModeState>((set) => ({
  darkMode: typeof window !== "undefined" && localStorage.getItem("darkMode") === "true",
  toggleDarkMode: () => {
    set((state) => {
      const newMode = !state.darkMode;
      localStorage.setItem("darkMode", newMode.toString());
      return { darkMode: newMode };
    });
  },
}));

export default useDarkModeStore;
