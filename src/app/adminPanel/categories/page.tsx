"use client";
import Layout from "@/src/components/layouts/adminLayout/page";
import { Button } from "@/src/components/shadcn/ui/button";
import useGetData from "@/src/hooks/useGetData";
import { getAllCategories } from "@/src/utils/fetchs";
import { convertToJalali } from "@/src/utils/utils";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import swal from "sweetalert"; 
import Loader from "@/src/components/modules/loader/Loader";
import useDeleteData from "@/src/hooks/useDeleteData";
import AddCategoryModal from "@/src/components/templates/adminPanel/categories/AddCategoryModal";
import { categoryColumns } from "@/src/utils/dataTableColumns";

const page = () => {
  const { data: categories, isPending: getCategoriesPending } = useGetData(
    ["allCategories"],
    getAllCategories,
  );
  const [categoryId, setCategoryId] = useState("");

  let data = [];

  useEffect(() => {
    const tableData = categories?.categories.map((category) => ({
      title: category.title,
      count: 3,
      register: convertToJalali(category.createdAt.slice(0, 10)),
      delete: (
        <Button
          onClick={() => categoryDeleteHandler(category._id)}
          variant={"danger"}
        >
          حذف
        </Button>
      ),
    }));
    data = tableData;
    console.log(categories);
  }, [categories]);

  const [pending, setPending] = useState(true);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    if (categories) {
      setRows(data);
      setPending(false);
    }
  }, [categories]);

  const { mutate: deleteHandlerMutation, isPending: deleteHandlerPending } =
    useDeleteData(
      `/category/remove/${categoryId}`,
      "دسته بندی با موفقیت حذف شد",
      "allCategories",
    );
  const categoryDeleteHandler = (id: string) => {
    swal({
      title: "آیا از حذف دسته بندی مطمئن هستید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((res) => {
      if (res) {
        setCategoryId(id);
        deleteHandlerMutation();
      }
    });
  };
  return (
    <Layout>
      <div className="relative my-10">
        <div className="before:absolute before:inset-0 before:top-4 before:h-[2px] before:w-full before:bg-red-600 before:content-['']">
          <p className="before: relative z-50 w-max bg-white pl-3 text-2xl before:absolute before:right-0 before:top-0 before:h-8 before:w-8 before:rotate-45 before:bg-[#dc26261c] before:content-['']">
            دسته بندی ها
          </p>
        </div>
      </div>
      <AddCategoryModal />
      <DataTable
        columns={categoryColumns as any}
        data={rows}
        progressPending={pending}
        progressComponent={".... "}
        pagination
      />
      {getCategoriesPending && <Loader />}
      {deleteHandlerPending && <Loader />}
    </Layout>
  );
};

export default page;
