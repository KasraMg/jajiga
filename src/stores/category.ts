import { create } from "zustand";
import { devtools } from "zustand/middleware"; 

export type State = { 
  maximumSpace:number; 
  maxPrice:number | null; 
  minPrice:number | null; 
  villaType:string[]
  villaZone:string[]
  facilities:string[]
};
export type Action = { 
  setMaximumSpace: (val: number) => void;
  setMaxPrice: (val: number | null) => void;
  setMinPrice: (val: number | null) => void; 
  setVillaType: (val: string[]) => void; 
  setVillaZone: (val: string[]) => void; 
  setFacilities: (val: string[]) => void; 
};

export const categoryStore = create<State & Action>()(
  devtools((set) => ({ 
  login:false,
  maximumSpace: 1, 
  maxPrice: null, 
  minPrice: null, 
  villaType:[],
  villaZone:[],
  facilities:[],
  setMaximumSpace: (val) => set(() => ({ maximumSpace: val }), false, "setMaximumSpace"), 
  setMinPrice: (val) => set(() => ({ minPrice: val }), false, "setMinPrice"), 
  setMaxPrice: (val) => set(() => ({ maxPrice: val }), false, "setMaxPrice"),  
  setVillaType: (val) => set(() => ({ villaType: val }), false, "setVillaType"),  
  setVillaZone: (val) => set(() => ({ villaZone: val }), false, "setVillaZone"),  
  setFacilities: (val) => set(() => ({ facilities: val }), false, "setFacilities"),  
  })),
);
