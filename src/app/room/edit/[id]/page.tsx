import Layout from "@/src/components/modules/Layout/Layout"; 
import Breadcrumb from "@/src/components/modules/breadcrumb/Breadcrumb";
import Container from "@/src/components/modules/container/Container";

const Faq = () => {
  return (
    <Container>
      <Breadcrumb
        className="!pb-[70px]"
        routes={["اقامتگاه ها", "ویرایش اقامتگاه"]}
      />
      <Layout className="!z-10">
        <div className="mx-auto mb-10 max-w-[815px] pt-3"></div>
      </Layout>
    </Container>
  );
};

export default Faq;
