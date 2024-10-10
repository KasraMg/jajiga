"use client";
import useGetData from "@/src/hooks/useGetData";
import Details from "./details/Details";
import Gallery from "./gallery/Gallery";
import Reservation from "./reservation/Reservation";
import Cookies from "js-cookie";
import { useParams, useRouter } from "next/navigation";
import NotFound from "./NotFound";
import { useEffect } from "react";
import { authStore } from "@/src/stores/auth";
import { getVilla } from "@/src/utils/fetchs";
const Main = () => {
  const params = useParams();
  const router = useRouter();
  const { userData, isPending } = authStore((state) => state);

  const { data } = useGetData<any>(["villa",params.id], () => getVilla(params.id as any));

  useEffect(() => {
    if (
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
    <div className="Container mt-[3.8rem] md:!mt-20">
      {data && data.statusCode === 200 ? (
        <div>
          <Gallery {...data.villa} />
          <div className="flex items-start gap-8 px-0 md:!mt-9 md:!px-4 xl:!px-0">
            <Details {...data} />
            <Reservation {...data} />
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Main;
