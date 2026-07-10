import RulesScreen from "@/src/components/screens/rules/rules-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "قوانین و مقررات",
};

const page = () => {
  return <RulesScreen />;
};

export default page;
