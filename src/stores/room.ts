import { create } from "zustand";
import { devtools } from "zustand/middleware"; 

export type State = {
  startDate: string | null;
  endDate: string | null;
};
export type Action = {
  setStartDate: (val: string | null) => void;
  setEndDate: (val: string | null) => void;
};

export const roomStore = create<State & Action>()(
  devtools((set) => ({
    startDate: null,
    endDate: null,
    setStartDate: (val) =>
      set(() => ({ startDate: val }), false, "setStartDate"),
    setEndDate: (val) => set(() => ({ endDate: val }), false, "setEndDate"),
  })),
);
