import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaRegSnowflake } from "react-icons/fa";

const Infoes = () => {
  return (
    <div>
      <h2 className="my-6 mb-4 text-lg text-[#252a31]">درباره اقامتگاه</h2>
      <p className="text-[#404040]">اجاره اقامتگاه در رامسر</p>
      <div className="font-vazir text-sm font-light leading-6 text-[#404040]">
        این ویلا دو خوابه دارای استخر آبگرم با سیستم تصفیه اتوماتیک در منطقه
        شهری و در عین حال در جای دنج و خلوتی قرار دارد.
        <br />
        دسترسی آسان به مراکز تفریحی و گردشگری همچنین به مراکز خرید و خدماتی نظیر
        پمپ بنزین از مزیت آن است.
        <br />
        استخر سرپوشیده آبگرم به ابعاد 5 در 4 متر و عمق 1/60 با تصفیه اتوماتیک 12
        ساعته مهیای استفاده مهمانان می باشد.
        <br />
        فاصله ویلا از ساحل حدود 1 کیلومتر است و همچنین سوپرمارکت و نانوایی نیز
        در فاصله 200 متری آن واقع شده است.
        <br />
        در نزدیکی ویلا و در فاصله حدود 50 متری همسایه ای نیست از این رو مزاحمتی
        برای آرامش یا خوش بودن مهمانها وجود ندارد، البته امنیت ویلا مسلما کامل
        است.
        <br />
        فاصله حدود 4 کیلومتری از مجموعه تله کابین رامسر و فاصله 3 کیلومری از
        جاده جواهرده از دیگر خصوصیات ویلا محسوب میشود.
        <br /> لازم به ذکر است که به تمیزی این ویلا توجه ویژه ای میشود، از این
        رو از مهمانان نیز انتظار داریم که با ما همسو باشند
      </div>
      <hr className="mt-4" />
      <div>
        <h2 className="my-6 mb-4 text-lg text-[#252a31]">درباره اقامتگاه</h2>
        <div className="grid grid-cols-[auto,auto] gap-3 text-sm text-gray-800">
          <p>
            {" "}
            <strong>ظرفیت استاندارد: </strong> 3 نفر
          </p>
          <p>
            <strong className="ml-2 text-black">حداکثر ظرفیت: </strong> 5 نفر
          </p>
          <p>
            <strong className="ml-2 text-black">متراژ زیربنا:</strong> 62 متر{" "}
          </p>
          <p>
            <strong className="ml-2 text-black">متراژ محوطه:</strong> 1000 متر{" "}
          </p>
          <p>
            <strong className="ml-2 text-black">نوع اقامتگاه:</strong> کلبه{" "}
          </p>
          <p>
            <strong className="ml-2 text-black">منطقه:</strong>روستایی
          </p>
          <p>
            <strong className="ml-2 text-black">تعداد اتاق:</strong>1
          </p>
        </div>
      </div>
      <hr className="mt-8" />
      <div className="border-gray-300 pb-4">
        <h2 className="my-6 mb-4 text-lg text-[#252a31]">امکانات</h2>
        <div className="grid grid-cols-[auto,auto] gap-3 text-sm text-gray-800">
          <div className="flex items-center gap-2">
            <FaRegSnowflake />
            <p>پارکینگ</p>
            <div
              className="relative cursor-pointer text-[#6378f1]"
              id="tooltip"
            >
              <BsInfoCircleFill />
              <div className="invisible absolute -left-[2.5rem] -top-[2.5rem] whitespace-nowrap rounded-lg bg-black px-4 py-2 text-xs text-white">
                <span>سلام چطوری؟</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaRegSnowflake />
            <p>پارکینگ</p>
            <div
              className="relative cursor-pointer text-[#6378f1]"
              id="tooltip"
            >
              <BsInfoCircleFill />
              <div className="invisible absolute -left-[2.5rem] -top-[2.5rem] whitespace-nowrap rounded-lg bg-black px-4 py-2 text-xs text-white">
                <span>سلام چطوری؟</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaRegSnowflake />
            <p>پارکینگ</p>
            <div
              className="relative cursor-pointer text-[#6378f1]"
              id="tooltip"
            >
              <BsInfoCircleFill />
              <div className="invisible absolute -left-[2.5rem] -top-[2.5rem] whitespace-nowrap rounded-lg bg-black px-4 py-2 text-xs text-white">
                <span>سلام چطوری؟</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaRegSnowflake />
            <p>پارکینگ</p>
            <div
              className="relative cursor-pointer text-[#6378f1]"
              id="tooltip"
            >
              <BsInfoCircleFill />
              <div className="invisible absolute -left-[2.5rem] -top-[2.5rem] whitespace-nowrap rounded-lg bg-black px-4 py-2 text-xs text-white">
                <span>سلام چطوری؟</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaRegSnowflake />
            <p>پارکینگ</p>
            <div
              className="relative cursor-pointer text-[#6378f1]"
              id="tooltip"
            >
              <BsInfoCircleFill />
              <div className="invisible absolute -left-[2.5rem] -top-[2.5rem] whitespace-nowrap rounded-lg bg-black px-4 py-2 text-xs text-white">
                <span>سلام چطوری؟</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaRegSnowflake />
            <p>پارکینگ</p>
            <div
              className="relative cursor-pointer text-[#6378f1]"
              id="tooltip"
            >
              <BsInfoCircleFill />
              <div className="invisible absolute -left-[2.5rem] -top-[2.5rem] whitespace-nowrap rounded-lg bg-black px-4 py-2 text-xs text-white">
                <span>سلام چطوری؟</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infoes;
