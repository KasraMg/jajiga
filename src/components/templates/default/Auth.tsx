"use client";

import useCustomQuery from "@/src/hooks/useCustomQuery";
import { authStore } from "@/src/stores/auth";
import useAuthUser from "@/src/utils/auth";
import { baseUrl } from "@/src/utils/utils";
import Cookies from "js-cookie";

const Auth = () => {
  const accessToken = Cookies.get("AccessToken");
  async function fetchUsers() {
    const res = await fetch(`${baseUrl}/getMe`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }
    return res.json();
  }

  const { data, isLoading } = useCustomQuery(["auth"], fetchUsers);
  const { setUserData, userData } = authStore((state) => state);
  console.log(data);

  //   const data = useAuthUser();
  //   if (data.statusCode === 200) {
  //     console.log(data.user);
  //     setUserData(data.user);
  //     console.log(userData);

  //   }

  //   console.log(data);
  return "";
};

export default Auth;
