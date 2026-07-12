"use client";

import Cookies from "js-cookie";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/src/components/shadcn/ui/use-toast";

const getCategories = async () => {
  const accessToken = Cookies.get("AccessToken");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/category/getAll`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  return res.json();
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["allCategories"],
    queryFn: getCategories,
  });
};

const deleteCategory = async (categoryId: string) => {
  const accessToken = Cookies.get("AccessToken");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/category/remove/${categoryId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  return res.json();
};

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCategory,

    onSuccess: (data) => {
      if (data.statusCode === 200) {
        toast({
          variant: "success",
          title: "دسته بندی با موفقیت حذف شد",
        });

        queryClient.invalidateQueries({
          queryKey: ["allCategories"],
        });
      }
    },

    onError: () => {
      toast({
        variant: "danger",
        title: "خطایی غیر منتظره رخ داد",
      });
    },
  });
};

interface CreateCategoryParams {
  title: string;
  href: string;
}

const createCategory = async ({ title, href }: CreateCategoryParams) => {
  const accessToken = Cookies.get("AccessToken");

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      title,
      href,
    }),
  });

  return res.json();
};

export const useCreateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCategory,

    onSuccess: (data) => {
      if (data.statusCode === 200) {
        toast({
          variant: "success",
          title: "دسته بندی با موفقیت ایجاد شد",
        });

        queryClient.invalidateQueries({
          queryKey: ["allCategories"],
        });
      } else {
        toast({
          variant: "danger",
          title: "با عرض پوزش لطفا مجدد مراحل رو طی کنید",
        });

        location.reload();
      }
    },

    onError: () => {
      toast({
        variant: "danger",
        title: "خطایی غیر منتظره رخ داد",
      });
    },
  });
};
