"use client"
import Slider from "@/src/components/modules/slider/Slider";
import React from "react";
import Card from "./components/Card";

const Ads = () => {
  const data = [
    {
      title: "رزرواسیون ۲۴ ساعته",
      text: "خدمات آنلاین در تمام روزهای هفته",
      svg: (
        <svg
          className="sc-679cb2a8-0 iBzAsR"
          fill="none"
          width={45}
          viewBox="0 0 51 46"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M4.82143 35.8707C11.9797 39.0051 15.5068 27.4777 23.3163 28.2136C32.8871 29.1155 33.6432 42.1236 42.9321 39.6994C52.727 37.1432 51.3299 28.2039 50.2179 18.369C49.3666 10.839 47.0778 7.21516 39.792 3.3866C27.7744 -2.9284 14.6362 -0.369894 7.06323 10.7117C1.45607 18.9167 -4.39894 31.8333 4.82143 35.8707Z"
            fill="#F4CA16"
            fillOpacity="0.5"
          ></path>
          <circle
            cx="33"
            cy="41"
            r="3"
            fill="#F4CA16"
            fillOpacity="0.5"
          ></circle>
          <circle
            cx="28"
            cy="43.6362"
            r="2"
            fill="#F4CA16"
            fillOpacity="0.5"
          ></circle>
          <path
            d="M40.3033 16.2994C40.7583 17.6696 40.9932 19.0984 41 20.5366C41 28.4932 34.2843 34.9434 26 34.9434C17.7157 34.9434 11 28.4932 11 20.5366C11 12.58 17.7157 6.12988 26 6.12988C27.4974 6.13638 28.985 6.36201 30.4117 6.799"
            stroke="#072FF0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M42.1903 7.7301L37.5484 12.3037L34.5713 9.37044"
            stroke="#072FF0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M18.7217 18.4967C18.7217 17.1936 19.8216 16.1372 21.1783 16.1372C22.5351 16.1372 23.635 17.1936 23.635 18.4967C23.635 21.4453 18.7217 21.4453 18.7217 24.9381H23.635"
            stroke="#072FF0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M31.8867 24.9385V16.9541C31.8884 16.5901 31.6385 16.2693 31.2745 16.1681C30.9105 16.067 30.5209 16.2101 30.32 16.5187C29.275 18.1418 28.135 19.9842 27.15 21.6122C26.9861 21.8846 26.9865 22.2204 27.151 22.4925C27.3155 22.7646 27.6191 22.9313 27.9467 22.9296H33.2783"
            stroke="#072FF0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
    {
      title: "ضمانت تحویل اقامتگاه",
      text: "تسویه با میزبان پس از تحویل اقامتگاه",
      svg: (
        <svg
          className="sc-679cb2a8-0 iBzAsR"
          fill="none"
          width={45}
          viewBox="0 0 51 50"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M26.5004 38C23.6141 36.2589 20.1164 36.8762 18.0004 39.5C14.7923 43.4781 23.7014 51.9183 27.5004 48.5C30.5624 45.7449 30.0274 40.1276 26.5004 38Z"
            fill="#F4CA16"
            fillOpacity="0.5"
          ></path>
          <path
            d="M9.65908 42.9693C18.611 43.7419 17.4809 29.7139 25.9278 26.6398C34.0407 23.6872 38.523 36.6481 47.9693 28.22C57.4157 19.792 42.856 4.05861 30.651 0.828631C18.5966 -2.36151 6.77111 3.89279 2.31191 15.5779C-1.6359 25.9228 -1.33705 42.0202 9.65908 42.9693Z"
            fill="#F4CA16"
            fillOpacity="0.5"
          ></path>
          <path
            d="M20.2383 24L23.7303 27.8095L30.7145 20.1905"
            stroke="#072FF0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.833 21.945C10.833 29.3209 15.4117 35.9219 22.3201 38.5059L22.3703 38.5247C24.0661 39.159 25.9342 39.1584 27.6297 38.523L27.6703 38.5078C34.5849 35.9164 39.1663 29.307 39.1663 21.9227V15.7171C39.1663 14.2589 38.2186 12.97 36.8268 12.5353L25.9935 9.15159C25.3464 8.94947 24.653 8.94947 24.0059 9.15159L13.1726 12.5352C11.7807 12.9699 10.833 14.2588 10.833 15.717V21.945Z"
            stroke="#072FF0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
    {
      title: " کم هزینه و با کیفیت",
      text: "اقامت با کیفیت تر با هزینه کمتر",
      svg: (
        <svg
          className="sc-679cb2a8-0 iBzAsR"
          fill="none"
          width={45}
          viewBox="0 0 49 53"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M17.4995 30.7948C28.4996 28.7948 26.0148 55.1128 32.9995 52.5C42.7148 48.8658 47.4995 41 48.4995 31L48.4859 30.6603C47.9989 18.4721 47.9373 16.9302 41.1901 9.35572C34.9606 3.90493 30.4718 -0.235478 22.2544 0.0104065C11.1675 0.342155 2.80512 7.65297 0.613678 18.701C-1.51483 29.4319 6.89961 32.722 17.4995 30.7948Z"
            fill="#F4CA16"
            fillOpacity="0.5"
          ></path>
          <path
            d="M35.8626 21.0186V11.6613C35.8626 10.741 35.1157 9.99399 34.1953 9.99399H31.099C30.1786 9.99399 29.4316 10.741 29.4316 11.6613V15.5063"
            stroke="#072FF0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M7.99414 22.856L20.8295 11.8548C22.0783 10.7843 23.9208 10.7843 25.1696 11.8548L38.0066 22.856"
            stroke="#072FF0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M10.1387 21.0186V36.6718C10.1387 38.5142 11.631 40.0065 13.4734 40.0065H21.3333"
            stroke="#072FF0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M32.1711 41.674C28.0277 41.674 24.668 38.3143 24.668 34.1709C24.668 30.0275 28.0277 26.6678 32.1711 26.6678C36.3162 26.6678 39.6742 30.0275 39.6742 34.1709C39.6742 38.3143 36.3162 41.674 32.1711 41.674"
            stroke="#072FF0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M35.1352 32.6885L31.4303 36.3933L29.2061 34.1707"
            stroke="#072FF0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
  ];
  return (
    <Slider
      Card={Card}
      data={data}
      navigation={false}
      className="mt-10 mb-10 !pl-0"
      breakPoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      }}
    />
  );
};

export default Ads;
