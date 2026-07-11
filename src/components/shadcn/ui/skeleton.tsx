import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "bg-neutral-200 h-full w-full animate-pulse rounded-md",
        className,
      )}
      {...props}
    />
  );
}
export { Skeleton };
