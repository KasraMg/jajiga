import { VillaDetails } from "./Villa.types";

export interface UserInfoObj {
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

export interface UserObj {
  message: string;
  statusCode: number;
  user: UserInfoObj;
  villas: VillaDetails[];
  booked: Book[];
  wishes: VillaDetails[];
}

export interface Book {
  villa: VillaDetails;
  createdAt: string;
  date: {
    from: string;
    to: string;
  };
  updatedAt: string;
  user: {
    firstName: string;
    phone:string;
    id:string;
    lastName: string;
  };
  guestNumber: number;
  price: string;
  days: number;
  _id: string;
}
