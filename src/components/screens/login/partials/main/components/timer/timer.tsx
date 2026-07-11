import { Button } from "@/src/components/shadcn/ui/button";
import { useTimer } from "./hook";

type Props = {
  phoneNumber: string;
};

const Timer = ({ phoneNumber }: Props) => {
  const { timer, resendCodeHandler } =
    useTimer({
      phoneNumber,
    });

  return (
    <>
      {timer > 0 ? (
        <div className="w-full text-center text-sm">
          {`${Math.floor(timer / 60)}:${
            timer % 60 < 10
              ? `0${timer % 60}`
              : timer % 60
          } ثانیه تا ارسال مجدد کد`}
        </div>
      ) : (
        <Button
          onClick={resendCodeHandler}
          className="w-full justify-center !rounded-sm !px-4 text-sm"
          variant="outlineMain"
        >
          ارسال دوباره کد
        </Button>
      )}
    </>
  );
};

export default Timer;