import { useQuery } from "@tanstack/react-query";
import { cookies } from "next/headers";
import { baseUrl } from "./utils";

 

const authUser = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await fetch(`${baseUrl}/getMe`);
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      console.log(res.json());
      return res.json();
    },
  });




  // return (
  //   // <div>
  //   //   {/* اینجا می‌توانید دیتا را رندر کنید */}
  //   //   <pre>{JSON.stringify(data, null, 2)}</pre>
  //   // </div>
  // );
};
export default authUser