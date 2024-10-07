import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseUrl } from "../utils/utils";
import Cookies from "js-cookie";
import { toast } from "../components/shadcn/ui/use-toast";

const usePostData = <T extends object>(
  url: string,
  successMsg: string | null,
  put?: boolean,
  successFunc?: ((data: any) => void) | null,
  formData?: boolean,
  queryUpdate?: string,
) => {
  const accessToken = Cookies.get("AccessToken");
  const queryClient = useQueryClient(); 
  const { mutate, isSuccess, isPending, isError } = useMutation({
    mutationFn: async (data: T) => {
      const headers: HeadersInit = {
        Authorization: `Bearer ${accessToken}`,
      };
      if (!formData) {
        headers["Content-Type"] = "application/json";
      }
      return await fetch(`${baseUrl}${url}`, {
        method: !put ? "POST" : "PUT",
        headers,
        credentials: "include",
        body: formData ? (data as any) : JSON.stringify(data),
      }).then((res) => res.json());
    },
    onSuccess: (data) => {
      console.log(data);
      if (successFunc) {
        successFunc(data);
      }
      if (data.statusCode === 200) {
        queryUpdate &&
          queryClient.invalidateQueries({ queryKey: [queryUpdate] });
      }
      if (successMsg && data.statusCode === 200) {
        toast({
          variant: "success",
          title: successMsg,
        });
      }
    },
    onError: (data) => {
      console.log(data);
      toast({
        variant: "danger",
        title: "خطایی غیر منتظره رخ داد",
      });
      // location.reload();
    },
  });

  return { mutate, isSuccess, isPending, isError };
};

export default usePostData;
