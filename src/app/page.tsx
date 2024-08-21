import Layout from "../components/layouts/pageLayout/Layout";
import Ads from "../components/templates/index/Ads/Ads";
import BecomeHost from "../components/templates/index/BecomeHost/BecomeHost";
import FastSearch from "../components/templates/index/FastSearch/FastSearch";
import Offers from "../components/templates/index/Offers/Offers";
import PopularDestinations from "../components/templates/index/PopularDestinations/PopularDestinations";
import SpecialAccommodations from "../components/templates/index/SpecialAccommodations/SpecialAccommodations";
import SupperOffers from "../components/templates/index/SuperOffers/SuperOffers";
import Intro from "../components/templates/index/intro/Intro";
import ScrollObserver from "../providers/scrollObserver";
import Container from "../components/modules/container/Container";
import Hydrated from "../providers/Hydrated";
import { getAllActivatedVillas, getPrivilegedVillas } from "../utils/fetchs";

export default async function Home() {
  return (
    <main>
      <ScrollObserver>
        <Container>
          <Intro />
          <Layout className="bg-white">
              <PopularDestinations />
          <FastSearch />
            <Ads />
            <Hydrated queryKey={["specialVillas"]} queryFn={getPrivilegedVillas}>
              <SpecialAccommodations />
            </Hydrated>
          </Layout>
          <Hydrated queryKey={["allActivatedVillas"]} queryFn={getAllActivatedVillas}>
          <SupperOffers /> 
            </Hydrated>
       {/*    <Layout>
            <Offers />
            <Offers />
            <BecomeHost /> 
            <Offers />
            <Offers />
            <Offers />
          </Layout> */}
        </Container>
      </ScrollObserver>
    </main>
  );
}
