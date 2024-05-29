import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type State = {
  showBookletModal: boolean;
  courseId: string;
  showGradeBookModal: boolean;
};
export type Action = {
  setShowBookletOpen: () => void;
  setShowBookletClose: () => void;
  setCourseId: (val: string) => void;
};

export const CoursesStore = create<State & Action>()(
  devtools((set) => ({
    showBookletModal: false,
    showGradeBookModal: false,
    courseId: "",
    setCourseId: (val) => set(() => ({ courseId: val }), false, "setCourseId"),
    setShowBookletClose: () => set(() => ({ showBookletModal: false }), false, "setShowBookletClose"),
    setShowBookletOpen: () => set(() => ({ showBookletModal: true }), false, "setShowBookletOpen"),
  }))
);

