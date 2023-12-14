
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import Card from './components/Card/Card';
const PopularDestinations = () => {


  return (
    <section className=' text-right py-5'>
      <p className='text-black text-[18px] mb-5'>مقاصد پر طرفدار</p>
      <Swiper
        dir='rtl'
        slidesPerView={4}
        grid={{
          rows: 2,
        }}
        rewind={true}
        spaceBetween={0}
        navigation={true}
        modules={[Grid, Navigation]}
        className="mySwiper w-full h-[400px] mx-auto  !pr-6 "
      >
        <SwiperSlide className='!h-[178px] !mx-auto'><Card /></SwiperSlide>
        <SwiperSlide className='!h-[178px] !mx-auto'><Card /></SwiperSlide>
        <SwiperSlide className='!h-[178px] !mx-auto'><Card /></SwiperSlide>
        <SwiperSlide className='!h-[178px] !mx-auto'><Card /></SwiperSlide>
        <SwiperSlide className='!h-[178px] !mx-auto'><Card /></SwiperSlide>
        <SwiperSlide className='!h-[178px] !mx-auto'><Card /></SwiperSlide>
        <SwiperSlide className='!h-[178px] !mx-auto'><Card /></SwiperSlide>
        <SwiperSlide className='!h-[178px] !mx-auto'><Card /></SwiperSlide>
        <SwiperSlide className='!h-[178px] !mx-auto'><Card /></SwiperSlide>
        <SwiperSlide className='!h-[178px] !mx-auto'><Card /></SwiperSlide>
        <SwiperSlide className='!h-[178px] !mx-auto'><Card /></SwiperSlide>
        <SwiperSlide className='!h-[178px] !mx-auto'><Card /></SwiperSlide>
        <SwiperSlide className='!h-[178px] !mx-auto'><Card /></SwiperSlide>
        <SwiperSlide className='!h-[178px] !mx-auto'><Card /></SwiperSlide>
      </Swiper>
    </section>
  )
}

export default PopularDestinations
