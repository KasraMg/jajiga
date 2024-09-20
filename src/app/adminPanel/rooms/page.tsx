"use client";
import Layout from "@/src/components/layouts/adminLayout/page";
import { Button } from "@/src/components/shadcn/ui/button";
import useGetData from "@/src/hooks/useGetData";
import { VillaDetails } from "@/src/types/Villa.types";
import { getAllVillas } from "@/src/utils/fetchs";
import { convertToJalali } from "@/src/utils/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import swal from "sweetalert";
import usePostData from "@/src/hooks/usePostData";
import Loader, { ButtonLoader } from "@/src/components/modules/loader/Loader";
import useDeleteData from "@/src/hooks/useDeleteData";
import { roomColumns } from "@/src/utils/dataTableColumns";
import { villaResTypes } from "@/src/types/AdminPanel.types";

const page = () => {
  const { data: villas, isPending: getVillasPending } =
    useGetData<villaResTypes>(["allVillas"], getAllVillas);

  const [villaId, setVillaId] = useState(""); 
  const [data, setData] = useState<VillaDetails[]>([]);
  const [pending, setPending] = useState(true);
  
  const [roomStatusChange, setRoomStatusChange] = useState<
    [] | [string, string]
  >([]);

  const { mutate: mutation, isPending } = usePostData<any>(
    `/villa/accessVisit/${roomStatusChange[0]}/${roomStatusChange[1]}`,
    `ویلا با موفقیت ${roomStatusChange[0] === "accept" ? "تایید" : "رد"} شد`,
    true,
    null,
    true,
    "allVillas",
  );

  useEffect(() => {
    const tableData: unknown = villas?.villas.map((villa: VillaDetails) => ({
      userData: villa.user.firstName + " " + villa.user.lastName,
      preview: <Link href={`/room/${villa._id}`}>مشاهده</Link>,
      address: villa.address.state + "،" + villa.address.city,
      reserves: villa.booked,
      status:
        villa.isAccepted === "true" ? (
          "تایید شده"
        ) : villa.isAccepted === "rejected" ? (
          <p>رد شده</p>
        ) : (
          <div className="flex gap-1">
            <Button
              onClick={() => {
                setRoomStatusChange(["accept", villa._id]);
                mutation(null);
              }}
              className="h-8 w-12 justify-center"
              variant={"blue"}
            >
              {roomStatusChange[0] == "accept" && isPending ? (
                <ButtonLoader />
              ) : (
                "تایید"
              )}
            </Button>
            <Button
              onClick={() => {
                setRoomStatusChange(["reject", villa._id]);
                mutation(null);
              }}
              className="h-8 w-12 justify-center"
              variant={"danger"}
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
          onClick={() => villaDeleteHandler(villa._id)}
          variant={"danger"}
        >
          حذف
        </Button>
      ),
    }));
    setData(tableData as VillaDetails[]);
  }, [villas]);

  useEffect(() => {
    if (data) {
      setPending(false);
    }
  }, [data]);

  const { mutate: deleteHandlerMutation, isPending: deleteHandlerPending } =
    useDeleteData(
      `/villa/delete/${villaId}`,
      "ویلا با موفقیت حذف شد",
      "allVillas",
    );
  const villaDeleteHandler = (id: string) => {
    swal({
      title: "آیا از حذف ویلا مطمئن هستید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((res) => {
      if (res) {
        setVillaId(id);
        deleteHandlerMutation();
      }
    });
  };
  return (
    <Layout>
      <div className="relative my-10">
        <div className="before:absolute before:inset-0 before:top-4 before:h-[2px] before:w-full before:bg-red-600 before:content-['']">
          <p className="before: relative z-50 w-max bg-white pl-3 text-2xl before:absolute before:right-0 before:top-0 before:h-8 before:w-8 before:rotate-45 before:bg-[#dc26261c] before:content-['']">
            آخرین اقامتگاه ها
          </p>
        </div>
      </div>
      <DataTable
        columns={roomColumns as any}
        data={data}
        progressPending={pending}
        progressComponent={".... "}
        pagination
      />
      {getVillasPending && <Loader />}
      {deleteHandlerPending && <Loader />}
    </Layout>
  );
};

export default page;
