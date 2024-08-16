export const baseUrl = "https://jajiga-backend.liara.run";
import Cookies from "js-cookie";
import jalaali from "jalaali-js";

export const saveIntoLocalStorage = (key: string, value: string | {}) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string);
};

export function convertToJalali(date: string) {
  const newDate = new Date(date);
  const jalaaliDate = jalaali.toJalaali(
    newDate.getFullYear(),
    newDate.getMonth() + 1,
    newDate.getDate(),
  );

  const months = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  const day = jalaaliDate.jd;
  const month = months[jalaaliDate.jm - 1];
  const year = jalaaliDate.jy;

  return `${day} ${month} ${year}`;
}

export const formatNumber = (num: string) => {
  return num.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

interface priceDays {
  midWeek: string;
  holidays: string;
  peakDays: string;
}

export const todayVillaPrice = (price: {
  newYear: string;
  spring: priceDays;
  summer: priceDays;
  autumn: priceDays;
  winter: priceDays;
}) => {
  const newDate = new Date();
  const jalaaliDate = jalaali.toJalaali(
    newDate.getFullYear(),
    newDate.getMonth() + 1,
    newDate.getDate(),
  );

  const dayOfWeek = newDate.getDay();

  const isWeekend = dayOfWeek === 4 || dayOfWeek === 5;
  const priceType = isWeekend ? "holidays" : "midWeek";

  const getSeason = (monthIndex: number) => {
    if (monthIndex >= 0 && monthIndex <= 2) return "spring";
    if (monthIndex >= 3 && monthIndex <= 5) return "summer";
    if (monthIndex >= 6 && monthIndex <= 8) return "autumn";
    return "winter";
  };

  const dayPrice = price[getSeason(jalaaliDate.jm)][priceType];

  return new Intl.NumberFormat("fa-IR").format(dayPrice as any);
};
