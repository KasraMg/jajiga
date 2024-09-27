import { baseUrl } from "./utils";
import Cookies from "js-cookie";

export async function getPrivilegedVillas() {
  const res = await fetch(`${baseUrl}/villa/privilegedVillas`, {});
  return res.json();
}

export async function getAllActivatedVillas() {
  const res = await fetch(`${baseUrl}/villa/getAllActivated`, {});
  return res.json();
}
export async function getFastSearchOptions() {
  const res = await fetch(`${baseUrl}/villa/quickSearchByZone`, {});
  return res.json();
}
export async function getPopularDestinations() {
  const res = await fetch(
    `${baseUrl}/villa/popularTowns
    `,
    {},
  );
  return res.json();
}

export async function fetchWishes() {
  const accessToken = Cookies.get("AccessToken");

  const res = await fetch(`${baseUrl}/wishes`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
}

export async function getAllComments() {
  const accessToken = Cookies.get("AccessToken");
  const res = await fetch(`${baseUrl}/comment/getAll`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
}
export async function getAllVillas() {
  const accessToken = Cookies.get("AccessToken");
  const res = await fetch(`${baseUrl}/villa/getAll`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
}
export async function getAllUsers() {
  const accessToken = Cookies.get("AccessToken");
  const res = await fetch(`${baseUrl}/user/getAll`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
}
export async function getDashboardInfoes() {
  const accessToken = Cookies.get("AccessToken");
  const res = await fetch(`${baseUrl}/admin-panel`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
}
export async function getAllCategories() {
  const accessToken = Cookies.get("AccessToken");
  const res = await fetch(`${baseUrl}/category/getAll`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
}
