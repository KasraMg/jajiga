import Layout from "@/src/components/modules/Layout/Layout";
import Breadcrumb from "@/src/components/modules/breadcrumb/Breadcrumb";
import Button from "@/src/components/modules/button";
import Container from "@/src/components/modules/container/Container";
import Image from "next/image";
import Box from "@/src/components/templates/userPanel/profile/Box"; 
const Profile = () => {
  return (
    <Container disableFooter={true}>
      <Breadcrumb
        className="hidden md:block !pb-[70px]"
        route={"حساب کاربری"}
      />
      <Layout className="flex gap-4 w-full !min-w-full">
        <main className="Container">
          <div className="relative mx-auto block bottom-4 w-max">
            <Image
              className="w-20 h-20 rounded-full"
              height={1000}
              width={1000}
              alt="profile"
              src="/images/profile.jpg"
            />
            <span className=" absolute bottom-1 right-0 bg-customYellow rounded-full px-[10px] pt-[.2rem] pb-[.1rem]">
              +
              <input type="file" className=" opacity-0 w-full h-full"  />
            </span>
          </div>
          <div className="border-t border-solid border-[#00000031] pt-4 grid grid-cols-[auto,auto] gap-5">
            <Box />
            <Box />
            <Box />
          </div>
          <Button size={"sm"} className="bg-gray-100 text-black block my-5">
            ﺗﻐﯿﯿﺮ رمزعبور
          </Button>
          <Button
            size={"sm"}
            className="border-2 text-red-500 border-red-500 border-solid"
          >
            حذف حساب کاربری
          </Button>
        </main>
      </Layout>
    </Container>
  );
};

export default Profile;
