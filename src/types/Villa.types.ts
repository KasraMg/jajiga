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
  facility: {};
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
