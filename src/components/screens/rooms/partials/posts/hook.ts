import { useMemo } from "react"; 
import { useSearchParams } from "next/navigation"; 
import { categoryFilterOptions } from "@/src/utils/options";
import { useGetVillas } from "@/src/api/villa";

const useRooms = () => {
  const searchParams = useSearchParams(); 
  const city = searchParams.get("city") || "all";
  const order = searchParams.get("order") || "newest";

  const maximumSpace = searchParams.get("gstnum");
  const minPrice = searchParams.get("minp");
  const maxPrice = searchParams.get("maxp");

  const villaZone = searchParams.get("zone");
  const facilities = searchParams.get("feature");
  const villaType = searchParams.get("type");

  const isFilter = Boolean(
    maximumSpace ||
      minPrice ||
      maxPrice ||
      villaZone ||
      facilities ||
      villaType,
  );

  const { data, isFetching } = useGetVillas(
    {
      city,
      order,
      maximumSpace,
      minPrice,
      maxPrice,
      facilities,
      villaZone,
      villaType,
    },
    searchParams.toString(),
  );

  const spaceSelectedOption = useMemo(() => {
    return (
      categoryFilterOptions.find((item) => item.value === order) ??
      categoryFilterOptions[0]
    );
  }, [order]);

  return {
    isFilter,
    data,
    isFetching,
    spaceSelectedOption,
  };
};

export default useRooms;
