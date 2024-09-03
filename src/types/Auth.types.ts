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
}

export interface userObj {
  message: string;
  statusCode: number;
  user: userInfoObj;
  villas: VillaDetails[];
  books: book[];
}

export interface book {
  createdAt: string;
  date: {
      from: string;
      to: string;
  };
  updatedAt: string;
  user: string;
  villa: string;
  _id: string;
}