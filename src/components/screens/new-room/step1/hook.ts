import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useStateData from "@/src/hooks/useStateData";
import { useEditVilla } from "@/src/api/villa";
import { saveIntoLocalStorage } from "@/src/utils/utils";
import { toast } from "@/src/components/shadcn/ui/use-toast";

interface UserObjData {
  address: {
    state: string | undefined;
    city: string[] | undefined;
    address: string;
  };
  step: 2;
  finished: false;
}

const useStep1 = () => {
  const router = useRouter();

  const stateOptions = useStateData();

  const [address, setAddress] = useState("");

  const [stateSelectedOption, setStateSelectedOption] = useState<{
    label: string;
    value: string[];
  } | null>(null);

  const [citySelectedOption, setCitySelectedOption] = useState<{
    label: string;
    value: string[];
  } | null>(null);
  const [cityOption, setCityOption] = useState<
    { label: string; value: string[] }[]
  >([]);

  const [citySelectorDisabel, setCitySelectorDisabel] = useState(true);

  const [disableNextButton, setDisableNextButton] = useState(true);

  const mutation = useEditVilla<UserObjData>();

  useEffect(() => {
    setCitySelectedOption(null);

    if (!stateSelectedOption?.value) return;

    const city: any = stateSelectedOption?.value.map((data) => {
      return {
        value: data,
        label: data,
      };
    });
    setCityOption(city);

    setCitySelectorDisabel(false);
  }, [stateSelectedOption]);

  useEffect(() => {
    setDisableNextButton(
      !(stateSelectedOption && citySelectedOption && address),
    );
  }, [stateSelectedOption, citySelectedOption, address]);

  const submitHandler = () => {
    mutation.mutate(
      {
        address: {
          state: stateSelectedOption?.label,
          city: citySelectedOption?.value,
          address,
        },
        step: 2,
        finished: false,
      },
      {
        onSuccess: (data: any) => {
          saveIntoLocalStorage("villaId", data.villa._id);

          toast({
            variant: "success",
            title: "ویلا ساخته و اطلاعات ابتدایی با موفقیت بروزرسانی شد",
          });

          router.replace("/new-room/step2");
        },
      },
    );
  };

  return {
    stateOptions,

    address,
    setAddress,

    stateSelectedOption,
    setStateSelectedOption,

    citySelectedOption,
    setCitySelectedOption,

    cityOption,
    citySelectorDisabel,

    disableNextButton,

    submitHandler,

    isPending: mutation.isPending,
  };
};

export default useStep1;
