export interface userInfoObj {
  createdAt: string;
  firstName: string;
  lastName: string;
  password: string;
  avatar: any;
  gender: string;
  aboutMe: string;
  phone: string;
  email: string;
  refreshToken: string;
  role: string;
  updatedAt: string;
}
export interface userVillasObj {
  address: {
    state: string;
    city: string;
    address: string;
  };
  aboutVilla: {
    aboutVilla: string;
    villaSpace: string;
    villaType: { 
      title: string 
    };
    villaZone: string;
  };
  capacity: {
    bedRoom: number;
    buildingSize: string;
    description: string;
    fuundationSize: string;
    maxCapacity: number;
    normalCapacity: number;
  };
  coordinates: { x: number; y: number };
  cover: string[];
  createdAt: string;
  costly: boolean;
  rules: {
    more: string;
    music: boolean;
    pet: boolean;
    smoke: boolean;
  };
  price: {
    newYear: string;
    spring: priceDays;
    summer: priceDays;
    autumn: priceDays;
    winter: priceDays;
  };
  disable: boolean;
  finished: boolean;
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
  step: number;
  updatedAt: string;
  user: string;
  __v: number;
  _id: string;
}

interface priceDays {
  midWeek: string;
  holidays: string;
  peakDays: string;
}
export interface userObj {
  message: string;
  statusCode: number;
  user: userInfoObj;
  villas: userVillasObj[];
}
