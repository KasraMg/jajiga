import { cookies } from "next/headers";

export async function getUser() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("AccessToken");
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getMe`, {
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
