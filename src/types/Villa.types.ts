import { book } from "./Auth.types";

interface priceDays {
  midWeek: string;
  holidays: string;
  peakDays: string;
}

export interface VillaDetails {
  address: {
    state: string;
    city: string;
    address: string;
  };
  aboutVilla: {
    aboutVilla: string;
    villaSpace: string;
    villaType: {
      title: string;
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
  booked: number | book[];
  averageScore: number;
  comments: number;
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
  isAccepted: string;
  isOwner: boolean;
  isWishes: boolean;
  user: {
    avatar: string;
    firstName: string;
    lastName: string;
    role: string;
    _id: string;
  };
  __v: number;
  _id: string;
}

export interface VillaResponse {
  bookDate: book[];
  comments: [];
  statusCode: number;
  villa: VillaDetails;
}

export interface userDateSelectData {
  fridays: number;
  holyDays: number;
  holyDaysTotalPrice: number;
  midWeekTotalPrice: number;
  midWeeks: number;
  statusCode: number;
  thursdays: number;
  totalDays: number;
  totalPrice: number;
  firstMonthDays: number;
  firstMonthHoliDays: number;
  firstMonthHoliDaysPrice: number;
  firstMonthMidWeekDays: number;
  firstMonthMidWeekDaysPrice: number;
  secondMonthDays: number;
  secondMonthHoliDays: number;
  secondMonthHoliDaysPrice: number;
  secondMonthMidWeekDays: number;
  secondMonthMidWeekDaysPrice: number;
}

export interface comment {
  answer: [];
  body: string;
  createdAt: string;
  creator: { _id: string; firstName: number; avatar: null };
  date: string;
  haveAnswer: number;
  answerComment: {
    body: string;
    createdAt:string;
    creator: {
      _id: string;
      firstName: string;
      avatar: string;
    };
    date:string;
    haveAnswer: number;
    isAccept: number;
    isAnswer: number;
    mainCommentID:string;
    updatedAt:string;
    villa: { _id: string };
  };
  isAccept: string;
  isAnswer: number;
  score: number;
  updatedAt: string;
  villa: { _id: string };
  _id: string;
}
