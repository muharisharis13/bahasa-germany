import { create } from "zustand";

const initialState = {
  namaMahasiswa: "",
  nimMahasiswa: "",
  materi1: {
    jawabanBenar: {
      satu: {
        a: "Bis",
        b: "Bis",
        c: "Ohne",
        d: "Für",
        e: "Um",
        f: "durch",
        g: "gegen",
        h: "entlang",
        i: "entlang",
        j: "gegen",
      },
      dua: {
        a: "Ab",
        b: "aus",
        c: "AuBer",
        d: "mit",
        e: "bei",
      },
      tiga: {
        a: "an",
        b: "auf",
        c: "hinter",
        d: "in",
        e: "neben",
      },
      empat: {
        a: "auberhalb",
        b: "binnen",
        c: "innerhalb",
        d: "wahrend",
        e: "Wegen",
      },
      lima: {
        a: "Worauf,Auf",
        b: "Womit,mit",
        c: "Worum,um",
        d: "Mit,Mit",
      },
      enam: {
        a: "Der Jager geht durch den Wald",
        b: "Das Madchen wartet bis zu dem letzten Tag",
        c: "Mittels des Mikroskopes sieht man alles groB",
        d: "AuBer diesem Jungen hat er keine Freunde",
        e: "Stat der Milch trinkt man Tee",
      },
      tujuh: {
        a: "Der Jager geht durch den Wald",
        b: "Das Madchen wartet bis zu dem letzten Tag",
        c: "Mittels des Mikroskopes sieht man alles groB",
        d: "AuBer diesem Jungen hat er keine Freunde",
        e: "Stat der Milch trinkt man Tee",
      },
      delapan: {
        a: "Der Jager geht durch den Wald",
        b: "Das Madchen wartet bis zu dem letzten Tag",
        c: "Mittels des Mikroskopes sieht man alles groB",
        d: "AuBer diesem Jungen hat er keine Freunde",
        e: "Stat der Milch trinkt man Tee",
      },
      sembilan: {
        a: "Der Jager geht durch den Wald",
        b: "Das Madchen wartet bis zu dem letzten Tag",
        c: "Mittels des Mikroskopes sieht man alles groB",
        d: "AuBer diesem Jungen hat er keine Freunde",
        e: "Stat der Milch trinkt man Tee",
      },
      sepuluh: {
        a: "Der Jager geht durch den Wald",
        b: "Das Madchen wartet bis zu dem letzten Tag",
        c: "Mittels des Mikroskopes sieht man alles groB",
        d: "AuBer diesem Jungen hat er keine Freunde",
        e: "Stat der Milch trinkt man Tee",
      },
    },
    jawabanSelected: {
      satu: {
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
        f: "",
        g: "",
        h: "",
        i: "",
        j: "",
      },
      dua: {
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
      },
      tiga: {
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
      },
      empat: {
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
      },
      lima: {
        a: "",
        b: "",
        c: "",
        d: "",
      },
      enam: {
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
      },
      tujuh: {
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
      },
      delapan: {
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
      },
      sembilan: {
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
      },
      sepuluh: {
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
  updateJawabanOption: (name: any, value: any, nomer: any) => {
    return set((state: any) => ({
      materi1: {
        ...state.materi1,
        jawabanSelected: {
          ...state.materi1.jawabanSelected,
          [nomer]: {
            ...state.materi1.jawabanSelected[nomer],
            [name]: value,
          },
        },
      },
    }));
  },
}));
