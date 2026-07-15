import Ads from "./partials/ads/ads";
import BecomeHost from "./partials/become-host/become-host";
import SpecialAccommodations from "./partials/special-accommodations/special-accommodations";
import Intro from "./partials/intro/Intro";
import ScrollObserver from "../../../providers/scroll-observer";
import Container from "../../modules/container/container";
import Hydrated from "../../../providers/hydrated";
import { getPrivilegedVillas } from "../../../utils/fetchs";
import Note from "./partials/note/note";
import dynamic from "next/dynamic";
import PopularDestinationsSkeleton from "./partials/popular-destinations/popular-destinations-skeleton";
import FastSearchSkeleton from "./partials/fast-search/fast-search-skeleton";
import VillasSkeleton from "./partials/villas/villas-skeleton";

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

const Villas = dynamic(() => import("./partials/villas/villas"), {
  ssr: false,
  loading: () => <VillasSkeleton />,
});

const HomeScreen = () => {
  return (
    <div>
      <ScrollObserver>
        <Container>
          <Intro />
          <main className={`relative z-10 rounded-xl bg-white`}>
            <div className="pb-16">
              <div className="Container px-3 sm:!px-5">
                <PopularDestinations />
                <FastSearch />
                <Ads />
                <Hydrated
                  queryKey={["specialVillas"]}
                  queryFn={getPrivilegedVillas}
                >
                  <SpecialAccommodations />
                </Hydrated>
              </div>
              <BecomeHost />
            </div>
            <Villas />
          </main>
          <Note />
        </Container>
      </ScrollObserver>
    </div>
  );
};

export default HomeScreen;
