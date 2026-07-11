import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { getVilla } from "../utils/fetchs";
import Cookies from "js-cookie";

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

export const useUpdateVilla = (id: string, formData = false) => {
  const accessToken = Cookies.get("AccessToken");

  return useMutation({
    mutationFn: async (body: FormData | object) => {
      const headers: HeadersInit = {
        Authorization: `Bearer ${accessToken}`,
      };
      if (!formData) {
        headers["Content-Type"] = "application/json";
      }

      return fetch(`${process.env.NEXT_PUBLIC_API_URL}/villa/update/${id}`, {
        method: "PUT",
        credentials: "include",
        headers,
        body: formData ? (body as FormData) : JSON.stringify(body),
      }).then((res) => res.json());
    },
  });
};

export const useAddVilla = <T extends object>(formData = false) => {
  return useMutation({
    mutationFn: async (body: T) => {
      const headers: HeadersInit = {};

      if (!formData) {
        headers["Content-Type"] = "application/json";
      }

      return fetch(`${process.env.NEXT_PUBLIC_API_URL}/villa/add`, {
        method: "POST",
        credentials: "include",
        headers,
        body: formData ? (body as FormData) : JSON.stringify(body),
      }).then((res) => res.json());
    },
  });
};
