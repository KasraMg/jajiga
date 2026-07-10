import Container from "@/src/components/modules/container/container";
import Filters from "@/src/components/screens/rooms/partials/filters/Filters";
import Posts from "@/src/components/screens/rooms/partials/posts/Posts";

const RoomsScreen = () => {
  return (
    <Container navbarContainer={true} disableFooter={true}>
      <main className="mt-[58px]">
        <Filters />
        <Posts />
      </main>
    </Container>
  );
};

export default RoomsScreen;
