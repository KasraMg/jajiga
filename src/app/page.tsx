import Layout from "../components/modules/Layout/Layout";
import Ads from "../components/templates/index/Ads/Ads";
import BecomeHost from "../components/templates/index/BecomeHost/BecomeHost";
import FastSearch from "../components/templates/index/FastSearch/FastSearch";
import Offers from "../components/templates/index/Offers/Offers";
import PopularDestinations from "../components/templates/index/PopularDestinations/PopularDestinations";
import SpecialAccommodations from "../components/templates/index/SpecialAccommodations/SpecialAccommodations";
import SupperOffers from "../components/templates/index/SuperOffers/SuperOffers";
import Intro from "../components/templates/index/intro/Intro";
import ScrollObserver from "../utils/scrollObserver";
import Container from "../components/modules/container/Container";
import useAuthUser from "../utils/auth";

import { authStore } from "../stores/auth";
import Auth from "../components/templates/default/Auth";
import { getQueryClient } from "../providers/getQueryClient";
import { dehydrate } from "@tanstack/react-query";
import { baseUrl } from "../utils/utils";
import Hydrated from "../providers/Hydrated";
import { cookies } from "next/headers";

export default async function Home() {
  
  const cookieStore = cookies();
  const accessToken = cookieStore.get("AccessToken");
  async function fetchUsers() {
    const res = await fetch(`${baseUrl}/getMe`, {
      headers: {
        Authorization: `Bearer ${accessToken?.value}`,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }
    return res.json();
  }
  return (
    <main>
      <Hydrated queryKey={["auth"]} queryFn={fetchUsers}>
        <Auth />
      </Hydrated>

      {/* <ScrollObserver>
        <Container> */}
      {/* <Intro />
          <Layout className="bg-white">
            <PopularDestinations />
          <FastSearch />
             <Ads />
         <SpecialAccommodations />  
          </Layout>
          <SupperOffers />
          <Layout>
            <Offers />
           <Offers />
            <BecomeHost />
            <Offers />
            <Offers /> 
            <Offers />
          </Layout>   */}
      {/* </Container>
      </ScrollObserver> */}
    </main>
  );
}
