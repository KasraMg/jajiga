import Container from "@/src/components/modules/container/Container";
import Hydrated from "@/src/providers/Hydrated";
import { cookies } from "next/headers";
import { baseUrl } from "@/src/utils/utils";
import Main from "@/src/components/templates/room/id/Main";
import { redirect } from "next/navigation";
export default async function Room({ params }: any) {
  async function getVilla() {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("AccessToken");
    const res = await fetch(`${baseUrl}/villa/get/${params.id}`, {
      headers: {
        Authorization: `Bearer ${accessToken?.value}`,
      },
    }); 
    if (res.status === 404) { 
      
      redirect("/"); 
    } 
    return res.json();
  }

  return (
    <Hydrated queryKey={["villa"]} queryFn={getVilla}>
      <Container>
        <Main />
      </Container>
    </Hydrated>
  );
}
