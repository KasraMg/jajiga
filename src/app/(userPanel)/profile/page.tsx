import Layout from "@/src/components/modules/Layout/Layout";
import Breadcrumb from "@/src/components/modules/breadcrumb/Breadcrumb";
import Button from "@/src/components/modules/button";
import Container from "@/src/components/modules/container/Container";
import Image from "next/image";
import Box from "@/src/components/templates/userPanel/profile/Box";
const Profile = () => {
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
            <span className="absolute bottom-1 right-0 h-7 w-7 rounded-full bg-customYellow px-[10px] pb-[.1rem] pt-[.2rem]">
              +
              <input type="file" className="h-full w-full opacity-0" />
            </span>
          </div>
          <div className="grid grid-cols-[auto] gap-5 border-t border-solid border-[#00000031] px-2 pt-4 md:!px-0 lg:!grid-cols-[auto,auto]">
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </div>
          <Button size={"sm"} className="my-5 block bg-gray-100 text-black">
            ﺗﻐﯿﯿﺮ رمزعبور
          </Button>
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
