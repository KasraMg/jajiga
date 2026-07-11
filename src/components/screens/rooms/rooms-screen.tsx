import Container from "@/src/components/modules/container/container";
import Filters from "@/src/components/screens/rooms/partials/filters/filters";
import Posts from "@/src/components/screens/rooms/partials/posts/posts";

const RoomsScreen = () => {
  return (
    <Container navbarContainer={true} disableFooter={true}>
      <main className="mt-14">
        <Filters />
        <Posts />
      </main>
    </Container>
  );
};

export default RoomsScreen;
