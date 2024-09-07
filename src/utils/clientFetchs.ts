import Cookies from "js-cookie";
import { baseUrl } from "./utils";

export async function fetchStep6Items() {  
const accessToken = Cookies.get("AccessToken");

  const res = await fetch(`${baseUrl}/villa/facility`);
  return res.json();
}


export async function getUser() {  
const accessToken = Cookies.get("AccessToken");

  const res = await fetch(`${baseUrl}/getMe`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
}
 