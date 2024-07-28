"use client";
import Layout from "@/src/components/modules/Layout/Layout";
import Breadcrumb from "@/src/components/modules/breadcrumb/Breadcrumb";
import { Button } from "@/src/components/shadcn/ui/button";
import Container from "@/src/components/modules/container/Container";
import Image from "next/image";
import Box from "@/src/components/templates/userPanel/profile/Box";
import ChangePassword from "@/src/components/templates/userPanel/profile/components/ChangePassword";
import { useEffect, useState } from "react";
import { authStore } from "@/src/stores/auth";

const Profile = () => {
  const { userData } = authStore((state) => state);

  const [userName, setUserName] = useState("");
  const [userFamily, setUserFamily] = useState("");
  const [about, setAbout] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
    setEmail("این فیلد تکمیل نشده است");
    setAbout(
      userData?.user.aboutMe
        ? userData?.user.aboutMe
        : "این فیلد تکمیل نشده است",
    );
    setPhoneNumber(userData?.user.phone as string);
  }, [userData]);

  const profileChangeHandler = (event) => {
    console.log(event);
    
  };
  return (
    <Container disableFooter={true}>
      <Breadcrumb className="!pb-[70px]" route={"حساب کاربری"} />
      <Layout className="flex w-full !min-w-full gap-4">
        <main>
          <div className="relative bottom-4 mx-auto block w-max">
            <Image
              className="h-20 w-20 rounded-full"
              height={1000}
              width={1000}
              alt="profile"
              src="/images/profile.jpg"
            />
            <span className="absolute bottom-1 -right-2 pl-[20px] h-7 w-7 rounded-full bg-customYellow px-[10px] pb-[.1rem] pt-[.2rem]">
              +
              <input
                type="file"
                onChange={(event) => profileChangeHandler(event)}
                className="h-full w-full opacity-0 absolute right-0 top-0 cursor-pointer"
              />
            </span>
          </div>
          <div className="grid grid-cols-[auto] gap-5 border-t border-solid border-[#00000031] px-2 pt-4 md:!px-0 lg:!grid-cols-[auto,auto]">
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
            <Box
              setValue={setPhoneNumber}
              value={phoneNumber}
              type="number"
              title="شماره موبایل"
              regex={/^[آ-یپچژگ\s]{3,15}$/}
              errorText="نام و نام خانوادگی باید فارسی، و حداقل 3 و حداکثر 15 حرف داشته باشد"
            />
            <Box
              setValue={setEmail}
              value={email}
              type="input"
              title="آدرس ایمیل"
              regex={/^[آ-یپچژگ\s]{3,15}$/}
              errorText="نام و نام خانوادگی باید فارسی، و حداقل 3 و حداکثر 15 حرف داشته باشد"
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
        </main>
      </Layout>
    </Container>
  );
};

export default Profile;
