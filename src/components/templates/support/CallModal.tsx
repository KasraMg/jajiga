import {
  Dialog,
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/shadcn/ui/dialog";

const CallModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild> 
          <div
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
            }}
            className="w-1/2 p-2 text-center rounded-md pb-2 cursor-pointer"
          >
            <svg
              width={28}
              className="sc-679cb2a8-0 jespqW mx-auto mb-1"
              fill="none"
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 17H18C17.448 17 17 16.552 17 16V11C17 10.448 17.448 10 18 10H19C20.105 10 21 10.895 21 12V15C21 16.105 20.105 17 19 17Z"
                fill="#F0C807"
                stroke="#323232"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 17H5C3.895 17 3 16.105 3 15V12C3 10.895 3.895 10 5 10H6C6.552 10 7 10.448 7 11V16C7 16.552 6.552 17 6 17Z"
                fill="#F0C807"
                stroke="#323232"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M18.5 10V9.5C18.5 5.91 15.59 3 12 3V3C8.41 3 5.5 5.91 5.5 9.5V10"
                stroke="#323232"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.625 21.25H11.375C10.685 21.25 10.125 20.69 10.125 20C10.125 19.31 10.685 18.75 11.375 18.75H12.625C13.315 18.75 13.875 19.31 13.875 20C13.875 20.69 13.315 21.25 12.625 21.25Z"
                fill="#F0C807"
                stroke="#323232"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M13.875 20H16C17.105 20 18 19.105 18 18V17"
                stroke="#323232"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <p className="text-xs">تماس</p>
          </div> 
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle  className="text-center py-3">تماس با پشتیبانی</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-center leading-7 text-[#404040] font-vazir font-light ">
          ساعات کار پشتیبانی تلفنی از<strong> 8 صبح</strong> الی{" "}
          <strong>12 شب</strong> می‌باشد. شماره تماس:{" "}
        </p>
        <section className="flex justify-center gap-3 text-yellow-300 pt-4">
          <p>09046417084</p>
          <p>09374816998</p>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default CallModal;
