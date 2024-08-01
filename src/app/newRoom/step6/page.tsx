"use client";
import ContentNavigator from "@/src/components/modules/contentNavigator/ContentNavigator";
import StepLayout from "@/src/components/modules/stepLayout/StepLayout";
import Stepper from "@/src/components/modules/stepper/Stepper";
import StepperInfo from "@/src/components/modules/stepperInfo/StepperInfo";
import { getFromLocalStorage } from "@/src/utils/utils"; 
import { useEffect, useState } from "react"; 
import Loader from "@/src/components/modules/loader/Loader";
import useGetData from "@/src/hooks/useGetData";
import { fetchStep6Items } from "@/src/utils/clientFetchs"; 
import useEditVilla from "@/src/hooks/useEditVilla";
interface userObjData {
  facility: {};
  step: 7;
  finished: false;
}

const page = () => {
  const { data, status } = useGetData(["step_6_items"], fetchStep6Items); 

  const [disabelNextButton, setDisabelNextButton] = useState<boolean>(false);
  const [showInput, setShowInput] = useState<boolean[]>(
    new Array(data?.facility.length).fill(false),
  );
  const [facilitySelected, setFacilitySelected] = useState<any[]>([]);
  const [sanitarySelected, setSanitarySelected] = useState<any[]>([]);
  const [moreFacility, setMoreFacility] = useState("");
  const [moreSanitary, setMoreSanitary] = useState("");

  const villaId = getFromLocalStorage("villaId");
  const {
    mutate: mutation, 
    responseData,
    isSuccess,
    isPending,
  } = useEditVilla<userObjData>(
    "/newRoom/step7",
    "اطلاعات با موفقیت بروزرسانی شد",
    villaId,
  );


  useEffect(() => {
    if (status === "success" && data?.facility) {
      const newFacilities = data.facility.map((item) => ({
        title: item.engTitle,
        status: false,
        description: "",
      }));
      setFacilitySelected(newFacilities);

      const newSanitary = data.sanitaryFacilities.map((item) => ({
        title: item.engTitle,
        status: false,
      }));
      setSanitarySelected(newSanitary);
    }
  }, [status]); 

  const convertArrayToObject = (arr: any, isDesTrue: boolean) =>
    arr.reduce((acc: any, cur: any) => {
      acc[cur.title] = {
        status: cur.status,
        ...(isDesTrue && cur.description && { description: cur.description }),
      };
      return acc;
    }, {});

  const submitHandler = () => {
    const facilityResult = convertArrayToObject(facilitySelected, true);
    const sanitaryResult = convertArrayToObject(sanitarySelected, false);

    const userData: userObjData = {
      facility: {
        facility: {
          ...facilityResult, 
          ...(moreFacility ? { moreFacility: moreFacility } : {}),
        },
        sanitaryFacilities: {
          ...sanitaryResult, 
          ...(moreSanitary ? { moreSanitaryFacilities: moreSanitary } : {}),

        },
      },
      step: 7,
      finished: false,
    }; 
    mutation(userData);  
  };

  
  const inputChangeHandler = (value: string, itemTitle: string) => {
    const updatedFacilitySelected = facilitySelected.map((item) => {
      if (item.title === itemTitle) {
        return { ...item, description: value };
      }
      return item;
    });

    setFacilitySelected(updatedFacilitySelected);
  };
  return (
    <StepLayout stepperActive={6}>
      <div className="flex max-w-[1120px] gap-0 py-8 sm:!gap-5">
        <div className="hidden min-w-[23%] md:!flex lg:!min-w-[21%]">
          <Stepper active={6} />
        </div>
        <div className="w-full space-y-4">
          <p className="text-sm lg:!text-base">
            امکانات و تجهیزات موجود در اقامتگاه خود را مشخص کنید
          </p>
          {status === "success" &&
            data?.facility.map(
              (
                data: {
                  engTitle: string;
                  title: string;
                  id: string;
                  placeHolder: string;
                },
                index: number,
              ) => (
                <div className="flex justify-between" key={index}>
                  <div className="flex items-center gap-3">
                    <input
                      onClick={(event) => {
                        const newShowInput = [...showInput];
                        newShowInput[index] = !newShowInput[index];
                        setShowInput(newShowInput);

                        const updatedFacilitySelected = facilitySelected.map(
                          (item) => {
                            if (item.title === data.engTitle) {
                              return { ...item, status: event.target.checked };
                            }
                            return item;
                          },
                        );

                        setFacilitySelected(updatedFacilitySelected);
                      }}
                      style={{ boxShadow: "none" }}
                      className="cursor-pointer rounded checked:bg-black"
                      type="checkbox"
                    />
                    <label className="text-xs lg:!text-sm">{data.title}</label>
                  </div>
                  {showInput[index] && (
                    <input
                      placeholder={data.placeHolder}
                      onChange={(event) =>
                        inputChangeHandler(event.target.value, data.engTitle)
                      }
                      className="w-[65%] rounded-md border border-solid p-2 text-sm font-thin placeholder:text-xs placeholder:text-gray-500"
                      type="text"
                    />
                  )}
                </div>
              ),
            )}
          <div className="flex items-center justify-between">
            <label className="text-sm">سایر امکانات</label>
            <input
              placeholder={"سایر امکانات"}
              value={moreFacility}
              onChange={(event) => setMoreFacility(event.target.value)}
              className="w-[65%] rounded-md border border-solid border-gray-400 p-2 text-sm placeholder:text-gray-500"
              type="text"
            />
          </div>
          <p className="!mt-8 border-t border-solid border-gray-200 pt-5">
            اقلام بهداشتی
          </p>
          {status === "success" &&
            data?.sanitaryFacilities.map(
              (
                data: { engTitle: string; title: string; id: string },
                index: number,
              ) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    style={{ boxShadow: "none" }}
                    className="cursor-pointer rounded checked:bg-black"
                    type="checkbox"
                    onClick={(event) => {
                      const updatedSanitarySelected = sanitarySelected.map(
                        (item) => {
                          if (item.title === data.engTitle) {
                            return { ...item, status: event.target.checked };
                          }
                          return item;
                        },
                      );

                      setSanitarySelected(updatedSanitarySelected);
                    }}
                  />
                  <label className="text-xs lg:!text-sm">{data.title}</label>
                </div>
              ),
            )}
          <div className="!mb-16 flex items-center justify-between">
            <label className="text-sm">سایر موارد</label>
            <input
              value={moreSanitary}
              onChange={(event) => setMoreSanitary(event.target.value)}
              placeholder={"سایر موارد"}
              className="w-[65%] rounded-md border border-solid border-gray-400 p-2 text-sm placeholder:text-gray-500"
              type="text"
            />
          </div>
          <ContentNavigator
            disablelPrevButton={false}
            disabelNextButton={disabelNextButton}
            clickHandler={submitHandler}
            prevLink={"newRoom/step5"}
          />
        </div>
        <div className="sticky top-[68px] hidden h-max max-w-[243px] md:!block">
          <StepperInfo
            className="!relative !top-0"
            title="امکانات اقامتگاه"
            text=" در این قسمت امکانات موجود در اقامتگاه را مشخص کنید. همچنین می توانید توضیحات تکمیلی هر گزینه را در کادر روبری آن وارد کنید. بعنوان مثال بعد از افزودن سیستم سرمایش, وارد کنید:  اسپیلت . در صورتی که بعضی از امکانات اقامتگاه خود را در لیست نیافتید, آن موارد را در کادر انتهای صفحه وارد کنید."
          />
          <StepperInfo
            className="!relative !top-0 mt-5"
            title="اقلام بهداشتی"
            text="‎‏تعویض و شارژ اقلام بهداشتی (شامل روبالشی, روتختی, ملحفه تمیز, کاغذ ‏توالت و صابون یا مایع دستشویی) موجب می شود تا میهمان شما احساس کند که در منزل خود حضور ‏دارد. این اقلام می باید پیش از ورود میهمان جدید تعویض یا شارژ شوند.‏"
          />
        </div>
        {isPending && <Loader />} 
      </div>
    </StepLayout>
  );
};

export default page;
