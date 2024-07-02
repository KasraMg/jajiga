"use client";
import ContentNavigator from "@/src/components/modules/contentNavigator/ContentNavigator";
import StepLayout from "@/src/components/modules/stepLayout/StepLayout";
import Stepper from "@/src/components/modules/stepper/Stepper";
import StepperInfo from "@/src/components/modules/stepperInfo/StepperInfo";
import Textarea from "@/src/components/modules/textarea/Textarea";
import useStateData from "@/src/hooks/useStateData";
import { baseUrl } from "@/src/utils/utils";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Select from "react-select";
import { useRouter } from "next/navigation"; 
import Loader from "@/src/components/modules/loader/Loader";
const stateOptions = useStateData();

const page = () => {
  const [address, setAddress] = useState<string>("");
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
  const [citySelectorDisabel, setcitySelectorDisabel] = useState(true);
  const [disabelNextButton, setDisabelNextButton] = useState(true);

  useEffect(() => {
    setCitySelectedOption(null);
    if (stateSelectedOption?.value) {
      const city: any = stateSelectedOption?.value.map((data) => {
        return {
          value: data,
          label: data,
        };
      });
      setCityOption(city);
      setcitySelectorDisabel(false);
    }
  }, [stateSelectedOption]);

  useEffect(() => {
    if (stateSelectedOption && address && citySelectedOption) {
      setDisabelNextButton(false);
    } else setDisabelNextButton(true);
  }, [stateSelectedOption, address, citySelectedOption]);

  const accessToken = Cookies.get("AccessToken");
  const router = useRouter();

  interface AddressData {
    address: {
      state: string | undefined;
      city: string[] | undefined;
      address: string;
    };
    step: 2;
    finished: false;
  }

  const mutation = useMutation({
    mutationFn: async (data: AddressData) => {
      return await fetch(`${baseUrl}/villa/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
        body: JSON.stringify(data),
      }).then((res) => res.json());
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.status === 200) {
        // router.replace("/newRoom/step2");
      }
    },
  });

  const submitHandler = () => {
    const userData: AddressData = {
      address: {
        state: stateSelectedOption?.label,
        city: citySelectedOption?.value,
        address,
      },
      step: 2,
      finished: false,
    };
    mutation.mutate(userData);
  };
  return (
    <StepLayout stepperActive={1}>
      <div className="flex max-w-[1120px] gap-0 py-8 sm:!gap-5">
        <div className="hidden min-w-[23%] md:!flex lg:!min-w-[21%]">
          <Stepper active={1} />
        </div>
        <div className="flex w-full flex-col gap-8">
          <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:!items-center md:!gap-0">
            <p className="min-w-[150px] whitespace-nowrap text-sm text-[#252a31]">
              انتخاب استان:
            </p>
            <Select
              defaultValue={stateSelectedOption}
              onChange={setStateSelectedOption as any}
              isClearable={true}
              className="w-full md:w-[200px] lg:!w-full"
              isRtl={true}
              isSearchable={true}
              options={stateOptions}
              placeholder={"استان خود را انتخاب کنید"}
            />
          </div>

          <div className="mt-2 flex flex-col items-start justify-between gap-2 md:flex-row md:!items-center md:!gap-0">
            <p className="min-w-[150px] whitespace-nowrap text-sm text-[#252a31]">
              انتخاب شهر:
            </p>
            <Select
              defaultValue={citySelectedOption}
              onChange={setCitySelectedOption as any}
              isDisabled={citySelectorDisabel}
              isClearable={true}
              className="w-full md:w-[200px] lg:!w-full"
              isRtl={true}
              isSearchable={true}
              value={citySelectedOption}
              options={cityOption}
              placeholder={"شهر خود را انتخاب کنید"}
            />
          </div>

          <div className="mb-20 flex flex-col justify-between gap-2 md:!mb-4 md:flex-row">
            <p className="min-w-[150px] whitespace-nowrap text-sm text-[#252a31]">
              {" "}
              آدرس دقیق:
            </p>
            <div className="w-full">
              <Textarea
                className="h-[104px]"
                maxLength={250}
                setValue={setAddress}
                value={address}
              />
              <span className="mt-3 text-xs text-[#5f738c]">
                آدرس اقامتگاه را با جزییات کامل وارد کنید تا میهمان پس از رزرو
                به راحتی بتوانند اقامتگاه را پیدا کنند.
              </span>
            </div>
          </div>
          <ContentNavigator
            clickHandler={submitHandler}
            disablelPrevButton={true}
            disabelNextButton={disabelNextButton}
            prevLink={"/"}
            nextLink={"newRoom/step2"}
          />
        </div>
        <StepperInfo
          title="آدرس اقامتگاه"
          text="آدرس دقیق اقامتگاه, تنها پس ازقطعی شدن رزروبرای میهمان ارسال می گردد."
        />
        {mutation.isPending && <Loader />}
      </div>
    </StepLayout>
  );
};

export default page;
