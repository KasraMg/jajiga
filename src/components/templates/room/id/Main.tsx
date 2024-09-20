"use client";
import useGetData from "@/src/hooks/useGetData";
import Details from "./details/Details";
import Gallery from "./gallery/Gallery";
import Reservation from "./reservation/Reservation";
import Cookies from "js-cookie";
import { baseUrl } from "@/src/utils/utils";
import { useParams, useRouter } from "next/navigation";
import NotFound from "./NotFound";
import { useEffect } from "react";
import { authStore } from "@/src/stores/auth";
const Main = () => {
  const params = useParams();
  const router = useRouter();
  const { userData, isPending } = authStore((state) => state);

  async function getVilla() {
    const accessToken = Cookies.get("AccessToken"); 
    const headers = {
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    };
    const res = await fetch(`${baseUrl}/villa/get/${params.id}`, {
      headers,
    });
    return res.json();
  }

  const { data } = useGetData<any>(["villa"], getVilla);
 console.log(data);
 
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
