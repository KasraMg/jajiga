import { cookies } from "next/headers";
import { baseUrl } from "./utils"; 
export async function getUser() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("AccessToken"); 
  const res = await fetch(`${baseUrl}/getMe`, {
    headers: {
      Authorization: `Bearer ${accessToken?.value}`,
    },
  });
  return res.json();
} 

export async function fetchStep6Items() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("AccessToken");
  const res = await fetch(`${baseUrl}/villa/facility`, {
    headers: {
      Authorization: `Bearer ${accessToken?.value}`,
    },
  });
  return res.json();
}

