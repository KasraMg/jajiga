export interface userInfoObj {
  createdAt: string;
  firstName: string;
  lastName: string;
  password: string;
  avatar:any;
  gender:string;
  aboutMe:string;
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
    villaType: string;
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
  rules: {
    more: string;
    music: boolean;
    pet: boolean;
    smoke: boolean;
  };
  price:{
    newYear:string
    spring:priceDays
    summer:priceDays
    autumn:priceDays
    winter:priceDays
  }
  disable:boolean
  finished: boolean;
  facility: {};
  step: number;
  updatedAt: string;
  user: string;
  __v: number;
  _id: string;
}

interface priceDays {
  midWeek:string
  holidays:string
  peakDays:string
}
export interface userObj {
  message: string;
  statusCode: number;
  user: userInfoObj;
  villas: userVillasObj[];
}
 