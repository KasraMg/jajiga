import NewRoomScreen from "@/src/components/screens/new-room/new-room-screen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "جاجیگا | ثبت اقامتگاه",
};

const page = () => {
  return <NewRoomScreen />;
};

export default page;
