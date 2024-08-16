import { create } from "zustand";
import { devtools } from "zustand/middleware"; 

export type State = {
  startDate: string | null;
  endtDate: string | null;
};
export type Action = {
  setStartDate: (val: string | null) => void;
  setEndtDate: (val: string | null) => void;
};

export const roomStore = create<State & Action>()(
  devtools((set) => ({
    startDate: null,
    endtDate: null,
    setStartDate: (val) =>
      set(() => ({ startDate: val }), false, "setStartDate"),
    setEndtDate: (val) => set(() => ({ endtDate: val }), false, "setEndtDate"),
  })),
);
