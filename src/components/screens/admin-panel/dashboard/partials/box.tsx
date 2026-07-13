import { Skeleton } from "@/src/components/shadcn/ui/skeleton";
import { IoStatsChart } from "react-icons/io5";
const Box = ({
  title,
  value,
}: {
  title: string;
  value: number | undefined;
}) => {
  return (
    <div className="w-full rounded-lg bg-[#dc26261c] p-4">
      {Number(value) || value == 0 ? (
        <span>{value}</span>
      ) : (
        <Skeleton className="mb-1 h-5 w-6 bg-red-200" />
      )}
      <div className="flex items-center justify-between">
        <p className="text-xs sm:!text-base">{title}</p>
        <IoStatsChart className="text-2xl text-red-600" />
      </div>
    </div>
  );
};

export default Box;
