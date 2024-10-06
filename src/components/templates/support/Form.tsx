"use client";
import usePostData from "@/src/hooks/usePostData";
import { supportSchema } from "@/src/validations/rules";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Button } from "../../shadcn/ui/button";
import { ButtonLoader } from "../../modules/loader/Loader";

const Form = () => {
  const { mutate: mutation, isPending } = usePostData<{
    email: string;
    name: string;
    message: string;
  }>("/ticket/send", "تیکت با موفقیت به پشتیبانی فرستاده شد", false);

  const formHandler = useFormik({
    initialValues: { name: "", email: "", message: "" },
    onSubmit: (values, { setSubmitting, resetForm }) => {
      mutation(values);
      resetForm()
    },
    validationSchema: supportSchema,
  });
  return (
    <div className="w-full">
      <p className="text-center">ارسال پیام به پشتیبانی</p>
      <form
        onClick={formHandler.handleSubmit}
        className="mt-5 w-full p-4"
        style={{
          boxShadow:
            " rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
        }}
      >
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            ایمیل شما
          </label>
          <input
            name="email"
            value={formHandler.values.email}
            onChange={formHandler.handleChange}
            onBlur={formHandler.handleBlur}
            type="email"
            id="email"
            className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-yellow-300 dark:focus:ring-yellow-300"
            placeholder="name@gmail.com"
            required
          />
          <span className="mx-auto mt-2 block text-center text-xs text-red-600">
            {formHandler.errors.email && formHandler.errors.email}
          </span>
        </div>

        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            نام شما
          </label>
          <input
            name="name"
            value={formHandler.values.name}
            onChange={formHandler.handleChange}
            onBlur={formHandler.handleBlur}
            type="text"
            id="name"
            className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-yellow-300 dark:focus:ring-yellow-300"
            placeholder="شاهین"
            required
          />
          <span className="mx-auto mt-2 block text-center text-xs text-red-600">
            {formHandler.errors.name && formHandler.errors.name}
          </span>
        </div>

        <div className="mb-5">
          <label
            htmlFor="text"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            متن
          </label>
          <input
            name="message"
            value={formHandler.values.message}
            onChange={formHandler.handleChange}
            onBlur={formHandler.handleBlur}
            type="text"
            id="text"
            className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-yellow-300 dark:focus:ring-yellow-300"
            placeholder="سلام..."
            required
          />
          <span className="mx-auto mt-2 block text-center text-xs text-red-600">
            {formHandler.errors.message && formHandler.errors.message}
          </span>
        </div>

        <Button
          type="submit"
          variant={"yellow"}
          className="mx-auto !block h-9 w-1/3 !rounded-md outline-none"
        >
          {isPending ? <ButtonLoader /> : "ارسال"}
        </Button>
      </form>
    </div>
  );
};

export default Form;
