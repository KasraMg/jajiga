"use client";
import Layout from "@/src/components/modules/Layout/Layout";
import Breadcrumb from "@/src/components/modules/breadcrumb/Breadcrumb";
import Container from "@/src/components/modules/container/Container";
import Link from "next/link";

const page = () => {
  return (
    <Container disableFooter={true}>
      <Breadcrumb route={"ثبت اقامتگاه"} />
      <Layout>
        <div className="flex max-w-[1120px] flex-col justify-center gap-5 py-8">
          <img
            width="110"
            height="110"
            className="mx-auto mt-20"
            src="https://img.icons8.com/3d-fluency/94/verified-account.png"
            alt="verified-account"
          />
          <p className="mt-3 text-center text-xl sm:!text-2xl">
            اقامتگاه شما با موفقیت ثبت شد
          </p>
          <Link className="text-sx text-center text-blue-600" href={"/"}>
            مشاهده اقامتگاه
          </Link>
        </div>
      </Layout>
    </Container>
  );
};

export default page;
