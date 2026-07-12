import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/src/components/shadcn/ui/use-toast";

export const useUser = () => {
  const getAllUsers = async () => {
    const accessToken = Cookies.get("AccessToken");
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/getAll`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.json();
  };
  return useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
};

export const useBanUser = (userPhone: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { reason: string }) => {
      const accessToken = Cookies.get("AccessToken");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/ban-user/${userPhone}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(data),
        },
      );

      if (!res.ok) {
        throw new Error("خطا در بن کردن کاربر");
      }

      return res.json();
    },

    onSuccess: (data) => {
      if (data.statusCode === 200) {
        queryClient.invalidateQueries({
          queryKey: ["users"],
        });
      } else {
        throw new Error("خطا در بن کردن کاربر");
      }
    },
  });
};

interface ChangeUserRolePayload {
  action: "promotion" | "demotion";
  phone: string;
}

export const useChangeUserRole = () => {
  const changeUserRole = async ({ action, phone }: ChangeUserRolePayload) => {
    const accessToken = Cookies.get("AccessToken");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/changeRole/${action}/${phone}`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    if (!res.ok) {
      throw new Error("خطا در تغییر سطح کاربر");
    }

    return res.json();
  };
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: changeUserRole,

    onSuccess: () => {
      toast({
        variant: "success",
        title: "تغییر سطح کاربر با موفقیت انجام شد",
      });

      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },

    onError: () => {
      toast({
        variant: "danger",
        title: "با عرض پوزش، لطفا مجدداً امتحان کنید",
      });
    },
  });
};
