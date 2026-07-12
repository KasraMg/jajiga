"use client";

import { Button } from "@/src/components/shadcn/ui/button";
import Metadata from "@/src/components/modules/meta-data";
import Loader, {
  ButtonLoader,
} from "@/src/components/modules/loader/loader";
import DataTable from "react-data-table-component";
import Link from "next/link";
import { useMemo } from "react";
import { roomColumns } from "@/src/utils/data-table-columns";
import { convertToJalali } from "@/src/utils/utils";
import { VillaDetails } from "@/src/types/villa.types";
import { useRooms } from "./hook";

const RoomsScreen = () => {
  const {
    villas,
    getVillasPending,
    deleteHandlerPending,
    roomStatusChange,
    isPending,
    approveVilla,
    rejectVilla,
    villaDeleteHandler,
  } = useRooms();

  const tableData = useMemo(() => {
    return (
      villas?.villas.map((villa: VillaDetails) => ({
        userData: `${villa.user.firstName} ${villa.user.lastName}`,
        preview: <Link href={`/room/${villa._id}`}>مشاهده</Link>,
        address: `${villa.address.state}،${villa.address.city}`,
        reserves: villa.booked,
        status:
          villa.isAccepted === "true" ? (
            "تایید شده"
          ) : villa.isAccepted === "rejected" ? (
            <p>رد شده</p>
          ) : (
            <div className="flex gap-1">
              <Button
                variant="blue"
                className="h-8 w-12 justify-center"
                onClick={() => approveVilla(villa._id)}
              >
                {roomStatusChange[0] === "accept" && isPending ? (
                  <ButtonLoader />
                ) : (
                  "تایید"
                )}
              </Button>

              <Button
                variant="danger"
                className="h-8 w-12 justify-center"
                onClick={() => rejectVilla(villa._id)}
              >
                {roomStatusChange[0] === "reject" && isPending ? (
                  <ButtonLoader />
                ) : (
                  "رد"
                )}
              </Button>
            </div>
          ),

        register: convertToJalali(villa.createdAt.slice(0, 10)),

        delete: (
          <Button
            variant="danger"
            onClick={() => villaDeleteHandler(villa._id)}
          >
            حذف
          </Button>
        ),
      })) ?? []
    );
  }, [
    villas,
    approveVilla,
    rejectVilla,
    villaDeleteHandler,
    roomStatusChange,
    isPending,
  ]);

  return (
    <>
      <div className="relative my-10">
        <div className="before:absolute before:inset-0 before:top-4 before:h-[2px] before:w-full before:bg-red-600 before:content-['']">
          <p className="relative z-50 w-max bg-white pl-3 text-2xl before:absolute before:right-0 before:top-0 before:h-8 before:w-8 before:rotate-45 before:bg-[#dc26261c] before:content-['']">
            آخرین اقامتگاه ها
          </p>
        </div>
      </div>

      <Metadata
        seoTitle="جاجیگا | اقامتگاه ها"
        seoDescription="آمار اقامتگاه ها"
      />

      <DataTable
        columns={roomColumns as any}
        data={tableData}
        pagination
        progressPending={getVillasPending}
        progressComponent="..."
        noDataComponent="اقامتگاهی یافت نشد"
      />

      {deleteHandlerPending && <Loader />}
    </>
  );
};

export default RoomsScreen;