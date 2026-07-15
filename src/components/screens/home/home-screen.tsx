import Ads from "./partials/ads/ads";
import BecomeHost from "./partials/become-host/become-host";
import Intro from "./partials/intro/Intro";
import ScrollObserver from "../../../providers/scroll-observer";
import Container from "../../modules/container/container";
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

const Villas = dynamic(
  () => import("./partials/special-accommodations/special-accommodations"),
  {
    ssr: false,
    loading: () => <VillasSkeleton />,
  },
);
const SpecialAccommodations = dynamic(
  () => import("./partials/villas/villas"),
  {
    ssr: false,
    loading: () => <VillasSkeleton />,
  },
);

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
                <Villas />
              </div>
              <BecomeHost />
            </div>
            <SpecialAccommodations />
          </main>
          <Note />
        </Container>
      </ScrollObserver>
    </div>
  );
};

export default HomeScreen;
