import { book, userInfoObj } from "./Auth.types";

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
