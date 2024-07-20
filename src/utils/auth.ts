"use client";

import useCustomQuery from "@/src/hooks/useCustomQuery";
import { authStore } from "@/src/stores/auth"; 
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { getUser } from "./clientFetchs";

const Auth = () => {
  const accessToken = Cookies.get("AccessToken"); 
  const { data, isLoading, status, isError, refetch } = useQuery({
    queryKey: ["auth"],
    queryFn: getUser,
  });

  const { setUserData } = authStore((state) => state);

  useEffect(() => {
    if (status === "success" && data.statusCode === 200) {
      setUserData(data);
    }
    console.log(data);
  }, [status, data, setUserData]);
  return null;
};

export default Auth;
