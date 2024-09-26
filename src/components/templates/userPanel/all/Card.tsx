import { Button } from "@/src/components/shadcn/ui/button";
import { VillaDetails } from "@/src/types/Villa.types";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { SlReload } from "react-icons/sl";
import swal from "sweetalert";
import Image from "next/image";
import useDeleteData from "@/src/hooks/useDeleteData";
import ReserveModal from "./ReserveModal";

const Card = (villa: VillaDetails) => {
  console.log(villa);
  const [villaId, setVillaId] = useState("");

  const villaDeleteHandler = (id: string) => {
    swal({
      title: "آیا از حذف ویلا مطمئن هستید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((res) => {
      if (res) {
        setVillaId(id);
        mutation();
      }
    });
  };

  const { mutate: mutation, isPending } = useDeleteData(
    `/villa/delete/${villaId}`,
    "ویلا با موفقیت حذف شد",
    "auth",
  );
  return (
    <div
      className="w-full xl:!w-[330px]"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      }}
    >
      <div className="relative w-full">
        <Link
          href={villa.isAccepted === "rejected" ? "" : `/room/${villa._id}`}
          className={
            villa.isAccepted === "rejected" ? "pointer-events-none" : ""
          }
        >
          {villa.cover.length ? (
            <Image
              crossOrigin="anonymous"
              className="h-[210px] w-full rounded-t-md"
              src={`https://jajiga-backend.liara.run/villa/covers/${villa.cover[0]}`}
              width={1000}
              height={1000}
              alt="flag"
            />
          ) : (
            <Image
              className="h-[210px] w-full rounded-t-lg"
              src="https://www.jajiga.com/static/img/rooms/blankHome.png"
              width={1000}
              height={1000}
              alt=""
            />
          )}
        </Link>

        <div className="absolute bottom-0 left-0 flex w-full items-center justify-between rounded-t-lg bg-[#00000080] px-3 py-2">
          <p className="text-sm font-thin text-white">
            {villa.address.state}،{villa.address.city}
          </p>
          <p className="rounded-full bg-white p-1 px-2 text-sm font-thin text-black">
            کد: ({villa._id.slice(18, 26)})
          </p>
        </div>
        <div className="absolute right-0 top-3 flex items-center gap-2 rounded-l-full bg-customYellow p-1 pl-2">
          <SlReload />
          <p className="text-sm text-gray-700">
            {villa.isAccepted === "rejected"
              ? "رد شده"
              : villa.finished
                ? "تکمیل شده"
                : " در حال تکمیل"}
          </p>
        </div>
      </div>
      <div className="px-2 py-3">
        <div className="mb-2 flex items-center gap-3">
          <div className="w-full rounded-full bg-[#f5f5f5]">
            <div
              style={{ width: ((villa.step - 1) / (9 - 1)) * 100 + "%" }}
              className={`h-3 rounded-full bg-customYellow text-center`}
            ></div>
          </div>
          <p className="text-sm font-thin">
            {" "}
            {((villa.step - 1) / (9 - 1)) * 100}%
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={() => villaDeleteHandler(villa._id)}
            className="flex w-full justify-center gap-2 px-4 text-xs xl:!px-8"
            variant={"danger"}
          >
            <FaRegTrashCan />
            حذف
          </Button>
          {villa.isAccepted !== "rejected" &&
            (villa.finished ? (
              <Link className="w-full" href={`/room/edit/${villa._id}`}>
                <Button
                  className="flex w-full justify-center gap-2 px-4 text-xs xl:!px-8"
                  variant={"blue"}
                >
                  ویرایش
                  <FaChevronLeft />
                </Button>
              </Link>
            ) : (
              <Link className="w-full" href={"/profile"}>
                <Button
                  className="flex w-full justify-center gap-2 px-4 text-xs xl:!px-8"
                  variant={"main"}
                >
                  ادامه ثبت
                  <FaChevronLeft />
                </Button>
              </Link>
            ))}
        </div>
        {villa.isAccepted === "true" &&
          (typeof villa.booked !== 'number' &&  villa.booked.length ? (
            <ReserveModal booked={villa.booked} />
          ) : (
            <p className="mt-5 text-center text-sm">
              رزروی برای این ویلا ثبت نشده است
            </p>
          ))}
      </div>
    </div>
  );
};

export default Card;
