import { Skeleton } from "@/src/components/shadcn/ui/skeleton";

const VillasSkeleton = () => {
  return (
    <div className="Container mx-auto pb-16 pt-5 text-right">
      <Skeleton className="h-8 w-36 rounded-md" />

      <div className="grid gap-4 px-3 pt-8 sm:!grid-cols-2 sm:!px-4 lg:!grid-cols-3 xl:!px-0">
        <Skeleton className="relative h-52 w-full rounded-xl" />
        <Skeleton className="relative hidden h-52 w-full rounded-xl sm:block" />
        <Skeleton className="relative hidden h-52 w-full rounded-xl lg:!block" />
      </div>
    </div>
  );
};

export default VillasSkeleton;
