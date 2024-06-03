import Breadcrumb from "@/src/components/modules/breadcrumb/Breadcrumb";
import Container from "@/src/components/modules/container/Container";
import { Shape } from "@/src/components/templates/login/shape/shape"; 
import Main from "@/src/components/templates/login/main/Main";

const Login = () => {
  return (
    <Container>
      <Breadcrumb route="ورود" />
      <div className="sm:!px-5` relative bottom-2 !z-10 flex flex-col-reverse justify-center gap-8 rounded-xl bg-white px-3 pb-20 pt-5 sm:!pt-10 md:!flex-row lg:!gap-20">
        <Main />
        <Shape />
      </div>
    </Container>
  );
};

export default Login;
