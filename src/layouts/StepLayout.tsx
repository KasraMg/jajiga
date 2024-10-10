"use client";
import { FC, useEffect } from "react"; 
import Breadcrumb from "@/src/components/modules/breadcrumb/Breadcrumb";
import Container from "@/src/components/modules/container/Container";
import Stepper from "@/src/components/modules/stepper/Stepper";
import { getFromLocalStorage } from "@/src/utils/utils";
import { authStore } from "@/src/stores/auth";
import { usePathname, useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

interface StepLayoutProps {
  stepperActive: number;
  children: React.ReactElement;
}
const StepLayout: FC<StepLayoutProps> = ({ stepperActive, children }) => {
  const villaId = getFromLocalStorage("villaId");
  const params = usePathname();
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["auth"] });

  const { userData, isPending } = authStore((state) => state);
  const route = useRouter();
  useEffect(() => {
    !isPending && !userData && route.push("/login");

    const villa = userData?.villas.find((villa) => villa._id === villaId);
    const villaParamStep = params.slice(13, 20);

    if (villaId && (villa?.step as any) + 1 < villaParamStep) {
      route.push(`/newRoom/step${villa?.step}`);
    }
  }, [userData]);

  return (
    <Container disableFooter={true}>
      <Breadcrumb className="hidden md:block" route={"ثبت اقامتگاه"} />
      <Breadcrumb template={true} className="block !py-0 md:hidden">
        <Stepper active={stepperActive} />
      </Breadcrumb>
      <main
        className={`relative bottom-2 z-10 rounded-xl bg-white px-3 sm:!px-5`}
      >
        <div className="Container">{children}</div>
      </main>
    </Container>
  );
};

export default StepLayout;
