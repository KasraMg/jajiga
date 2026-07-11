"use client";

import Container from "@/src/components/modules/container/container";
import Details from "./partials/details/Details";
import Gallery from "./partials/gallery/Gallery";
import { useRouter } from "next/navigation";
import NotFound from "./partials/NotFound";
import { useEffect } from "react";
import { authStore } from "@/src/stores/auth";
import { useVilla } from "@/src/api/villa";
import Reservation from "./partials/reservation/Reservation";

const RoomScreen = ({ id }: { id: string }) => {
  const router = useRouter();
  const { userData, isPending } = authStore((state) => state);

  const { data, status, fetchStatus, isLoading, isFetching } = useVilla(id);
  console.log("ROOM QUERY", {
    id,
    data,
    status,
    fetchStatus,
    isLoading,
    isFetching,
  });
  useEffect(() => {
    if (
      data &&
      data.statusCode === 200 &&
      !isPending &&
      !userData &&
      data?.villa.isAccepted !== "true"
    ) {
      router.push("/");
    }
    if (data && data.statusCode === 200 && userData && !isPending) {
      !data.villa.isOwner &&
        !isPending &&
        data.villa.isAccepted !== "true" &&
        userData.user.role !== "admin" &&
        router.push("/");
    } else {
      data &&
        data.statusCode === 200 &&
        !isPending &&
        data.villa.isAccepted !== "true" &&
        router.push("/");
    }
  }, [isPending]);

  return (
    <Container>
      <div className="Container mt-[3.8rem] md:!mt-20">
        {data?.statusCode === 200 ? (
          <div>
            <Gallery {...data.villa} />
            <div className="flex items-start gap-8 px-0 md:mt-9 md:px-4 xl:px-0">
              <Details {...data} />
              <Reservation {...data} />
            </div>
          </div>
        ) : (
          <NotFound />
        )}
      </div>
    </Container>
  );
};

export default RoomScreen;
