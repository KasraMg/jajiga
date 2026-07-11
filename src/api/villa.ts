import { useQuery } from "@tanstack/react-query";
import { getVilla } from "../utils/fetchs";
import { useMutation } from "@tanstack/react-query";

export const useVilla = (id: string) => {
  return useQuery({
    queryKey: ["villa", id],
    queryFn: () => getVilla(id),
    enabled: !!id,
  });
};

export const useVillaReservationPrice = (id: string) => {
  return useMutation({
    mutationFn: async (body: {
      date: {
        from: string;
        to: string;
      };
    }) => {
      return fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/villa/Book/price/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(body),
        },
      ).then((res) => res.json());
    },
  });
};

export const useDeleteVilla = (id: string) => {
  return useMutation({
    mutationFn: async () => {
      return fetch(`${process.env.NEXT_PUBLIC_API_URL}/villa/delete/${id}`, {
        method: "DELETE",
        credentials: "include",
      }).then((res) => res.json());
    },
  });
};
