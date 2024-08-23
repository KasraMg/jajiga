"use client";
import Layout from "@/src/components/layouts/pageLayout/Layout";
import Accordion from "@/src/components/modules/accordion/Accordion";
import Breadcrumb from "@/src/components/modules/breadcrumb/Breadcrumb";
import Container from "@/src/components/modules/container/Container";
import { faqOptions } from "@/src/utils/options";

const Faq = () => {
  return (
    <Container>
      <Breadcrumb route="سوالات متداول" />
      <Layout className="!z-10">
        <div className="mx-auto mb-10 max-w-[815px] pt-3">
          {faqOptions.map((option, index) => (
            <Accordion
              id={index + 1}
              title={option.title}
              text={option.text}
            />
          ))}
        </div>
      </Layout>
    </Container>
  );
};

export default Faq;
