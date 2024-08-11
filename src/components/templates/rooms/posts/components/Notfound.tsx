import { Button } from "@/src/components/shadcn/ui/button";
import { categoryStore } from "@/src/stores/category";
import Image from "next/image"; 

const Notfound = () => {
  const {
    setFacilities,
    setMaxPrice,
    setMaximumSpace,
    setOrder,
    setMinPrice,
    setVillaType,
    setVillaZone,
  } = categoryStore((state) => state);

  const clearFiltringHandler = () => {
    setMaximumSpace(null);
    setMaxPrice(null);
    setMinPrice(null);
    setVillaZone([]);
    setVillaType([]);
    setFacilities([]);
    setOrder("");
  };
  return (
    <div className="text-center">
      <Image
        alt="notFound"
        width={1000}
        className="mx-auto mt-7 w-[100px]"
        height={1000}
        src={"/images/notFound.png"}
      />
      <p>اقامتگاهی با این فیلترینگ یافت نشد</p>
      <Button onClick={clearFiltringHandler} className="mt-5" variant={"main"}>
        حذف فیلترینگ
      </Button>
    </div>
  );
};

export default Notfound;
