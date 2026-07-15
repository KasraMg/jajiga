import { cookies } from "next/headers";

export async function getUser() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("AccessToken");
  if (!accessToken?.value) {
    return null;
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getMe`, {
    headers: {
      Authorization: `Bearer ${accessToken?.value}`,
    },
  });
  return res.json();
}

export async function getWishes() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("AccessToken");
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wishes`, {
    headers: {
      Authorization: `Bearer ${accessToken?.value}`,
    },
  });
  return res.json();
}

export async function fetchStep6Items() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("AccessToken");
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/villa/facility`, {
    headers: {
      Authorization: `Bearer ${accessToken?.value}`,
    },
  });
  return res.json();
}

export async function getVilla(params: { queryKey: string[] }) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("AccessToken");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/villa/get/${params.queryKey[1]}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken?.value}`,
      },
    },
  );
  return res.json();
}
export async function getVillas(searchParams: {
  city: string;
  gstnum: string;
  minp: string;
  maxp: string;
  zone: string;
  feature: string;
  type: string;
  order: string;
}) {
  const params = new URLSearchParams();

  const city = searchParams.city || "all";
  const order = searchParams.order || "newest";

  const maximumSpace = searchParams.gstnum;
  const minPrice = searchParams.minp;
  const maxPrice = searchParams.maxp;

  const villaZone = searchParams.zone;
  const facilities = searchParams.feature;
  const villaType = searchParams.type;

  params.set("city", city);

  if (order) params.set("order", order);
  if (maximumSpace) params.set("gstnum", maximumSpace);
  if (minPrice) params.set("minp", minPrice);
  if (maxPrice) params.set("maxp", maxPrice);
  if (villaZone) params.set("zone", villaZone);
  if (facilities) params.set("feature", facilities);
  if (villaType) params.set("type", villaType);

  const cookieStore = cookies();
  const accessToken = cookieStore.get("AccessToken");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/villa/s?${params.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken?.value}`,
      },
    },
  );
  return res.json();
}
