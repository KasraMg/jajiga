export const baseUrl = "https://jajiga-backend.liara.run";
import Cookies from "js-cookie";
import jalaali from "jalaali-js"

export const saveIntoLocalStorage = (key: string, value: string | {}) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string);
};
 
  
export function convertToJalali(date:string) {
  const newDate = new Date(date);
  const jalaaliDate = jalaali.toJalaali(newDate.getFullYear(), newDate.getMonth() + 1, newDate.getDate());

  const months = [
    'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
    'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
  ];

  const day = jalaaliDate.jd;
  const month = months[jalaaliDate.jm - 1];
  const year = jalaaliDate.jy;

  return `${day} ${month} ${year}`;
}
 

 