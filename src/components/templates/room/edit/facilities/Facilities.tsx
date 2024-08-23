"use client";
import StepperInfo from "@/src/components/modules/stepperInfo/StepperInfo";
import { Button } from "@/src/components/shadcn/ui/button";
import useGetData from "@/src/hooks/useGetData";
import useEditVilla from "@/src/hooks/useEditVilla";
import { authStore } from "@/src/stores/auth";
import { fetchStep6Items } from "@/src/utils/clientFetchs";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "@/src/components/modules/loader/Loader";

interface userObjData {
  facility: {};
  step: 9;
  finished: true;
}

const Facilities = () => {
  const { data, status } = useGetData(["server_step_6_items"], fetchStep6Items);
  const { userData } = authStore((state) => state);
  const params = useParams();
  const [moreFacility, setMoreFacility] = useState("");
  const [disableNextButton, setDisableNextButton] = useState<boolean>(true);
  const [facility, setFacility] = useState<any[]>([]);

  const { mutate: mutation, isPending } = useEditVilla<userObjData>(
    null,
    "اطلاعات با موفقیت بروزرسانی شد",
    params.id as any,
  );

  useEffect(() => {
    if (data.statusCode === 200 && userData && data) {
  

      const newFacilities = data?.facility?.map((item: any) => ({
        engtitle: item.engTitle,
        title: item.title,
        status: false,
        description: "",
        placeholder: item.placeHolder,
      }));

      const villa = userData.villas.find((villa) => villa._id === params.id);
      const facilityData = villa?.facility?.facility || {};

      const prevFacility = Object.keys(facilityData).map((key) => ({
        title: key,
        ...facilityData[key],
      }));

      const updatedFacilities = newFacilities.map((item: any) => {
        const match = prevFacility.find((pf) => pf.title === item.engtitle);
        return match
          ? {
              ...item,
              status: match.status,
              description: match.description || item.description,
            }
          : item;
      });

      setFacility(updatedFacilities);
      setMoreFacility(villa?.facility?.facility?.moreFacility || "");
    }
  }, [status, data, userData]);

  const handleInputChange = (value: boolean | string, itemTitle: string) => {
    setDisableNextButton(false);
    setFacility((prev) =>
      prev.map((item) =>
        item.title === itemTitle
          ? typeof value === "boolean"
            ? { ...item, status: value }
            : { ...item, description: value }
          : item,
      ),
    );
  };

  const convertArrayToObject = (arr: any[], includeDescription: boolean) =>
    arr.reduce((acc, cur) => {
      acc[cur.engtitle] = {
        status: cur.status,
        ...(includeDescription &&
          cur.description && { description: cur.description }),
      };
      return acc;
    }, {});

  const submitHandler = () => {
    const facilityResult = convertArrayToObject(facility, true);
    const villa = userData?.villas.find((villa) => villa._id === params.id);
    const data: userObjData = {
      facility: {
        facility: {
          ...facilityResult,
          ...(moreFacility && { moreFacility }),
        },
        sanitaryFacilities: villa?.facility?.sanitaryFacilities,
      },
      step: 9,
      finished: true,
    };
    mutation(data);
    setDisableNextButton(true);
  };
  return (
    <section className="flex w-full max-w-[1120px] justify-between gap-16">
      <div className="font-thin text-gray-700">
        <div className="w-full space-y-4">
          <p className="text-sm font-thin lg:!text-base">
            در این بخش امکانات موجود در اقامتگاه خود را ویرایش کنید. همچنین
            می‌توانید برای هر یک در کادر مربوطه توضیحات تکمیلی بنویسید. امکاناتی
            که در لیست نیست را در کادر فراهم شده در انتهای لیست درج کنید.
          </p>
          {facility &&
            facility.map((data, index: number) => (
              <div className="flex justify-between" key={index}>
                <div className="flex items-center gap-3">
                  <input
                    onClick={(event) =>
                      handleInputChange(
                        event.target.checked,
                        facility[index].title,
                      )
                    }
                    style={{ boxShadow: "none" }}
                    checked={facility[index].status}
                    className="cursor-pointer rounded checked:bg-black"
                    type="checkbox"
                  />
                  <label className="text-xs lg:!text-sm">{data.title}</label>
                </div>
                {facility && facility[index].status == true && (
                  <input
                    placeholder={facility[index].placeholder}
                    onChange={(event) =>
                      handleInputChange(
                        event.target.value,
                        facility[index].title,
                      )
                    }
                    className="w-[65%] rounded-md border border-solid p-2 text-sm font-thin placeholder:text-xs placeholder:text-gray-500"
                    type="text"
                  />
                )}
              </div>
            ))}
          <div className="flex items-center justify-between">
            <label className="text-sm">سایر امکانات</label>
            <input
              placeholder={"سایر امکانات"}
              value={moreFacility}
              onChange={(event) => {
                setDisableNextButton(false);
                setMoreFacility(event.target.value);
              }}
              className="w-[65%] rounded-md border border-solid border-gray-400 p-2 text-sm placeholder:text-gray-500"
              type="text"
            />
          </div>

          {!disableNextButton && (
            <Button
              onClick={submitHandler}
              variant="yellow"
              className={`mx-auto !mt-10 block w-max justify-center rounded-md px-4 py-2 transition-colors hover:opacity-75`}
            >
              ذخیره تغییرات
            </Button>
          )}
        </div>
      </div>
      <StepperInfo
        className="w-full max-w-[380px]"
        title="امکانات اقامتگاه"
        text={`در این قسمت امکانات موجود در اقامتگاه را مشخص کنید. همچنین می‌توانید توضیحات تکمیلی هر گزینه را در کادر روبری آن ‏وارد کنید.
          بعنوان مثال بعد از افزودن «سیستم سرمایش»، وارد کنید: "دو عدد اسپیلت 18 هزار یکی در سالن و دیگری در اتاق خواب".
          ‎در صورتی که بعضی از امکانات اقامتگاه خود را در لیست نیافتید، آن موارد را ‏در کادر انتهای صفحه وارد کنید.`}
      />
      {isPending && <Loader />}
    </section>
  );
};

export default Facilities;
