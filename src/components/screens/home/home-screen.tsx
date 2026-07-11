import Ads from "./partials/ads/ads";
import BecomeHost from "./partials/become-host/become-host";
import SpecialAccommodations from "./partials/special-accommodations/special-accommodations";
import Villas from "./partials/villas/villas";
import Intro from "./partials/intro/Intro";
import ScrollObserver from "../../../providers/scroll-observer";
import Container from "../../modules/container/container";
import Hydrated from "../../../providers/hydrated";
import {
  getAllActivatedVillas,
  getPrivilegedVillas,
  getPopularDestinations,
  getFastSearchOptions,
} from "../../../utils/fetchs";
import Note from "./partials/note/note";
import dynamic from "next/dynamic";
import PopularDestinationsSkeleton from "./partials/popular-destinations/popular-destinations-skeleton";
import FastSearchSkeleton from "./partials/fast-search/fast-search-skeleton";

const PopularDestinations = dynamic(
  () => import("./partials/popular-destinations/popular-destinations"),
  {
    ssr: false,
    loading: () => <PopularDestinationsSkeleton />,
  },
);

const FastSearch = dynamic(() => import("./partials/fast-search/fast-search"), {
  ssr: false,
  loading: () => <FastSearchSkeleton />,
});

const HomeScreen = () => {
  return (
    <div>
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
                queryKey={["fastSearch"]}
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
    </div>
  );
};

export default HomeScreen;
