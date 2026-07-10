import SupportScreen from "@/src/components/screens/support/support-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "جاجیگا | پشتیبانی",
};
const page = () => {
  return <SupportScreen />;
};

export default page;
