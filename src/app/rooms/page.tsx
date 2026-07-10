
import RoomsScreen from "@/src/components/screens/rooms/rooms-screen";
import { Metadata } from "next";
import React from "react";

interface RoomsProps {
  params: {
    city: string;
  };
  searchParams: {
    city: string;
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

const rooms = (params: RoomsProps) => {
  return <RoomsScreen />;
};

export default rooms;
