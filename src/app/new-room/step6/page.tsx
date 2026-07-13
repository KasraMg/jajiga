import Step6Screen from "@/src/components/screens/new-room/step6/step6-screen";
import Hydrated from "@/src/providers/hydrated";
import { fetchStep6Items } from "@/src/utils/server-fetchs";

const page = () => {
  return (
    <Hydrated queryKey={["step_6_items"]} queryFn={fetchStep6Items}>
      <Step6Screen />
    </Hydrated>
  );
};

export default page;
