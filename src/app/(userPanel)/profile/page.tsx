"use client";
import Breadcrumb from "@/src/components/modules/breadcrumb/Breadcrumb";
import { Button } from "@/src/components/shadcn/ui/button";
import Container from "@/src/components/modules/container/Container";
import Image from "next/image";
import Box from "@/src/components/templates/userPanel/profile/Box";
import ChangePassword from "@/src/components/templates/userPanel/profile/components/ChangePassword";
import { ChangeEvent, useEffect, useState } from "react";
import { authStore } from "@/src/stores/auth";
import TwoStepBox from "@/src/components/templates/userPanel/profile/TwoStepBox";
import usePostData from "@/src/hooks/usePostData";
import Loader from "@/src/components/modules/loader/Loader";
import Layout from "@/src/components/layouts/userLayout/Layout";
import { useQueryClient } from "@tanstack/react-query";
import swal from "sweetalert";

const Profile = () => {
  const { userData } = authStore((state) => state);
  const queryClient = useQueryClient();

  const [userName, setUserName] = useState("");
  const [userFamily, setUserFamily] = useState("");
  const [about, setAbout] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [avatar, setAvatar] = useState("");

  const { mutate: mutation, isPending } = usePostData<any>(
    "/user/edit",
    "آواتار با موفقیت بروزرسانی شد",
    true,
    null,
    true,
  );

  useEffect(() => {
    setUserName(userData?.user.firstName as string);
    setUserFamily(userData?.user.lastName as string);
    setGender(
      userData?.user.gender
        ? userData?.user.gender == "male"
          ? "مرد"
          : "زن"
        : "این فیلد تکمیل نشده است",
    );
    setEmail(
      userData?.user.email ? userData?.user.email : "این فیلد تکمیل نشده است",
    );
    setAbout(
      userData?.user.aboutMe
        ? userData?.user.aboutMe
        : "این فیلد تکمیل نشده است",
    );
    setAvatar(
      userData?.user.avatar
        ? `https://jajiga-backend.liara.run/user/avatars/${userData?.user.avatar}`
        : "",
    );
    setPhoneNumber(userData?.user.phone as string);
  }, [userData]);

  useEffect(() => {
    console.log(avatar);
  }, [avatar]);

  const profileChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      let file = event.target.files[0];
      if (file.type === "image/png" || file.type === "image/jpeg") {
        let reader = new FileReader();
        reader.onloadend = function () {
          let base64String = reader.result;
          setAvatar(base64String as string);
          const formData = new FormData();
          formData.append("avatar", file);
          mutation(formData);
          queryClient.invalidateQueries({ queryKey: ["auth"] });
        };
        reader.readAsDataURL(file);
      } else {
        swal({
          title:
            "تایپ فایل وارد شده اشتباه است. لطفا فایل با تایپ های .png یا .jpg وارد کنید",
          icon: "error",
          buttons: [false, "اوکی"],
        });
      }
    }
  };
  return (
    <Container disableFooter={true}>
      <Breadcrumb className="!pb-[70px]" route={"حساب کاربری"} />
      <Layout>
        <div
          className={`relative bottom-2 z-10 flex w-full !min-w-full gap-4 rounded-xl bg-white px-3 sm:!px-5`}
        >
          <div className="Container">
            <main>
              <div className="relative bottom-4 mx-auto block w-max">
                <Image
                  className="h-20 w-20 rounded-full"
                  height={1000}
                  width={1000}
                  alt="profile"
                  src={avatar ? avatar : `/images/profile.jpg`}
                />
                <span className="absolute -right-2 bottom-1 h-7 w-7 cursor-pointer rounded-full bg-customYellow px-[10px] pb-[.1rem] pl-[20px] pt-[.2rem]">
                  +
                  <input
                    type="file"
                    onChange={(event) => profileChangeHandler(event)}
                    className="absolute right-0 top-0 h-full w-full cursor-pointer opacity-0"
                  />
                </span>
              </div>
              <div className="grid grid-cols-[auto] gap-5 border-t border-solid border-[#00000031] px-2 pt-4 md:!px-0 lg:!grid-cols-[1fr,1fr]">
                <Box
                  setValues={[setUserName, setUserFamily]}
                  values={[userName, userFamily]}
                  type="text"
                  multiple={["نام", "نام خانوادگی"]}
                  requestBody={["firstName", "lastName"]}
                  title="نام و نام خانوادگی"
                  regex={/^[آ-یپچژگ\s]{3,15}$/}
                  errorText="نام و نام خانوادگی باید فارسی، و حداقل 3 و حداکثر 15 حرف داشته باشد"
                />
                <TwoStepBox
                  setValue={setPhoneNumber}
                  value={phoneNumber}
                  type="number"
                  title="شماره موبایل"
                  requestBody="phone"
                  regex={/((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/}
                  errorText="شماره موبایل نامعتبر است"
                />
                <TwoStepBox
                  setValue={setEmail}
                  value={email}
                  type="email"
                  title="ایمیل"
                  requestBody="email"
                  regex={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
                  errorText="ایمیل نامعتبر است"
                />
                <Box
                  setValue={setGender}
                  value={gender}
                  type="radio"
                  multiple={["مرد", "زن"]}
                  options={["مرد", "زن"]}
                  requestBody="gender"
                  title="جنسیت"
                />
                <Box
                  setValue={setAbout}
                  value={about}
                  requestBody="aboutMe"
                  type="input"
                  title="درباره خودتان"
                  regex={/^[آ-یپچژگ\s]{10,299}$/}
                  errorText="درباره باید فارسی، و حداقل 10 و حداکثر 299 حرف داشته باشد"
                />
              </div>
              <ChangePassword />
              <Button
                size={"sm"}
                className="border-2 border-solid border-red-500 text-red-500"
              >
                حذف حساب کاربری
              </Button>
              {isPending && <Loader />}
            </main>
          </div>
        </div>
      </Layout>
    </Container>
  );
};

export default Profile;
