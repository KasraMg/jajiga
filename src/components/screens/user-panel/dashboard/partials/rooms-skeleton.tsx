import { Skeleton } from "@/src/components/shadcn/ui/skeleton";

const RoomsSkeleton = () => {
  return (
    <div className="pt-6">
      <Skeleton className="h-6 w-44" />
      <Skeleton className="mt-3 h-5 w-52" />{" "}
      <section className="mt-4">
        <div className="flex flex-wrap items-center justify-between gap-2 gap-y-3 sm:!flex-nowrap sm:!justify-between sm:!p-3 sm:!shadow-lg md:!flex-wrap">
          <div className="flex items-center gap-2">
            <div
              className={`relative ml-1 flex h-[60px] w-[92px] items-center justify-center overflow-hidden rounded-lg p-1`}
            >
              <Skeleton className="h-full w-[84px]" />
            </div>
            <Skeleton className="h-6 w-14 sm:!w-20" />
          </div>
          <div>
            <Skeleton className="h-5 w-20 mx-auto sm:!w-28 xl:hidden" />
            <Skeleton className="mt-2 h-5 w-28 sm:!w-40" />
          </div>
          <div className="flex w-full justify-between gap-2 sm:!justify-normal md:!w-max">
            <Skeleton className="h-8 w-full md:!w-[70px] xl:!w-[100px]" />

            <Skeleton className="h-8 w-full md:!w-[70px] xl:!w-[100px]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomsSkeleton;
