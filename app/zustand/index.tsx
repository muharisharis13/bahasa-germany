import { create } from "zustand";

const initialState = {
  namaMahasiswa: "",
  nimMahasiswa: "",
  materi1: {
    jawabanBenar: {
      satu: {
        a: "Bis",
        b: "durch",
        c: "entlang",
        d: "Fur",
        e: "gegen",
      },
    },
    jawabanSelected: {
      satu: {
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
      },
    },
  },
  isCheckingMateri1: false,
  loadingPage: false,
  nilai: 0,
};

export const useStore = create((set: any) => ({
  ...initialState,
  handle: (name: any, value: any) => {
    return set((state: any) => ({
      ...state,
      [name]: value,
    }));
  },
  updateJawabanSatuOption: (name: any, value: any) => {
    return set((state: any) => ({
      materi1: {
        ...state.materi1,
        jawabanSelected: {
          ...state.materi1.jawabanSelected,
          satu: {
            ...state.materi1.jawabanSelected.satu,
            [name]: value,
          },
        },
      },
    }));
  },
}));
