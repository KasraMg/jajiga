import Accordion from "@/src/components/modules/accordion/cccordion";
import Breadcrumb from "@/src/components/modules/breadcrumb/breadcrumb";
import Container from "@/src/components/modules/container/container";
import { faqOptions } from "@/src/utils/options";

const FaqScreen = () => {
  return (
    <Container>
      <Breadcrumb route="سوالات متداول" />
      <main
        className={`relative bottom-2 !z-10 rounded-xl bg-white px-3 sm:!px-5`}
      >
        <div className="Container">
          <div className="mx-auto mb-10 max-w-[815px] pt-3">
            {faqOptions.map((option, index) => (
              <Accordion
                id={index + 1}
                title={option.title}
                text={option.text}
              />
            ))}
          </div>
        </div>
      </main>
    </Container>
  );
};

export default FaqScreen;
