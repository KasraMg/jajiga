"use client";
import { authStore } from "@/src/stores/auth";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import swal from "sweetalert";
import { useRouter } from "next/navigation";
import Loader from "./loader/loader";
import Cookies from "js-cookie";
import { useUser } from "@/src/api/user";

const Auth = () => {
  const { data, isLoading, status } = useUser();

  const { setUserData, setLogin, setIsPending } = authStore((state) => state);

  useEffect(() => {
    if (status === "success" && data?.statusCode === 200) {
      setUserData(data);
      setLogin(true);
      setIsPending(false);
    } else if (status === "success" && data?.statusCode === 500) {
      setLogin(false);
      setIsPending(false);
      setUserData(null);
    } else {
      setLogin(false);
      setUserData(null);
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
        Cookies.remove("AccessToken");
        Cookies.remove("RefreshToken");
        queryClient.setQueryData(["auth"], null);
        queryClient.removeQueries({
          queryKey: ["auth"],
        });
        localStorage.removeItem("otpRegisterPhoneNumber");
        localStorage.removeItem("registerUserData");
        localStorage.removeItem("otpLoginPhoneNumber");
        setUserData(null);
        setLogin(false);
        router.push("/");
      }
    });
  };

  return logoutHandler;
};

// const queryClient = useQueryClient();
// console.log(queryClient.getQueryData(["auth"]));
