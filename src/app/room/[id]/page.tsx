import { Metadata } from "next";
import RoomScreen from "@/src/components/screens/room/(id)/room-screen";

export const metadata: Metadata = {
  title: "جاجیگا | اجاره اقامتگاه",
};

const Room = ({ params }: { params: { id: string } }) => {
  const villaId = params.id;
  // <Hydrated queryKey={["villa", villaId]} queryFn={getVilla as any}>

  return <RoomScreen />;
};

export default Room;
