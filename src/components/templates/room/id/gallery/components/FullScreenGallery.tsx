import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

const FullScreenGallery = ({
  setShowFullScreenGallery,
  images,
}: {
  setShowFullScreenGallery: (val: boolean) => void;
  images: string[];
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="fixed left-0 top-0 z-[999] h-full w-full bg-[#161418]">
      <Swiper 
        spaceBetween={10}
        dir="rtl"
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 fullScreenSwiper2 !pt-10"
      >
        {images.map((img) => (
          <SwiperSlide>
            <Image
              width={1000}
              height={1000}
              alt="cover"
              src={`https://jajiga-backend.liara.run/villa/covers/${img}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper as any}
        spaceBetween={10}
        dir="rtl"
        slidesPerView={10}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper fullScreenSwiper1 !absolute bottom-0 h-[100px] w-full bg-[#00000099] !p-[10px]"
      >
        {images.map((img) => (
          <SwiperSlide>
            <Image
              width={1000}
              height={1000}
              alt="cover"
              src={`https://jajiga-backend.liara.run/villa/covers/${img}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <IoMdClose
        className="absolute left-3 top-3 z-[9991] cursor-pointer text-2xl text-white"
        onClick={() => setShowFullScreenGallery(false)}
      />
    </div>
  );
};

export default FullScreenGallery;
