import { ReactNode } from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import { getQueryClient } from "./getQueryClient";

interface HydratedProps {
  queryKey: (string | number)[];
  queryFn: () => Promise<any>;
  children: ReactNode;
}

export default async function Hydrated({
  queryKey,
  queryFn,
  children,
}: HydratedProps) {
  const queryClient: QueryClient = getQueryClient();

  // Prefetch the query data
  await queryClient.prefetchQuery({ queryKey, queryFn });

  // Dehydrate the query client state
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}
