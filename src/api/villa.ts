import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

export const useVilla = (id: string) => {
  async function getVilla(id: string) {
    const accessToken = Cookies.get("AccessToken");
    const headers = {
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/villa/get/${id}`,
      {
        headers,
      },
    );
    return res.json();
  }

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

export const useGetVillas = (
  data: {
    city: string;
    order: string;
    maximumSpace: string | null;
    minPrice: string | null;
    maxPrice: string | null;
    facilities: string | null;
    villaZone: string | null;
    villaType: string | null;
  },
  searchParams: any,
) => {
  const accessToken = Cookies.get("AccessToken");
  const getVilla = async () => {
    const params = new URLSearchParams();

    params.set("city", data.city);

    if (data.order) params.set("order", data.order);
    if (data.maximumSpace) params.set("gstnum", data.maximumSpace);
    if (data.minPrice) params.set("minp", data.minPrice);
    if (data.maxPrice) params.set("maxp", data.maxPrice);
    if (data.villaZone) params.set("zone", data.villaZone);
    if (data.facilities) params.set("feature", data.facilities);
    if (data.villaType) params.set("type", data.villaType);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/villa/s?${params.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return res.json();
  };

  return useQuery({
    queryKey: ["villas", searchParams],
    queryFn: getVilla,
    refetchOnWindowFocus: false,
  });
};
