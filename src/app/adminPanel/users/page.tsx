"use client";
import Layout from "@/src/components/layouts/adminLayout/page";
import { Button } from "@/src/components/shadcn/ui/button";
import useGetData from "@/src/hooks/useGetData";
import { getAllUsers } from "@/src/utils/fetchs";
import { convertToJalali } from "@/src/utils/utils";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import swal from "sweetalert";

const columns = [
  {
    name: "کاربر",
    selector: (row) => row.userData,
    sortable: true,
  },
  {
    name: "شماره",
    selector: (row) => row.phone,
    sortable: true,
  },
  {
    name: "تعداد اقامتگاه",
    selector: (row) => row.rooms,
    sortable: true,
  },
  {
    name: "تاریخ عضویت",
    selector: (row) => row.register,
    sortable: true,
  },
  {
    name: "تعداد رزرو",
    selector: (row) => row.reserves,
    sortable: true,
  },
  {
    name: "سطح",
    selector: (row) => row.role,
    sortable: true,
  },
  {
    name: "بن",
    selector: (row) => row.ban,
    sortable: true,
  },
];

const showBodyHandler = (body: string) => {
  swal({
    title: body,
    buttons: ["تایید", false],
  });
};

const page = () => {
  const { data: users, status, isLoading } = useGetData(["users"], getAllUsers);
  let data = [];
  console.log(users);

  useEffect(() => {
    users?.users.map((user) =>
      data.push({
        userData: user.firstName + user.lastName,
        phone: user.phone,
        rooms: "3",
        register: convertToJalali(user.createdAt.slice(0, 10)),
        reserves: "3",
        role: user.role === "user" ? "کاربر عادی" : "ادمین",
        ban: <Button variant={"danger"}>بن</Button>,
      }),
    );
  }, [users]);

  const [pending, setPending] = useState(true);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    if (users) {
      setRows(data);
      setPending(false);
    }
  }, [users]);
  return (
    <Layout>
      <div className="relative my-10">
        <div className="before:absolute before:inset-0 before:top-4 before:h-[2px] before:w-full before:bg-red-600 before:content-['']">
          <p className="before: relative z-50 w-max bg-white pl-3 text-2xl before:absolute before:right-0 before:top-0 before:h-8 before:w-8 before:rotate-45 before:bg-[#dc26261c] before:content-['']">
            کاربران
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
