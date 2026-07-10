import { Metadata } from "next";
import LoginScreen from "@/src/components/screens/login/login-screen";

export const metadata: Metadata = {
  title: "جاجیگا | ورود  ",
};

const Login = () => {
  return <LoginScreen />;
};

export default Login;
