import { Metadata } from "next";
import RoomScreen from "@/src/components/screens/room/(id)/room-screen";
import Hydrated from "@/src/providers/hydrated";
import { getVilla } from "@/src/utils/server-fetchs";

export const metadata: Metadata = {
  title: "جاجیگا | اجاره اقامتگاه",
};

const Room = ({ params }: { params: { id: string } }) => {
  const villaId = params.id;

  return (
    <Hydrated queryKey={["villa", villaId]} queryFn={getVilla as any}>
      <RoomScreen id={villaId} />
    </Hydrated> 
  );
};

export default Room;
