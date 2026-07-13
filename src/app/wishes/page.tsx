import WishesScreen from "@/src/components/screens/wishes/wishes-screen";
import Hydrated from "@/src/providers/hydrated";
import { getWishes } from "@/src/utils/server-fetchs";

const page = () => {
  return (
    <Hydrated queryKey={["wishes"]} queryFn={getWishes}>
      <WishesScreen />;
    </Hydrated>
  );
};

export default page;
