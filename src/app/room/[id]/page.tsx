import Container from "@/src/components/modules/container/Container"; 
import Hydrated from "@/src/providers/Hydrated";
import { cookies } from "next/headers";
import { baseUrl } from "@/src/utils/utils";
import Main from "@/src/components/templates/room/id/Main";
const Room = ({ params }:any) => { 
  async function getVilla() {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("AccessToken");
    const res = await fetch(`${baseUrl}/villa/get/${params.id}`, {
      headers: {
        Authorization: `Bearer ${accessToken?.value}`,
      },
    });
    return res.json();
  }

  return (
    <Hydrated queryKey={["villa"]} queryFn={getVilla}>
      <Container>
        <Main/>
      </Container>
    </Hydrated>
  );
};

export default Room;
 