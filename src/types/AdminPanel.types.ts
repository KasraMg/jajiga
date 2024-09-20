import { book, userInfoObj, userObj } from "./Auth.types";
import { VillaDetails, comment } from "./Villa.types";

export interface dashboardTypes {
  booksCount: number;
  categories: {
    createdAt: string;
    href: string;
    title: string;
    updatedAt: string;
    _id: string;
  }[];
  categoriesCount: number;
  lastFiveMonthAddedVillasCount: { month: number; villasCount: number }[];
  lastFiveMonthBookedReserve: { month: number; booksCount: number }[];
  statusCode: number;
  books: book[];
  usersCount: number;
  villasCount: number;
}

export interface categoryResTypes {
  status: number;
  categories: categoryTypes[];
}
export interface categoryTypes {
  cover: string;
  createdAt: string;
  href: string;
  title: string;
  updatedAt: string;
  villas: number;
  _id: string;
}

export interface commentResTypes {
  comment: comment[];
  statusCode: number;
}
export interface villaResTypes {
  villas: VillaDetails[];
  statusCode: number;
}
export interface userResTypes {
  users: userInfoObj[];
  statusCode: number;
}
