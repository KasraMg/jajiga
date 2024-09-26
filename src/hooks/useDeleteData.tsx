import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseUrl } from "../utils/utils";
import Cookies from "js-cookie";
import { toast } from "../components/shadcn/ui/use-toast";

const useDeleteData = (
  url: string,
  successMsg: string | null,
  queryUpdate?: string,
) => {
  const accessToken = Cookies.get("AccessToken");
  const queryClient = useQueryClient();

  const { mutate, isSuccess, isPending, isError } = useMutation({
    mutationFn: async () => {
      const headers: HeadersInit = {
        Authorization: `Bearer ${accessToken}`,
      };
      return await fetch(`${baseUrl}${url}`, {
        method: "DELETE",
        headers,
      }).then((res) => res.json());
    },
    onSuccess: (data) => {
      console.log(data);
      if (successMsg && data.statusCode === 200) {
        toast({
          variant: "success",
          title: successMsg,
        });
        queryUpdate &&
          queryClient.invalidateQueries({ queryKey: [queryUpdate] });
      }
    },
    onError: (data) => {
      console.log(data);
      toast({
        variant: "danger",
        title: "خطایی غیر منتظره رخ داد",
      });
      location.reload();
    },
  });

  return { mutate, isSuccess, isPending, isError };
};

export default useDeleteData;
