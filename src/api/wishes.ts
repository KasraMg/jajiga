import Cookies from "js-cookie";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { VillaDetails } from "../types/villa.types";

export interface WishesResponse {
  faveVillas: VillaDetails[];
}

const getWishes = async (): Promise<WishesResponse> => {
  const accessToken = Cookies.get("AccessToken");

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wishes`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch wishes");
  }

  return res.json();
};

export const useGetWishes = () => {
  return useQuery({
    queryKey: ["wishes"],
    queryFn: getWishes,
    refetchOnWindowFocus: false,
  });
};
const toggleWish = async ({
  villaId,
  flag,
}: {
  villaId: string;
  flag: boolean;
}) => {
  const accessToken = Cookies.get("AccessToken");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wishes/${villaId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ flag: flag }),
    },
  );

  if (!res.ok) {
    throw new Error("خطا");
  }

  return res.json();
};

export const useToggleWish = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleWish,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["wishes"],
      });
    },
  });
};
