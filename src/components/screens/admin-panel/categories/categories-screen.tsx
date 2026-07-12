"use client";
import { Button } from "@/src/components/shadcn/ui/button";
import useGetData from "@/src/hooks/useGetData";
import { getAllCategories } from "@/src/utils/fetchs";
import { convertToJalali } from "@/src/utils/utils";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import swal from "sweetalert";
import Loader from "@/src/components/modules/loader/loader";
import useDeleteData from "@/src/hooks/useDeleteData";
import AddCategoryModal from "@/src/components/screens/admin-panel/categories/partials/add-category-modal";
import { categoryColumns } from "@/src/utils/data-table-columns";
import { CategoryResTypes, categoryTypes } from "@/src/types/admin-panel.types";
import Metadata from "@/src/components/modules/meta-data";

const CategoriesScreen = () => {
  const { data: categories, isPending: getCategoriesPending } =
    useGetData<CategoryResTypes>(["allCategories"], getAllCategories);
  const [categoryId, setCategoryId] = useState("");
  const [data, setData] = useState<categoryTypes[]>([]);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const tableData: unknown = categories?.categories?.map((category) => ({
      title: category.title,
      count: category.villas,
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
    setData(tableData as categoryTypes[]);
  }, [categories]);

  useEffect(() => {
    if (data) {
      setPending(false);
    }
  }, [data]);

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
    <>
      <div className="relative my-10">
        <div className="before:absolute before:inset-0 before:top-4 before:h-[2px] before:w-full before:bg-red-600 before:content-['']">
          <p className="before: relative z-50 w-max bg-white pl-3 text-2xl before:absolute before:right-0 before:top-0 before:h-8 before:w-8 before:rotate-45 before:bg-[#dc26261c] before:content-['']">
            دسته بندی ها
          </p>
        </div>
      </div>
      <Metadata
        seoTitle={"جاجیگا | دسته بندی ها "}
        seoDescription={"مدیریت دسته بندی ها"}
      />
      <AddCategoryModal />
      <DataTable
        columns={categoryColumns as any}
        data={data}
        progressPending={pending}
        progressComponent={".... "}
        pagination
        noDataComponent="دسته بندی یافت نشد"
      />
      {getCategoriesPending && <Loader />}
      {deleteHandlerPending && <Loader />}
    </>
  );
};

export default CategoriesScreen;
