"use client";

import useCustomQuery from "@/src/hooks/useCustomQuery";
import { authStore } from "@/src/stores/auth";
import { baseUrl } from "@/src/utils/utils";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useEffect } from "react";

const Auth = () => {
  
  async function fetchUsers() {
  const accessToken = Cookies.get("AccessToken"); 
    console.log(accessToken); 
    const res = await fetch(`${baseUrl}/getMe`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });  
    return res.json();
  }

  const { data, isLoading, status, isError, refetch } = useQuery({
    queryKey: ["auth"],
    queryFn:fetchUsers 
  });

  const { setUserData } = authStore((state) => state);
 
  useEffect(() => {
    if (status === "success" && data?.user) {
      setUserData(data.user);
    }
    console.log(data);
  }, [status, data, setUserData]);
  return null;
};

export default Auth;
