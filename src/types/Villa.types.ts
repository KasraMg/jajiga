import { userVillasObj } from "./Auth.types";

interface priceDays {
  midWeek: string;
  holidays: string;
  peakDays: string;
}

export interface VillaType {
  aboutVilla: {
    villaSpace: string;
    villaType: string;
    villaZone: string;
    aboutVilla: string;
  };
  address: { state: string; city: string; address: string };
  capacity: {
    normalCapacity: number;
    maxCapacity: number;
    buildingSize: number;
    fuundationSize: number;
    bedRoom: number;
    description: string;
  };
  coordinates: { x: string; y: string };
  costly: boolean;
  cover: string[];
  createdAt: string;
  disable: boolean;
  facility: {
    facility: {
      coolingSystem: { status: boolean; description?: string };
      diningTable: { status: boolean; description?: string };
      eightball: { status: boolean; description?: string };
      fridge: { status: boolean; description: string };
      furniture: { status: boolean; description: string };
      heatingSystem: { status: boolean; description?: string };
      parking: { status: boolean; description?: string };
      pool: { status: boolean; description?: string };
      toilet: { status: boolean; description?: string };
      tv: { status: boolean; description: string };
      wifi: { status: boolean; description?: string };
      moreFacility?: string;
    };
    sanitaryFacilities: {
      antiseptics: { status: boolean };
      changeTheBedsheet: { status: boolean };
      changeThePillow: { status: boolean };
      chargingDishSoap: { status: boolean };
      chargingToiletPaper: { status: boolean };
      dishSoap: { status: boolean };
      moreSanitaryFacilities?: string;
    };
  };
  finished: boolean;
  price: {
    newYear: string;
    spring: priceDays;
    summer: priceDays;
    autumn: priceDays;
    winter: priceDays;
  };
  rules: { pet: boolean; music: boolean; smoke: boolean; more: string };
  step: number;
  updatedAt: string;
  user: string;
  __v: number;
  _id: string;
}
 