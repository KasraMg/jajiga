import Container from "@/src/components/modules/container/Container";
import Filters from "@/src/components/templates/rooms/filters/Filters";
import Posts from "@/src/components/templates/rooms/posts/Posts";
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
  return (
    <Container navbarContainer={true} disableFooter={true}>
      <main className="mt-[58px]">
        <Filters />
        <Posts />
      </main>
    </Container>
  );
};

export default rooms;
