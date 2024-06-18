export const baseUrl = "https://jajiga-script.liara.run";
import Cookies from "js-cookie";

export const saveIntoLocalStorage = (key: string, value: string | {}) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string);
};

export const getUrlParam = (key: string) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(key);
};

export const addParamToUrl = (param: string, value: string) => {
  let url = new URL(location.href);
  let searchParams = url.searchParams;
  searchParams.set(param, value);
  url.search = searchParams.toString();
  location.href = url.toString();
};

export const removeParameterFromURL = (param: string) => {
  var url = new URL(window.location.href);
  url.searchParams.delete(param as string);
  window.history.replaceState(null, null as any, url);
  location.reload();
};

export const saveIntoCookies = (
  value: string,
  expire: number,
  httpOnly: boolean,
) => {
  Cookies.set("RefreshToken", value, {
    expires: expire, // Expire in 365 days, you can adjust as needed
    httpOnly: true, // httpOnly can't be set from the client-side, it's a server-side flag
    secure: true, // true if your site is HTTPS
    sameSite: "none",
  });
};
