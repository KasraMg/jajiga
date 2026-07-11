import { Skeleton } from "@/src/components/shadcn/ui/skeleton";
 
const PopularDestinationsSkeleton = () => {
  return (
    <div className="pt-5 text-right pb-16">
      <Skeleton className="h-8 w-36 rounded-md" />
      <div className="grid grid-cols-2 md:!grid-cols-4 gap-6 pt-8">
        <div className="flex sm:!justify-start justify-center items-center gap-2">
          <Skeleton className="h-[70px] w-[70px] rounded-lg sm:!h-20 sm:!w-20 lg:!h-36 lg:!w-36" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-16 rounded-md" />
            <Skeleton className="h-4 w-12 rounded-md" />
            <Skeleton className="h-4 w-8 rounded-md" />
          </div>
        </div>
        <div className="flex sm:!justify-start justify-center items-center gap-2">
          <Skeleton className="h-[70px] w-[70px] rounded-lg sm:!h-20 sm:!w-20 lg:!h-36 lg:!w-36" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-16 rounded-md" />
            <Skeleton className="h-4 w-12 rounded-md" />
            <Skeleton className="h-4 w-8 rounded-md" />
          </div>
        </div>
        <div className="hidden md:!flex items-center gap-2">
          <Skeleton className="h-[70px] w-[70px] rounded-lg sm:!h-20 sm:!w-20 lg:!h-36 lg:!w-36" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-16 rounded-md" />
            <Skeleton className="h-4 w-12 rounded-md" />
            <Skeleton className="h-4 w-8 rounded-md" />
          </div>
        </div>
        <div className="hidden md:!flex items-center gap-2">
          <Skeleton className="h-[70px] w-[70px] rounded-lg sm:!h-20 sm:!w-20 lg:!h-36 lg:!w-36" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-16 rounded-md" />
            <Skeleton className="h-4 w-12 rounded-md" />
            <Skeleton className="h-4 w-8 rounded-md" />
          </div>
        </div>
        <div className="hidden md:!flex items-center gap-2">
          <Skeleton className="h-[70px] w-[70px] rounded-lg sm:!h-20 sm:!w-20 lg:!h-36 lg:!w-36" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-16 rounded-md" />
            <Skeleton className="h-4 w-12 rounded-md" />
            <Skeleton className="h-4 w-8 rounded-md" />
          </div>
        </div>
        <div className="hidden md:!flex items-center gap-2">
          <Skeleton className="h-[70px] w-[70px] rounded-lg sm:!h-20 sm:!w-20 lg:!h-36 lg:!w-36" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-16 rounded-md" />
            <Skeleton className="h-4 w-12 rounded-md" />
            <Skeleton className="h-4 w-8 rounded-md" />
          </div>
        </div>
        <div className="hidden md:!flex items-center gap-2">
          <Skeleton className="h-[70px] w-[70px] rounded-lg sm:!h-20 sm:!w-20 lg:!h-36 lg:!w-36" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-16 rounded-md" />
            <Skeleton className="h-4 w-12 rounded-md" />
            <Skeleton className="h-4 w-8 rounded-md" />
          </div>
        </div>
        <div className="hidden md:!flex items-center gap-2">
          <Skeleton className="h-[70px] w-[70px] rounded-lg sm:!h-20 sm:!w-20 lg:!h-36 lg:!w-36" />
          <div>
            <Skeleton className="h-4 w-16 rounded-md" />
            <Skeleton className="h-4 w-12 rounded-md" />
            <Skeleton className="h-4 w-8 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDestinationsSkeleton;
