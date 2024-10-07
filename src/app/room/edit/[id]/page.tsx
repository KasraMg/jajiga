import Layout from "@/src/components/layouts/pageLayout/Layout";
import Breadcrumb from "@/src/components/modules/breadcrumb/Breadcrumb";
import Container from "@/src/components/modules/container/Container";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/shadcn/ui/tabs";
import BaseInformation from "@/src/components/templates/room/edit/baseInformation/BaseInformation";
import Capacity from "@/src/components/templates/room/edit/capacity/Capacity";
import Disable from "@/src/components/templates/room/edit/disable/Disable";
import Facilities from "@/src/components/templates/room/edit/facilities/Facilities";
import Images from "@/src/components/templates/room/edit/images/Images";
import Price from "@/src/components/templates/room/edit/price/Price";
import Rules from "@/src/components/templates/room/edit/rules/Rules";
import { fetchStep6Items } from "@/src/utils/serverFetchs";
import Hydrated from "@/src/providers/Hydrated";

const Faq = () => {
  return (
    <Container>
      <Breadcrumb
        className="!pb-[70px]"
        routes={["اقامتگاه ها", "ویرایش اقامتگاه"]}
      />
      <Layout className="!z-10">
        <div className="mx-auto mb-10">
          <Tabs defaultValue="images" className="w-full" dir="rtl">
            <TabsList
              dir="rtl"
              className="relative bottom-[38px] w-full justify-between overflow-scroll md:!w-[auto] md:!justify-center md:!overflow-hidden"
            >
              <TabsTrigger value="images">تصاویر</TabsTrigger>
              <TabsTrigger value="facilities">امکانات</TabsTrigger>
              <TabsTrigger value="baseInformation">اطلاعات پایه</TabsTrigger>
              <TabsTrigger value="capacity">ظرفیت</TabsTrigger>
              <TabsTrigger value="rules">مقررات</TabsTrigger>
              <TabsTrigger value="price">نرخ فصلی</TabsTrigger>
              <TabsTrigger value="disable">غیر فعالسازی</TabsTrigger>
            </TabsList>
            <TabsContent value="images">
              <Images />
            </TabsContent>
            <TabsContent value="facilities">
              <Hydrated
                queryKey={["server_step_6_items"]}
                queryFn={fetchStep6Items}
              >
                <Facilities /> 
              </Hydrated>
            </TabsContent>
            <TabsContent value="baseInformation">
              <BaseInformation />
            </TabsContent>
            <TabsContent value="capacity">
              <Capacity />
            </TabsContent>
            <TabsContent value="rules">
              <Rules />
            </TabsContent>
            <TabsContent value="price">
              <Price />
            </TabsContent>
            <TabsContent value="disable">
              <Disable />
            </TabsContent>
          </Tabs>
        </div>
      </Layout>
    </Container>
  );
};

export default Faq;
