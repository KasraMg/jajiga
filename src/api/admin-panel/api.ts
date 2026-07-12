import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/src/components/shadcn/ui/use-toast";

export const useDahsboard = () => {
  const getDashboardInfoes = async () => {
    const accessToken = Cookies.get("AccessToken");
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin-panel`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.json();
  };
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboardInfoes,
  });
};

