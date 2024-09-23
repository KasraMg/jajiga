"use client";
import Layout from "@/src/components/layouts/adminLayout/page";
import { Button } from "@/src/components/shadcn/ui/button";
import useGetData from "@/src/hooks/useGetData";
import { VillaDetails } from "@/src/types/Villa.types";
import { getAllVillas } from "@/src/utils/fetchs";
import { baseUrl, convertToJalali } from "@/src/utils/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Cookies from "js-cookie";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import swal from "sweetalert";

const columns = [
  {
    name: "اطلاعات مالک",
    selector: (row) => row.userData,
    sortable: true,
  },
  {
    name: "پیش نمایش",
    selector: (row) => row.preview,
    sortable: true,
  },
  {
    name: "آدرس",
    selector: (row) => row.address,
    sortable: true,
  },
  {
    name: "تعداد رزروها",
    selector: (row) => row.reserves,
    sortable: true,
  },
  {
    name: "وضعیت",
    selector: (row) => row.status,
    sortable: true,
  },
  {
    name: "زمان ثبت",
    selector: (row) => row.register,
    sortable: true,
  },
  {
    name: "حذف ویلا",
    selector: (row) => row.delete,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    userData: "john",
    status: "active",
    preview: "23243435343",
    register: "2022/03/24",
    address: "efefe",
  },
  {
    id: 2,
    userData: "john",
    status: "active",
    preview: "23243435343",
    register: "2022/03/24",
    address: "efefe",
  },
  {
    id: 3,
    userData: "john",
    status: "active",
    preview: "23243435343",
    register: "2022/03/24",
    address: "efefe",
  },
  {
    id: 4,
    userData: "john",
    status: "active",
    preview: "23243435343",
    register: "2022/03/24",
    address: "efefe",
  },
];

const page = () => {
  const { data: villas } = useGetData(["allVillas"], getAllVillas);
  const queryClient = useQueryClient();

  let data = [];
  console.log(villas);

  useEffect(() => {
    villas?.villas.map((villa: VillaDetails) =>
      data.push({
        userData: villa.user.firstName + " " + villa.user.lastName,
        preview: <Link href={`/room/${villa._id}`}>مشاهده</Link>,
        address: villa.address.state + "،" + villa.address.city,
        reserves: 1,
        status: villa.isAccepted ? (
          "تایید شده"
        ) : (
          <div className="flex gap-1">
            <Button className="w-12 justify-center" variant={"blue"}>
              تایید
            </Button>
            <Button className="w-12 justify-center" variant={"danger"}>
              رد
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
      }),
    );
  }, [villas]);

  const [pending, setPending] = useState(true);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    if (villas) {
      setRows(data);
      setPending(false);
    }
  }, [villas]);

  const accessToken = Cookies.get("AccessToken");

  const mutation = useMutation({
    mutationFn: async (id: string) => {
      return await fetch(`${baseUrl}/villa/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }).then((res) => res.json());
    },
    onSuccess: (data) => {
      console.log(data);

      if (data.statusCode === 200) {
        queryClient.invalidateQueries({ queryKey: ["allVillas"] });

        toast({
          variant: "success",
          title: "ویلا با موفقیت حذف شد",
        });
      }
    },
  });

  const villaDeleteHandler = (id: string) => {
    swal({
      title: "آیا از حذف ویلا مطمئن هستید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((res) => {
      if (res) {
        mutation.mutate(id);
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
        columns={columns}
        data={rows}
        progressPending={pending}
        progressComponent={".... "}
        pagination
      />
    </Layout>
  );
};

export default page;
