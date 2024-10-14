import Container from "@/src/components/modules/container/Container";
import Hydrated from "@/src/providers/Hydrated";
import Main from "@/src/components/templates/room/id/Main";
import { getVilla } from "@/src/utils/serverFetchs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "جاجیگا | اجاره اقامتگاه",
};

const Room = ({ params }: { params: { id: string } }) => {
  const villaId = params.id;

  return (
    <Hydrated queryKey={["villa", villaId]} queryFn={getVilla as any}>
      <Container>
        <Main />
      </Container>
    </Hydrated>
  );
};

export default Room;
