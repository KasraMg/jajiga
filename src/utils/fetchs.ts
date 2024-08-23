import { baseUrl } from "./utils";

export async function getPrivilegedVillas() {
  const res = await fetch(`${baseUrl}/villa/privilegedVillas`, {});
  return res.json();
}

export async function getAllActivatedVillas() {
  const res = await fetch(`${baseUrl}/villa/getAllActivated`, {});
  return res.json();
}
export async function getFastSearchOptions() {
  const res = await fetch(`${baseUrl}/villa/quickSearchByZone`, {});
  return res.json();
}
export async function getPopularDestinations() {
  const res = await fetch(
    `${baseUrl}/villa/popularTowns
    `,
    {},
  );
  return res.json();
}
