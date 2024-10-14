import Accordion from "@/src/components/modules/accordion/Accordion";
import Breadcrumb from "@/src/components/modules/breadcrumb/Breadcrumb";
import Container from "@/src/components/modules/container/Container";
import CallModal from "@/src/components/templates/support/CallModal";
import ContactUsDetailsModal from "@/src/components/templates/support/ContactUsDetailsModal";
import Form from "@/src/components/templates/support/Form";
import { faqOptions } from "@/src/utils/options";
import { Metadata } from "next";
 
export const metadata: Metadata = { 
  title: "جاجیگا | پشتیبانی",
};
const page = () => {
  return (
    <Container>
      <Breadcrumb route="پشتیبانی" /> 
      <main
        className={`relative bottom-2 z-10 rounded-xl bg-white px-3 sm:!px-5`}
      >
        <div className="Container">
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
              {faqOptions.map((option, index) => (
                <Accordion
                  id={index + 1}
                  key={option.title}
                  title={option.title}
                  text={option.text}
                />
              ))}
            </section>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default page;
