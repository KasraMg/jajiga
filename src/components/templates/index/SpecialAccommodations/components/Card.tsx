import Button from '@/src/components/modules/button'
import React from 'react'
import { SlEnergy } from "react-icons/sl";
import { CiStar } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
const Card = () => {
  return (
    <section>
    <div style={{ backgroundPosition:' -51px -46px'}} className='bg-[url(https://storage.jajiga.com/public/pictures/medium/3181811230115103439.jpg)] relative rounded-xl h-52'>
      <div className='flex flex-col p-2'>
        <Button size={'sm'} variant={"white"} className='font-vazir-light w-[78px]'>
          <CiStar className='ml-1' />
          مـمـتــــــاز
        </Button>
        <Button size={'sm'} variant={"yellow"} className='font-vazir-light mt-2 w-[78px]'>
          <SlEnergy className='ml-1'/>
          رزرو فوری 
        </Button>
      </div>
      <div style={{background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%) 0% 0% / cover'}} className='text-white w-full absolute bottom-0 text-sm right-0 pb-3 pr-3'> 
      <p>از 1,111,111 تومان</p>
      </div>
    </div>
    <p className='mt-3 text-sm'>اجاره منزل ویلایی در بابلسر</p>
    <div className='flex text-xs gap-1 mt-1 font-vazir-light text-gray-500 items-center'>
      <p>3 خوابه . </p>
      <p> 200 متر . </p>
      <p>تا 12 مهمان</p>
      <div className='flex items-center gap-1'>
        <IoIosStar className="text-sm text-yellow-400"/>
      <p className='pt-1'>  4.9</p>
      </div>
      <p  className='pt-1'>(13 نظر)</p>
    </div>
      
    </section>
  )
}

export default Card
