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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "جاجیگا | ویرایش اقامتگاه",
};

const Faq = () => {
  return (
    <Container>
      <Breadcrumb
        className="!pb-[70px]"
        routes={["اقامتگاه ها", "ویرایش اقامتگاه"]}
      />

      <main
        className={`relative bottom-2 !z-10 rounded-xl bg-white px-3 sm:!px-5`}
      >
        <div className="Container">
          <div className="mx-auto mb-10">
            <Tabs defaultValue="images" className="w-full" dir="rtl">
              <TabsList
                dir="rtl"
                id="room_edit_tablist"
                className="relative bottom-[38px] w-full justify-between overflow-y-hidden overflow-x-scroll md:!w-[auto] md:!justify-center md:!overflow-hidden"
              >
                <TabsTrigger
                  className="data-[state=active]:border-transparent sm:data-[state=active]:!border-black"
                  value="images"
                >
                  تصاویر
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:border-transparent sm:data-[state=active]:!border-black"
                  value="facilities"
                >
                  امکانات
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:border-transparent sm:data-[state=active]:!border-black"
                  value="baseInformation"
                >
                  اطلاعات پایه
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:border-transparent sm:data-[state=active]:!border-black"
                  value="capacity"
                >
                  ظرفیت
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:border-transparent sm:data-[state=active]:!border-black"
                  value="rules"
                >
                  مقررات
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:border-transparent sm:data-[state=active]:!border-black"
                  value="price"
                >
                  نرخ فصلی
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:border-transparent sm:data-[state=active]:!border-black"
                  value="disable"
                >
                  غیر فعالسازی
                </TabsTrigger>
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
        </div>
      </main>
    </Container>
  );
};

export default Faq;
