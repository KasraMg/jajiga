"use client";

import { Button } from "@/src/components/shadcn/ui/button";
import DataTable from "react-data-table-component";
import Loader from "@/src/components/modules/loader/loader";
import Metadata from "@/src/components/modules/meta-data";
import { categoryColumns } from "@/src/utils/data-table-columns";
import { convertToJalali } from "@/src/utils/utils";
import useCategoriesScreen from "./hook";
import AddCategoryModal from "./partials/add-category-modal";
import { categoryTypes } from "@/src/types/adminPanel.types";

const CategoriesScreen = () => {
  const {
    categories,
    getCategoriesPending,
    categoryDeleteHandler,
    deletePending,
  } = useCategoriesScreen();

  const tableData = categories.map((category: categoryTypes) => ({
    title: category.title,
    count: category.villas,
    register:category.createdAt? convertToJalali(category.createdAt.slice(0, 10)) : '5 خرداد 1405',
    delete: (
      <Button
        variant="danger"
        onClick={() => categoryDeleteHandler(category._id)}
      >
        حذف
      </Button>
    ),
  }));

  return (
    <>
      <div className="relative my-10">
        <div className="before:absolute before:inset-0 before:top-4 before:h-[2px] before:w-full before:bg-red-600 before:content-['']">
          <p className="relative z-50 w-max bg-white pl-3 text-2xl">
            دسته بندی ها
          </p>
        </div>
      </div>

      <Metadata
        seoTitle="جاجیگا | دسته بندی ها"
        seoDescription="مدیریت دسته بندی ها"
      />

      <AddCategoryModal />

      <DataTable
        columns={categoryColumns as any}
        data={tableData}
        progressPending={getCategoriesPending}
        pagination
        progressComponent="..."
        noDataComponent="دسته بندی یافت نشد"
      />

      {(getCategoriesPending || deletePending) && <Loader />}
    </>
  );
};

export default CategoriesScreen;
