import { useQuery } from "@tanstack/react-query";

const getFastSearchOptions = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/villa/quickSearchByZone`,
  );

  if (!res.ok) {
    throw new Error("خطا در دریافت اطلاعات");
  }

  return res.json();
};

export const useFastSearchOptions = () => {
  return useQuery({
    queryKey: ["fastSearch"],
    queryFn: getFastSearchOptions,
  });
};


const getPopularDestinations = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/villa/popularTowns`,
  );

  if (!res.ok) {
    throw new Error("خطا در دریافت مقاصد محبوب");
  }

  return res.json();
};

export const usePopularDestinations = () => {
  return useQuery({
    queryKey: ["popularDestinations"],
    queryFn: getPopularDestinations,
  });
};


const getPrivilegedVillas = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/villa/privilegedVillas`,
  );

  if (!res.ok) {
    throw new Error("خطا در دریافت ویلاهای ویژه");
  }

  return res.json();
};

export const usePrivilegedVillas = () => {
  return useQuery({
    queryKey: ["privilegedVillas"],
    queryFn: getPrivilegedVillas,
  });
};


const getAllActivatedVillas = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/villa/getAllActivated`,
  );
 if (!res.ok) {
    throw new Error("خطا در دریافت ویلاهای ویژه");
  }

  return res.json();
};
export const useAllActivatedVillas = () => {
  return useQuery({
    queryKey: ["allActivatedVillas"],
    queryFn: getAllActivatedVillas,
  });
};

const getStep6Items = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/villa/facility`,
  );

  if (!res.ok) {
    throw new Error("خطا در دریافت امکانات اقامتگاه");
  }

  return res.json();
};

export const useStep6Items = () => {
  return useQuery({
    queryKey: ["server_step_6_items"],
    queryFn: getStep6Items,
  });
};