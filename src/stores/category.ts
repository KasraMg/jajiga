import { create } from "zustand";
import { devtools } from "zustand/middleware"; 

export type State = { 
  maximumSpace:number | null; 
  maxPrice:number | null; 
  minPrice:number | null; 
  villaType:string[]
  villaZone:string[]
  facilities:string[]
  order:string
};
export type Action = { 
  setMaximumSpace: (val: number | null) => void;
  setMaxPrice: (val: number | null) => void;
  setMinPrice: (val: number | null) => void; 
  setVillaType: (val: string[]) => void; 
  setVillaZone: (val: string[]) => void; 
  setFacilities: (val: string[]) => void; 
  setOrder: (val: string) => void; 
};

export const categoryStore = create<State & Action>()(
  devtools((set) => ({  
  maximumSpace: null, 
  maxPrice: null, 
  minPrice: null, 
  villaType:[],
  villaZone:[],
  facilities:[],
  order:"",
  setMaximumSpace: (val) => set(() => ({ maximumSpace: val }), false, "setMaximumSpace"), 
  setMinPrice: (val) => set(() => ({ minPrice: val }), false, "setMinPrice"), 
  setMaxPrice: (val) => set(() => ({ maxPrice: val }), false, "setMaxPrice"),  
  setVillaType: (val) => set(() => ({ villaType: val }), false, "setVillaType"),  
  setVillaZone: (val) => set(() => ({ villaZone: val }), false, "setVillaZone"),  
  setFacilities: (val) => set(() => ({ facilities: val }), false, "setFacilities"),  
  setOrder: (val) => set(() => ({ order: val }), false, "setOrder"),  
  })),
);
