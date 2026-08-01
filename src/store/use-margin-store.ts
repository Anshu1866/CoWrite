import { create } from "zustand";

interface MarginState {
  leftMargin: number;
  rightMargin: number;
  setLeftMargin: (margin: number) => void;
  setRightMargin: (margin: number) => void;
}

export const useMarginStore = create<MarginState>((set) => ({
  leftMargin: 56,
  rightMargin: 56,
  setLeftMargin: (margin) => set({ leftMargin: margin }),
  setRightMargin: (margin) => set({ rightMargin: margin }),
}));