"use client";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import Otp from "./components/Otp";
import Register from "./components/Register";
import Password from "./components/Password";
import { getFromLocalStorage } from "@/src/utils/utils";

const Main = () => {
  const [step, setStep] = useState<string>("login");
  useEffect(() => {
    const registerPhoneNumber = getFromLocalStorage("otpRegisterPhoneNumber");
    const otpLoginPhoneNumber = getFromLocalStorage("otpLoginPhoneNumber");
    const registerUserData = getFromLocalStorage("registerUserData");

    if (!otpLoginPhoneNumber) {
      if (!registerUserData) {
        if (registerPhoneNumber) {
          setStep("register");
        }
      } else {
        setStep("login");
      }
    } else {
      setStep("password");
    }
  }, []);

  return (
    <div className="relative z-[9999] mt-20 px-3 sm:!px-0">
      {step === "login" && <Login setStep={setStep} />}
      {step === "otp" && <Otp setStep={setStep} />}
      {step === "register" && <Register setStep={setStep} />}
      {step === "password" && <Password setStep={setStep} />}
    </div>
  );
};

export default Main;
