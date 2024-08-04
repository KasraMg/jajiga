"use client";
import { authStore } from "@/src/stores/auth";
import { useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { getUser } from "./clientFetchs";
import swal from "sweetalert";
import { useRouter } from "next/navigation";
import useGetData from "../hooks/useGetData";
import { userObj } from "../types/Auth.types";
import Loader from "../components/modules/loader/Loader";

const Auth = () => { 
  const { data, status, isLoading } = useGetData<userObj>(["auth"], getUser);
  const { setUserData, setLogin } = authStore((state) => state);

  useEffect(() => {
    if (status === "success" && data?.statusCode === 200) {
      setUserData(data);
      setLogin(true); 
    } else if (status === "success" && data?.statusCode === 500) {
      setLogin(false);
    } else {
      setLogin(false);
    }
    console.log(data);
  }, [status, data, setUserData]);

  return isLoading ? <Loader /> : null;
};

export default Auth;

export const useLogoutHandler = () => {
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
        queryClient.invalidateQueries({ queryKey: ["auth"] });
      }
    });
  };

  return logoutHandler;
};