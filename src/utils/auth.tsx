"use client";
import { authStore } from "@/src/stores/auth";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { getUser } from "./fetchs";
import swal from "sweetalert";
import { useRouter } from "next/navigation";
import useGetData from "../hooks/useGetData";
import { UserObj } from "../types/Auth.types";
import Loader from "../components/modules/loader/Loader";
import Cookies from "js-cookie";

const Auth = () => {
  const { data, status, isLoading } = useGetData<UserObj>(["auth"], getUser);
  const { setUserData, setLogin, setIsPending } = authStore((state) => state);

  useEffect(() => {
    if (status === "success" && data?.statusCode === 200) {
      setUserData(data);
      console.log(data);
      
      setLogin(true);
      setIsPending(false);
    } else if (status === "success" && data?.statusCode === 500) {
      setLogin(false);
      setIsPending(false);
    } else {
      setLogin(false);
      setIsPending(false);
    } 
  }, [status, data, setUserData]);

  return isLoading ? <Loader /> : null;
};

export default Auth;

export const useLogoutHandler = () => {
  const { setUserData, setLogin } = authStore((state) => state);
  const queryClient = useQueryClient();
  const router = useRouter();

  const logoutHandler = () => {
    swal({
      title: "آیا از خروج اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((res) => {
      if (res) {
        router.push("/");
        Cookies.remove("AccessToken");
        Cookies.remove("RefreshToken");
        setUserData(null);
        setLogin(false);
        queryClient.invalidateQueries({ queryKey: ["auth"] });
      }
    });
  };

  return logoutHandler;
};
