import { VillaDetails } from "./Villa.types";

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
  _id: string;
  villa: { id: string[]; number: number };
  booked: { id: string[]; number: number };
}

export interface userObj {
  message: string;
  statusCode: number;
  user: userInfoObj;
  villas: VillaDetails[];
  booked: book[];
  wishes: VillaDetails[];
}

export interface book {
  villa: VillaDetails;
  createdAt: string;
  date: {
    from: string;
    to: string;
  };
  updatedAt: string;
  user: {
    firstName: string;
    lastName: string;
  };
  guestNumber: number;
  price: string;
  days: number;
  _id: string;
}
