import { Skeleton } from "@/src/components/shadcn/ui/skeleton";

const FastSearchSkeleton = () => {
  return (
    <div className="pb-16 pt-5 text-right">
      <Skeleton className="h-8 w-36 rounded-md" />
      <div className="grid grid-cols-2 md:!grid-cols-3 gap-4 pt-8 lg:!grid-cols-5">
        <Skeleton className="relative !h-[247px] w-full rounded-xl sm:!h-[274px]">
          <div className="absolute bottom-0 flex w-full flex-col justify-center pb-4">
            <Skeleton className="h-5 w-36 rounded-md" />
            <Skeleton className="h-5 w-20 rounded-md" />
          </div>
        </Skeleton>
        <Skeleton className="relative !h-[247px] w-full rounded-xl sm:!h-[274px]">
          <div className="absolute bottom-0 flex w-full flex-col justify-center pb-4">
            <Skeleton className="h-5 w-36 rounded-md" />
            <Skeleton className="h-5 w-20 rounded-md" />
          </div>
        </Skeleton>
        <Skeleton className="relative md:!block hidden !h-[247px] w-full rounded-xl sm:!h-[274px]">
          <div className="absolute bottom-0 flex w-full flex-col justify-center pb-4">
            <Skeleton className="h-5 w-36 rounded-md" />
            <Skeleton className="h-5 w-20 rounded-md" />
          </div>
        </Skeleton>
        <Skeleton className="relative lg:!block hidden !h-[247px] w-full rounded-xl sm:!h-[274px]">
          <div className="absolute bottom-0 flex w-full flex-col justify-center pb-4">
            <Skeleton className="h-5 w-36 rounded-md" />
            <Skeleton className="h-5 w-20 rounded-md" />
          </div>
        </Skeleton>
        <Skeleton className="relative lg:!block hidden !h-[247px] w-full rounded-xl sm:!h-[274px]">
          <div className="absolute bottom-0 flex w-full flex-col justify-center pb-4">
            <Skeleton className="h-5 w-36 rounded-md" />
            <Skeleton className="h-5 w-20 rounded-md" />
          </div>
        </Skeleton>
      </div>
    </div>
  );
};

export default FastSearchSkeleton;
