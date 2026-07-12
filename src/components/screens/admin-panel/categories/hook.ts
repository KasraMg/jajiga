"use client";

import swal from "sweetalert";
import {
  useCategories,
  useDeleteCategory,
} from "@/src/api/admin-panel/category";

const useCategoriesScreen = () => {
  const {
    data,
    isPending: getCategoriesPending,
  } = useCategories();


  const {
    mutate: deleteCategoryMutation,
    isPending: deletePending,
  } = useDeleteCategory();


  const categoryDeleteHandler = (id: string) => {
    swal({
      title: "آیا از حذف دسته بندی مطمئن هستید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((res) => {
      if (res) {
        deleteCategoryMutation(id);
      }
    });
  };


  return {
    categories: data?.categories ?? [],
    getCategoriesPending,
    categoryDeleteHandler,
    deletePending,
  };
};


export default useCategoriesScreen;