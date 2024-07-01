import Layout from "@/src/components/modules/Layout/Layout";
import Breadcrumb from "@/src/components/modules/breadcrumb/Breadcrumb";
import HostCart from "@/src/components/modules/hostCart/HostCart";
import { IoMdCheckmark } from "react-icons/io";
import { TbHomePlus } from "react-icons/tb";
import Container from "@/src/components/modules/container/Container";
import { Button } from "@/src/components/shadcn/ui/button";
import Link from "next/link";
const page = () => {
  return (
    <Container>
      <Breadcrumb route={"ثبت اقامتگاه"} />
      <Layout>
        <div className="lf:!gap-5 mx-auto mb-6 mt-20 grid max-w-[860px] grid-cols-[auto] justify-center gap-10 lg:!grid-cols-[auto,auto]">
          <HostCart
            readMore={true}
            borderColor="white"
            icon={<IoMdCheckmark />}
            title="صحت اطلاعات"
            description="مطمئن شوید که نمایه اقامتگاه خود را منطبق با واقعیت تنظیم می کنید. به هیچ عنوان امکاناتی که در منزل فراهم نیست را ثبت نکنید و یا از عکسهای غیر واقعی استفاده نکنید. همچنین در صورتی که عیب, نقص یا مشکلی در اقامتگاه وجود دارد, در توضیحات اقامتگاه ذکر کنید و تصاویر آن را اضافه کنید. مطابق ضمانت تحویل اقامتگاه جاجیگا، درصورت اثبات عدم مطابقت اقامتگاه تحویل شده, رزرو لغو گردیده و کل ‏وجه دریافتی به میهمان بازگردانده خواهد شد."
          />
          <HostCart
            readMore={true}
            borderColor="white"
            icon={<TbHomePlus />}
            title="لغو مراحل ثبت"
            description='در صورتی که قادر به اتمام مراحل ثبت اقامتگاه نباشید, می توانید با کلیک بر گزینه "لغو و خروج" در بالای صفحه, مراحل ثبت را نیمه کاره بگذارید. اطلاعات وارد شده تا همان مرحله ذخیره می شود و می توانید در فرصت بعدی مراحل ثبت اقامتگاه را به پایان برسانید. پس با خیال راحت, ثبت اقامتگاه خود را شروع کنید.'
          />
        </div>
        <Link href="/newRoom/step1"> 
        <Button
          className="mx-auto my-8 mb-12 block w-full max-w-[860px] rounded-full py-2"
          variant={"main"}
          >
          شروع ثبت اقامتگاه
        </Button>
          </Link>
      </Layout>
    </Container>
  );
};

export default page;
