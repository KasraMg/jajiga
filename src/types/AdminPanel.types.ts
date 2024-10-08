import { Book, UserInfoObj, UserObj } from "./Auth.types";
import { VillaDetails, Comment } from "./Villa.types";

export interface DashboardTypes {
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
  books: Book[];
  usersCount: number;
  villasCount: number;
}

export interface CategoryResTypes {
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

export interface CommentResTypes {
  comment: Comment[];
  statusCode: number;
}
export interface VillaResTypes {
  villas: VillaDetails[];
  statusCode: number;
}
export interface UserResTypes {
  users: UserInfoObj[];
  statusCode: number;
}
