import { useQuery } from "@tanstack/react-query";

const useCustomQuery = (
  key: (string | number | string[])[],
  queryFn: any,
  options = {},
  
) => {
  const { data, isLoading, status, isError, refetch } = useQuery({
    queryKey: key,
    queryFn: queryFn,
    ...options,
  });
  return { data, isLoading, status, isError, refetch };
};

export default useCustomQuery;
 