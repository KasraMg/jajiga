import jalaali from "jalaali-js";

export const saveIntoLocalStorage = (key: string, value: string | {}) => {
  if (typeof window !== "undefined" && localStorage) {
    return localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getFromLocalStorage = (key: string) => {
  if (typeof window !== "undefined" && localStorage) {
    return JSON.parse(localStorage.getItem(key) as string);
  }
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

export function getJalaliDateInfo(jalaliDate: string) {
  const [year, month, day] = jalaliDate.split("/").map(Number);
  const gregorianDate = jalaali.toGregorian(year, month, day);
  const date = new Date(
    gregorianDate.gy,
    gregorianDate.gm - 1,
    gregorianDate.gd,
  );

  const daysOfWeek = [
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنج‌شنبه",
    "جمعه",
    "شنبه",
  ];

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

  const dayOfWeek = daysOfWeek[date.getDay()];
  const monthName = months[month - 1];

  return {
    dayOfWeek,
    monthName,
    day,
    year,
  };
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
    if (monthIndex >= 1 && monthIndex <= 3) return "spring";
    if (monthIndex >= 4 && monthIndex <= 6) return "summer";
    if (monthIndex >= 7 && monthIndex <= 9) return "autumn";
    return "winter";
  };

  const dayPrice = price[getSeason(jalaaliDate.jm)][priceType];
  return new Intl.NumberFormat("fa-IR").format(dayPrice as any);
};

export function convertNumbers(str: string, toEnglish: boolean) {
  const persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
  ];
  const englishNumbers = [
    /0/g,
    /1/g,
    /2/g,
    /3/g,
    /4/g,
    /5/g,
    /6/g,
    /7/g,
    /8/g,
    /9/g,
  ];

  const fromNumbers = toEnglish ? persianNumbers : englishNumbers;
  const toNumbers = toEnglish
    ? ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    : ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  for (let i = 0; i < 10; i++) {
    str = str.replace(fromNumbers[i], toNumbers[i]);
  }

  return str;
}
