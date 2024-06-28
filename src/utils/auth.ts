"use client";

import useCustomQuery from "@/src/hooks/useCustomQuery";
import { authStore } from "@/src/stores/auth"; 
import { baseUrl } from "@/src/utils/utils";
import Cookies from "js-cookie";
import { useEffect } from "react";

const Auth = () => {
  const accessToken = Cookies.get("AccessToken"); 
  async function fetchUsers() {
    const res = await fetch(`${baseUrl}/getMe`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.json();
  }

  const { data, status, refetch } = useCustomQuery(["auth"], fetchUsers,{
    // enabled: !!accessToken,
  });
  const { setUserData } = authStore((state) => state); 

  useEffect(() => {
    if (accessToken) {
      refetch();
    }
  }, [accessToken, refetch]); 

  
  useEffect(() => {
    if (status === "success" && data?.user) { 
      setUserData(data.user); 
    }
    console.log(data);
    
  }, [status, data, setUserData]);
  return null;
};

export default Auth;
