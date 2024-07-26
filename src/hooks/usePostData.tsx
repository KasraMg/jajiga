import { useMutation, useQueryClient } from "@tanstack/react-query";
import { baseUrl } from "../utils/utils";
import Cookies from "js-cookie";
import { toast } from "../components/shadcn/ui/use-toast";
const usePostData = <T extends object>(
  url: string,
  successMsg: string,
  put?: boolean,
  formData?: boolean,
) => {
  const accessToken = Cookies.get("AccessToken");
  const queryClient = useQueryClient();

  const { mutate, isSuccess, isPending,isError } = useMutation({
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
      if (data.statusCode === 200) {
        toast({
          variant: "success",
          title: successMsg,
        });
        // queryClient.invalidateQueries({ queryKey: ["auth"] });
      }
    },
  });

  return { mutate, isSuccess, isPending,isError };
};

export default usePostData;
