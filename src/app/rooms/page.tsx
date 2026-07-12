import RoomsScreen from "@/src/components/screens/rooms/rooms-screen";
import { Metadata } from "next";
import Hydrated from "@/src/providers/hydrated";
import { getVillas } from "@/src/utils/server-fetchs";

interface RoomsProps {
  params: {
    city: string;
  };
  searchParams: {
    city: string;
    gstnum: string;
    minp: string;
    maxp: string;
    zone: string;
    feature: string;
    type: string;
    order: string;
  };
}

export async function generateMetadata({
  searchParams,
}: RoomsProps): Promise<Metadata> {
  return {
    title: `جاجیگا | ${searchParams.city || "همه شهرها"}`,
    description: `اقامتگاه‌های برتر در ${searchParams.city}`,
  };
}

const rooms = ({ searchParams }: RoomsProps) => {
  const params = new URLSearchParams(searchParams);

  return (
    <Hydrated
      queryKey={["villas", params.toString()]}
      queryFn={() => getVillas(searchParams)}
    >
      <RoomsScreen />
    </Hydrated>
  );
};

export default rooms;
