import Cookies from "js-cookie";
import { baseUrl } from "./utils";
const accessToken = Cookies.get("AccessToken");

export async function fetchStep6Items() {
  const res = await fetch(`${baseUrl}/villa/facility`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
}
