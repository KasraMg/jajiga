import Container from "@/src/components/modules/container/Container";
import Filters from "@/src/components/templates/rooms/filters/Filters";
import Posts from "@/src/components/templates/rooms/posts/Posts";
import React from "react";

const rooms = () => {
  return (
    <Container navbarContainer={true} disableFooter={true}>
      <main className="mt-[58px]">
        <Filters />
        <Posts />
      </main>
    </Container>
  );
};

export default rooms;
