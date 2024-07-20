import Cookies from "js-cookie";
import { baseUrl } from "./utils";
const accessToken = Cookies.get("AccessToken");

export async function fetchStep6Items() {
  console.log(accessToken);
  
  const res = await fetch(`${baseUrl}/villa/facility`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
}

export async function getUser() {  
  const res = await fetch(`${baseUrl}/getMe`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
}
