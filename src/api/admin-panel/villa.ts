import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/src/components/shadcn/ui/use-toast";

export const useVillaAccessVisit = ({
  action,
  villaId,
}: {
  action: string;
  villaId: string;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const accessToken = Cookies.get("AccessToken");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/villa/accessVisit/${action}/${villaId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          credentials: "include",
        },
      );

      if (!res.ok) {
        throw new Error("خطا در تغییر وضعیت ویلا");
      }

      return res.json();
    },

    onSuccess: () => {
      toast({
        variant: "success",
        title: `ویلا با موفقیت ${action === "accept" ? "تایید" : "رد"} شد`,
      });

      queryClient.invalidateQueries({
        queryKey: ["allVillas"],
      });
    },
  });
};

export const useGetAllVillas = () => {
  const getAllVillas = async () => {
    const accessToken = Cookies.get("AccessToken");
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/villa/getAll`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.json();
  };
  return useQuery({
    queryKey: ["allVillas"],
    queryFn: getAllVillas,
  });
};

export const useDeleteVilla = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (villaId: string) => {
      const accessToken = Cookies.get("AccessToken");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/villa/delete/${villaId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          credentials: "include",
        },
      );

      if (!res.ok) {
        throw new Error("خطا در حذف ویلا");
      }

      return res.json();
    },

    onSuccess: () => {
      toast({
        variant: "success",
        title: "ویلا با موفقیت حذف شد",
      });

      queryClient.invalidateQueries({
        queryKey: ["allVillas"],
      });
      queryClient.invalidateQueries({
        queryKey: ["auth"],
      });
    },
  });
};
