import Breadcrumb from "@/src/components/modules/breadcrumb/breadcrumb";
import Container from "@/src/components/modules/container/container";
import { Shape } from "@/src/components/screens/login/partials/shape/shape";
import Main from "@/src/components/screens/login/partials/main/Main";

const LoginScreen = () => {
  return (
   <Container>
      <Breadcrumb route="ورود" />
      <div className=" relative bottom-2 !z-10 flex flex-col-reverse justify-center gap-8 rounded-xl bg-white px-3 pb-10 sm:!pb-20 pt-5 sm:!pt-10 md:!flex-row lg:!gap-20">
        <Main />
        <Shape />
      </div>
    </Container>
  )
}

export default LoginScreen

 