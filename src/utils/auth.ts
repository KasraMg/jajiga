
import { baseUrl } from "./utils";
import { cookies } from "next/headers";

const cookieStore = cookies();
const accessToken = cookieStore.get("AccessToken");
const useAuthUser = async () => {
  const res = await fetch(`${baseUrl}/getMe`, {
    headers: {
      Authorization: `Bearer ${accessToken?.value}`,
    },
  });
  return res.json();
};

export default useAuthUser;
