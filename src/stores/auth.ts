// import { create } from "zustand";
// import { devtools } from "zustand/middleware";

// export type State = {
//   // showBookletModal: boolean;
//   // courseId: string;
//   // showGradeBookModal: boolean;
//   userData: {};
// };
// export type Action = {
//   // setShowBookletOpen: () => void;
//   // setShowBookletClose: () => void;
//   // setCourseId: (val: string) => void;
//   setUserData: (val: {}) => void;
// };

// export const authStore = create<State & Action>()(
//   devtools((set) => ({
//     // showBookletModal: false,
//     // showGradeBookModal: false,
//     // courseId: "",
//     userData: {},

//     setUserData: (val) => set(() => ({ userData: val }), false, "setUserData"),

//     // setCourseId: (val) => set(() => ({ courseId: val }), false, "setCourseId"),

//     // setShowBookletClose: () =>
//     //   set(() => ({ showBookletModal: false }), false, "setShowBookletClose"),

//     // setShowBookletOpen: () =>
//     //   set(() => ({ showBookletModal: true }), false, "setShowBookletOpen"),
//   })),
// );


import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { userObj } from "../types/Auth.types";

export type State = { 
  userData: userObj | null;
};
export type Action = { 
  setUserData: (val: userObj) => void;
};

export const authStore = create<State & Action>()(
  devtools((set) => ({ 
    userData: null, 
    setUserData: (val) => set(() => ({ userData: val }), false, "setUserData"), 
  })),
);
