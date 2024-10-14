import Cookies from "js-cookie";

export async function getUser() { 
  const accessToken = Cookies.get("AccessToken");
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getMe`,{
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },});
  return res.json();
}

export async function getPrivilegedVillas() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/villa/privilegedVillas`,
    {},
  );
  return res.json();
}

export async function getAllActivatedVillas() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/villa/getAllActivated`,
    {},
  );
  return res.json();
}
export async function getFastSearchOptions() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/villa/quickSearchByZone`,
    {},
  );
  return res.json();
}
export async function getPopularDestinations() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/villa/popularTowns
    `,
    {},
  );
  return res.json();
}

export async function fetchWishes() {
  const accessToken = Cookies.get("AccessToken");

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wishes`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
}

export async function getAllComments() {
  const accessToken = Cookies.get("AccessToken");
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comment/getAll`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
}
export async function getAllVillas() {
  const accessToken = Cookies.get("AccessToken");
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/villa/getAll`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
}
export async function getAllUsers() {
  const accessToken = Cookies.get("AccessToken");
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/getAll`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
}
export async function getDashboardInfoes() {
  const accessToken = Cookies.get("AccessToken");
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin-panel`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.json();
}
export async function getAllCategories() {
  const accessToken = Cookies.get("AccessToken");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/category/getAll`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  return res.json();
}

export async function fetchStep6Items() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/villa/facility`);
  return res.json();
}


export async function getVilla(id:string) { 
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