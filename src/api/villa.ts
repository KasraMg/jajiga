import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "../components/shadcn/ui/use-toast";

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

export const useEditVilla = <T extends object>(
  options: {
    villaId?: string;
    formData?: boolean;
  } = {},
) => {
  const createOrUpdateVilla = async <T>(
    data: T,
    options: {
      villaId?: string;
      formData?: boolean;
    },
  ) => {
    const accessToken = Cookies.get("AccessToken");

    const headers: HeadersInit = {
      Authorization: `Bearer ${accessToken}`,
    };

    if (!options.formData) {
      headers["Content-Type"] = "application/json";
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${
        options.villaId ? `/villa/update/${options.villaId}` : "/villa/add"
      }`,
      {
        method: options.villaId ? "PUT" : "POST",
        headers,
        credentials: "include",
        body: options.formData ? (data as FormData) : JSON.stringify(data),
      },
    );

    if (!res.ok) {
      throw new Error("خطا در ثبت ویلا");
    }

    return res.json();
  };

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: T) => createOrUpdateVilla(data, options),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["auth"],
      });
    },
  });
};

export const useUploadVillaImages = (villaId: string) => {
  const uploadVillaImages = async (villaId: string, formData: FormData) => {
    const accessToken = Cookies.get("AccessToken");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/villa/update/${villaId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      },
    );

    if (!res.ok) {
      throw new Error("خطا در آپلود تصاویر");
    }

    return res.json();
  };

  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => uploadVillaImages(villaId, formData),

    onSuccess: () => {
      toast({
        variant: "success",
        title: "اطلاعات با موفقیت بروزرسانی شد",
      });

      queryClient.invalidateQueries({
        queryKey: ["auth"],
      });

      router.replace("/new-room/step4");
    },
  });
};

export const useGetStep6Items = () => {
  const fetchStep6Items = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/villa/facility`,
    );

    if (!res.ok) {
      throw new Error("خطا در دریافت امکانات ویلا");
    }

    return res.json();
  };

  return useQuery({
    queryKey: ["step_6_items"],
    queryFn: fetchStep6Items,
  });
};
