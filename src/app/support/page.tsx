import Layout from "@/src/components/layouts/pageLayout/Layout";
import Accordion from "@/src/components/modules/accordion/Accordion";
import Breadcrumb from "@/src/components/modules/breadcrumb/Breadcrumb";
import Container from "@/src/components/modules/container/Container";
import CallModal from "@/src/components/templates/support/CallModal";
import ContactUsDetailsModal from "@/src/components/templates/support/ContactUsDetailsModal";
import Form from "@/src/components/templates/support/Form";
const page = () => {
  return (
    <Container>
      <Breadcrumb route="پشتیبانی" />
      <Layout>
        <div className="mx-auto mb-20 flex w-full flex-col gap-4 pt-10 lg:!max-w-[815px] lg:!flex-row">
          <div className="w-full lg:!w-1/2">
            <Form />
            <div className="mt-4 flex gap-2">
              <CallModal />
              <ContactUsDetailsModal />
            </div>
          </div>
          <section className="mb-8 mt-5 w-full lg:!my-0 lg:!w-1/2">
            <p className="text-center">سوالات متداول</p>
            <Accordion
              id={1}
              title="چطور رزرو کنم؟"
              text="پس از مشخص کردن تاریخ ورود و خروج و تعداد نفرات، درخواست رزرو خود را به‌صورت رایگان ثبت کنید تا برای میزبان ارسال ‌شود. میزبان در صورت خالی بودن و مهیا بودن اقامتگاه، رزرو را تایید می‌کند. سپس پیامکی مبنی بر تایید رزرو برای شما ارسال می‌شود و شما حداکثر 30 دقیقه فرصت خواهید داشت تا با پرداخت مبلغ صورتحساب، رزرو را قطعی کرده و سند رزرو حاوی صورتحساب، شماره تماس میزبان، آدرس اقامتگاه و سایر اطلاعات رزرو را دریافت کنید."
            />
            <Accordion
              id={2}
              title="چطور رزرو کنم؟"
              text="پس از مشخص کردن تاریخ ورود و خروج و تعداد نفرات، درخواست رزرو خود را به‌صورت رایگان ثبت کنید تا برای میزبان ارسال ‌شود. میزبان در صورت خالی بودن و مهیا بودن اقامتگاه، رزرو را تایید می‌کند. سپس پیامکی مبنی بر تایید رزرو برای شما ارسال می‌شود و شما حداکثر 30 دقیقه فرصت خواهید داشت تا با پرداخت مبلغ صورتحساب، رزرو را قطعی کرده و سند رزرو حاوی صورتحساب، شماره تماس میزبان، آدرس اقامتگاه و سایر اطلاعات رزرو را دریافت کنید."
            />
            <Accordion
              id={3}
              title="چطور رزرو کنم؟"
              text="پس از مشخص کردن تاریخ ورود و خروج و تعداد نفرات، درخواست رزرو خود را به‌صورت رایگان ثبت کنید تا برای میزبان ارسال ‌شود. میزبان در صورت خالی بودن و مهیا بودن اقامتگاه، رزرو را تایید می‌کند. سپس پیامکی مبنی بر تایید رزرو برای شما ارسال می‌شود و شما حداکثر 30 دقیقه فرصت خواهید داشت تا با پرداخت مبلغ صورتحساب، رزرو را قطعی کرده و سند رزرو حاوی صورتحساب، شماره تماس میزبان، آدرس اقامتگاه و سایر اطلاعات رزرو را دریافت کنید."
            />
            <Accordion
              id={4}
              title="چطور رزرو کنم؟"
              text="پس از مشخص کردن تاریخ ورود و خروج و تعداد نفرات، درخواست رزرو خود را به‌صورت رایگان ثبت کنید تا برای میزبان ارسال ‌شود. میزبان در صورت خالی بودن و مهیا بودن اقامتگاه، رزرو را تایید می‌کند. سپس پیامکی مبنی بر تایید رزرو برای شما ارسال می‌شود و شما حداکثر 30 دقیقه فرصت خواهید داشت تا با پرداخت مبلغ صورتحساب، رزرو را قطعی کرده و سند رزرو حاوی صورتحساب، شماره تماس میزبان، آدرس اقامتگاه و سایر اطلاعات رزرو را دریافت کنید."
            />
            <Accordion
              id={5}
              title="چطور رزرو کنم؟"
              text="پس از مشخص کردن تاریخ ورود و خروج و تعداد نفرات، درخواست رزرو خود را به‌صورت رایگان ثبت کنید تا برای میزبان ارسال ‌شود. میزبان در صورت خالی بودن و مهیا بودن اقامتگاه، رزرو را تایید می‌کند. سپس پیامکی مبنی بر تایید رزرو برای شما ارسال می‌شود و شما حداکثر 30 دقیقه فرصت خواهید داشت تا با پرداخت مبلغ صورتحساب، رزرو را قطعی کرده و سند رزرو حاوی صورتحساب، شماره تماس میزبان، آدرس اقامتگاه و سایر اطلاعات رزرو را دریافت کنید."
            />
            <Accordion
              id={6}
              title="چطور رزرو کنم؟"
              text="پس از مشخص کردن تاریخ ورود و خروج و تعداد نفرات، درخواست رزرو خود را به‌صورت رایگان ثبت کنید تا برای میزبان ارسال ‌شود. میزبان در صورت خالی بودن و مهیا بودن اقامتگاه، رزرو را تایید می‌کند. سپس پیامکی مبنی بر تایید رزرو برای شما ارسال می‌شود و شما حداکثر 30 دقیقه فرصت خواهید داشت تا با پرداخت مبلغ صورتحساب، رزرو را قطعی کرده و سند رزرو حاوی صورتحساب، شماره تماس میزبان، آدرس اقامتگاه و سایر اطلاعات رزرو را دریافت کنید."
            />
            <Accordion
              id={7}
              title="چطور رزرو کنم؟"
              text="پس از مشخص کردن تاریخ ورود و خروج و تعداد نفرات، درخواست رزرو خود را به‌صورت رایگان ثبت کنید تا برای میزبان ارسال ‌شود. میزبان در صورت خالی بودن و مهیا بودن اقامتگاه، رزرو را تایید می‌کند. سپس پیامکی مبنی بر تایید رزرو برای شما ارسال می‌شود و شما حداکثر 30 دقیقه فرصت خواهید داشت تا با پرداخت مبلغ صورتحساب، رزرو را قطعی کرده و سند رزرو حاوی صورتحساب، شماره تماس میزبان، آدرس اقامتگاه و سایر اطلاعات رزرو را دریافت کنید."
            />
          </section>
        </div>
      </Layout>
    </Container>
  );
};

export default page;
