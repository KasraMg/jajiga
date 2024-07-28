"use client";
import React, { FC, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/shadcn/ui/dialog";
import { MdOutlineEdit } from "react-icons/md";
import { Button } from "@/src/components/shadcn/ui/button";
import usePostData from "@/src/hooks/usePostData";
import { userInfoObj } from "@/src/types/Auth.types";

interface BoxProps {
  type: string;
  title: string;
  regex?: any;
  value?: string;
  setValue?: (data: any) => void;
  errorText?: string;
  multiple?: string[];
  values?: any[];
  setValues?: any[];
  requestBody?: any;
  options?: string[];
}

const Box: FC<BoxProps> = ({
  type,
  title,
  regex,
  value,
  setValue,
  errorText,
  multiple,
  values,
  setValues,
  requestBody,
  options,
}) => {
  const [error, setError] = useState(false);
  const [disabled, setdisabled] = useState(true);

  const inputChangeHandler = (value: string, setHandler: any) => {
    setdisabled(false);
    if (type !== "radio") {
      if (!regex.test(value)) {
        setError(true);
      } else {
        setError(false);
      }

      if (values) {
        setHandler(value);
      } else {
        setValue && setValue(value);
      }
    } else {
      setHandler(value);
    }
  };

  const { mutate: mutation, isPending } = usePostData<userInfoObj>(
    "/user/edit",
    "اطلاعات با موفقیت بروزرسانی شد",
    true,
  );

  const submitHandler = () => {
    if (values) {
      const data = requestBody.reduce(
        (acc: string, title: string, index: number) => {
          acc[title] = values[index];
          return acc;
        },
        {},
      );
      console.log(data);

      mutation(data);
    } else {
      if (type === "radio") {
        const data = {
          [requestBody]: value === "مرد" ? "male" : "female",
        };
      mutation(data as any); 
      } else {
        const data = {
          [requestBody]: value ,
        };
        mutation(data as any); 
      }
    }
  };

  return (
    <>
      <section>
        <div className="mt-4 flex items-center justify-between">
          <p>{title}</p>
          <Dialog>
            <DialogTrigger asChild>
              <MdOutlineEdit className="cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle className="py-3 text-center">
                  ویرایش {title}
                </DialogTitle>
              </DialogHeader>

              {multiple ? (
                <div className="flex flex-col items-center justify-between gap-3">
                  {multiple.map((title, index) => (
                    <div
                      className={`${type == "radio" ? "gap-0" : "justify-between gap-8"} flex w-full items-center`}
                    >
                      <p
                        className={`${type == "radio" ? "min-w-7" : "min-w-20"} whitespace-nowrap`}
                      >
                        {title}
                      </p>
                      <input
                        onChange={(event) => {
                          inputChangeHandler(
                            event.target.value,
                            setValues ? setValues[index] : setValue,
                          );
                        }}
                        name={type == "radio" ? "radio" : title}
                        className={`${type == "radio" ? "mt-1 w-max" : "w-full"} rounded-md border border-gray-300 p-2 text-sm font-thin outline-0`}
                        type={type}
                        value={
                          values ? values[index] : options && options[index]
                        }
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-between gap-8">
                  <p className="whitespace-nowrap">{title}</p>
                  <input
                    onChange={(event) =>
                      inputChangeHandler(event.target.value, null)
                    }
                    className="w-full rounded-md border border-gray-300 p-2 text-sm font-thin"
                    type={type}
                    value={value}
                  />
                </div>
              )}

              {error && (
                <span className="mt-2 text-xs text-red-600">{errorText}</span>
              )}

              <Button
                disabled={error || disabled}
                className="mt-4 h-[36px] w-full justify-center"
                variant="main"
                onClick={submitHandler}
              >
                {isPending ? (
                  <svg
                    className="h-full w-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 200"
                  >
                    <circle
                      fill="#FFFFFF"
                      stroke="#FFFFFF"
                      strokeWidth="15"
                      r="15"
                      cx="40"
                      cy="100"
                    >
                      <animate
                        attributeName="opacity"
                        calcMode="spline"
                        dur="2"
                        values="1;0;1;"
                        keySplines=".5 0 .5 1;.5 0 .5 1"
                        repeatCount="indefinite"
                        begin="-.4"
                      ></animate>
                    </circle>
                    <circle
                      fill="#FFFFFF"
                      stroke="#FFFFFF"
                      strokeWidth="15"
                      r="15"
                      cx="100"
                      cy="100"
                    >
                      <animate
                        attributeName="opacity"
                        calcMode="spline"
                        dur="2"
                        values="1;0;1;"
                        keySplines=".5 0 .5 1;.5 0 .5 1"
                        repeatCount="indefinite"
                        begin="-.2"
                      ></animate>
                    </circle>
                    <circle
                      fill="#FFFFFF"
                      stroke="#FFFFFF"
                      strokeWidth="15"
                      r="15"
                      cx="160"
                      cy="100"
                    >
                      <animate
                        attributeName="opacity"
                        calcMode="spline"
                        dur="2"
                        values="1;0;1;"
                        keySplines=".5 0 .5 1;.5 0 .5 1"
                        repeatCount="indefinite"
                        begin="0"
                      ></animate>
                    </circle>
                  </svg>
                ) : (
                  "ذخیره"
                )}
              </Button>
            </DialogContent>
          </Dialog>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          {values ? values[0] + " " + values[1] : value}
        </p>
      </section>
    </>
  );
};

export default Box;
