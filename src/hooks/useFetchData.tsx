 
import { useQuery, useQueryClient } from "react-query";

function useFetchData(url: string | number) {
  const queryClient = useQueryClient();

  return useQuery(
    ["SingleCourse", url],
    (query) => {
      return fetch(`${url}`).then(
        (res) => res.json(),
      );
    },
    {
      // cacheTime: 6000,
      
    },
  );
}

export default useFetchData;
