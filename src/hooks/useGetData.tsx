import { useQuery } from "@tanstack/react-query";

const useGetData =<T extends object> (
  key: (string | number | string[])[],
  queryFn: () => Promise<T>,
  options = {},
  
) => {
  const { data, isPending, isFetching, isLoading, status, isError, refetch,isSuccess } = useQuery({
    queryKey: key,
    queryFn: queryFn,
    ...options,
  });
  return { data, isPending, status, isError,isLoading, refetch,isSuccess,isFetching };
};

export default useGetData;
 