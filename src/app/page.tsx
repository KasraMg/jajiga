import Ads from "../components/templates/index/Ads/Ads";
import BecomeHost from "../components/templates/index/BecomeHost/BecomeHost";
import FastSearch from "../components/templates/index/FastSearch/FastSearch";
import PopularDestinations from "../components/templates/index/PopularDestinations/PopularDestinations";
import SpecialAccommodations from "../components/templates/index/SpecialAccommodations/SpecialAccommodations";
import Villas from "../components/templates/index/Villas/Villas";
import Note from "../components/templates/index/Note/Note";
import Intro from "../components/templates/index/intro/Intro";
import ScrollObserver from "../providers/scrollObserver";
import Container from "../components/modules/container/Container";
import Hydrated from "../providers/Hydrated";
import {
  getAllActivatedVillas,
  getPrivilegedVillas,
  getPopularDestinations,
  getFastSearchOptions,
} from "../utils/fetchs";

export default async function Home() {
  return (
    <main>
      <ScrollObserver>
        <Container>
          <Intro />
          <main
            className={`relative bottom-2 z-10 rounded-xl bg-white px-3 sm:!px-5`}
          >
            <div className="Container">
              <Hydrated
                queryKey={["popularDestinations"]}
                queryFn={getPopularDestinations}
              >
                <PopularDestinations />
              </Hydrated>

              <Hydrated
                queryKey={["FastSearch"]}
                queryFn={getFastSearchOptions}
              >
                <FastSearch />
              </Hydrated>

              <Ads />
              <Hydrated
                queryKey={["specialVillas"]}
                queryFn={getPrivilegedVillas}
              >
                <SpecialAccommodations />
              </Hydrated>
            </div>
            <BecomeHost />
          </main>

          <Hydrated
            queryKey={["allActivatedVillas"]}
            queryFn={getAllActivatedVillas}
          >
            <Villas />
          </Hydrated>

          <Note />
        </Container>
      </ScrollObserver>
    </main>
  );
}
