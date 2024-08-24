"use client";
import Layout from "@/src/components/layouts/adminLayout/page";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

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
    name: "وضعیت",
    selector: (row) => row.status,
    sortable: true,
  },
  {
    name: "زمان ثبت",
    selector: (row) => row.register,
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
  const [pending, setPending] = useState(true);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(data);
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
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
