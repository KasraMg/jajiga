"use client";
import React, { FC, useEffect, useState } from "react";
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
import { UserInfoObj } from "@/src/types/Auth.types";
import { toast } from "@/src/components/shadcn/ui/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { ButtonLoader } from "@/src/components/modules/loader/Loader";

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
  const [data, setData] = useState<any>();
  const [secondData, setSecondData] = useState<any>();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (value) {
      setData(value);
    } else {
      if (values) {
        setData(values[0]);
        setSecondData(values[1]);
      }
    }
  }, [value, values]);

  const successFunc = (data: { statusCode: number }) => {
    if (data.statusCode === 200) {
      toast({
        variant: "success",
        title: "اطلاعات با موفقیت بروزرسانی شد",
      });
      setOpen(false);
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    }
  };

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
        setValue && setData(value);
      }
    } else {
      setHandler(value);
    }
  };

  const { mutate: mutation, isPending } = usePostData<UserInfoObj>(
    "/user/edit",
    null,
    true,
    successFunc,
  );

  const submitHandler = () => {
    if (values) {
      const newData = {
        [requestBody[0]]: data,
        [requestBody[1]]: secondData,
      };
      mutation(newData as any);
    } else {
      if (type === "radio") {
        const newData = {
          [requestBody]: data === "مرد" ? "male" : "female",
        };
        mutation(newData as any);
      } else {
        const newData = {
          [requestBody]: data,
        };
        mutation(newData as any);
      }
    }
  };
  const [open, setOpen] = useState(false);

  return (
    <>
      <section>
        <div className="mt-4 flex items-center justify-between">
          <p>{title}</p>
          <Dialog open={open} onOpenChange={setOpen}>
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
                            setValues
                              ? index === 0
                                ? setData
                                : setSecondData
                              : setData,
                          );
                        }}
                        name={type == "radio" ? "radio" : title}
                        className={`${type == "radio" ? "mt-1 w-max" : "w-full"} rounded-md border border-gray-300 p-2 text-sm font-thin outline-0`}
                        type={type}
                        checked={
                          options && data === options[index] ? true : false
                        }
                        value={
                          values
                            ? index === 0
                              ? data && data
                              : secondData
                            : options && options[index]
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
                    value={data}
                  />
                </div>
              )}

              {error && (
                <span className="mt-2 text-center text-xs text-red-600">
                  {errorText}
                </span>
              )}

              <Button
                disabled={error || disabled}
                className="mt-4 h-[36px] w-full justify-center"
                variant="main"
                onClick={submitHandler}
              >
                {isPending ? <ButtonLoader /> : "ذخیره"}
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
