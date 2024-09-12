import { Button } from "@/src/components/shadcn/ui/button";
import { categoryStore } from "@/src/stores/category";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Notfound = ({ isFilter }: { isFilter: boolean }) => {
  const router = useRouter();
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
    if (isFilter) {
      setMaximumSpace(null);
      setMaxPrice(null);
      setMinPrice(null);
      setVillaZone([]);
      setVillaType([]);
      setFacilities([]);
      setOrder("");
    }
    router.push("/rooms");
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
      {isFilter ? (
        <div>
          <p>اقامتگاهی در این شهر یا با این فیلترینگ یافت نشد</p>
          <Button
            onClick={clearFiltringHandler}
            className="mt-5"
            variant={"main"}
          >
            حذف فیلترینگ
          </Button>
        </div>
      ) : (
        <div>
          <p>اقامتگاهی در این شهر یافت نشد</p>
          <Button
            onClick={clearFiltringHandler}
            className="mt-5"
            variant={"main"}
          >
            مشاهده تمام شهر ها
          </Button>
        </div>
      )}
    </div>
  );
};

export default Notfound;
