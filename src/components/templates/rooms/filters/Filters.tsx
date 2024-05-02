"use client"
import React, { useState } from 'react'
import { MdOutlinePeople } from "react-icons/md";
import { TbHomeQuestion, TbHomeStar, TbMoneybag } from "react-icons/tb";
import { FaMapLocationDot, FaRegTrashCan } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Filter from './components/filter/Filter';
import Button from '@/src/components/modules/button';
const Filters = () => {
  const [maximumSpace, setMaximumSpace] = useState<number>(1)
  const incrementMaximumHandler = () => {
    setMaximumSpace(prev => prev + 1)
  }
  const decrementMaximumHandler = () => {
    if (maximumSpace !== 1) {
      setMaximumSpace(prev => prev - 1)
    }
  }
  return (

    <div className='flex flex-wrap sm:!justify-start justify-center bg-[#f3f3f3] py-2 gap-2 px-8' style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
      <Filter title='تعداد نفرات ' icon={<MdOutlinePeople />}>
        <div className='p-3'>
          <div className='flex justify-between items-center text-sm '>
            <p className='font-vazir font-extrabold'>تعداد نفرات</p>
            <div className='flex justify-between items-center pl-1'>
              <div>
                <div className='flex justify-between items-center w-[130px]'>
                  <p onClick={incrementMaximumHandler} className='text-2xl cursor-pointer hover:text-gray-500'>+</p>
                  <p className='text-sm'>{maximumSpace} نفر</p>
                  <p onClick={decrementMaximumHandler} className={`${(maximumSpace == 1) && 'text-gray-300 !cursor-not-allowed'} text-2xl cursor-pointer mb-4 hover:text-gray-500`}>_</p>
                </div>
                <p className='text-sm text-gray-500 text-center'>(حداقل)</p>
              </div>
            </div>
          </div>
          <div className='flex items-center mt-5 gap-1 text-gray-500'>
            <IoInformationCircleOutline />
            <p className='text-xs'> با انتخاب تعداد نفرات، نتایج دقیق تری را مشاهده می‌کنید.</p>
          </div>
          <div className='mt-4 flex items-center justify-between'>
            <Button className='flex items-center gap-2 border-dashed' variant={'white'}>
              <FaRegTrashCan />
              پاک کردن
            </Button> 
            <Button className='flex items-center gap-2' variant={'main'}>
              <CiSearch />
              اعمال
            </Button>
          </div>
        </div>
      </Filter>
      <Filter title='محدوده اجاره بها' icon={<TbMoneybag />} >
        <div className="p-3 py-5 before:block before:absolute before:content-[''] before:rounded-l-lg before:top-4 before:bottom-0 before:h-8 before:right-0 before:w-2 before:bg-customYellow">
          <p className='font-vazir font-normal text-lg'>محدوده اجاره‌بها</p>
          <div className='flex gap-3 mt-4'>
            <div>
              <label className='mb-1 block'>نرخ هر شب از</label>
              <div className='relative'>
                <input type="text" className='pl-4 border-1 border-solid border-gray-300 rounded-lg' />
                <span className='left-3 top-2 absolute'>تومان</span>
              </div>
            </div>
            <div>
              <label className='mb-1 block'>تا</label>
              <div className='relative'>
                <input type="text" className='pl-4 border-1 border-solid border-gray-300 rounded-lg' />
                <span className='left-3 top-2 absolute'>تومان</span>
              </div>
            </div>
          </div>

          <div className='mt-4 flex items-center justify-between'>
            <Button className='flex items-center gap-2 border-dashed' variant={'white'}>
              <FaRegTrashCan />
              پاک کردن
            </Button> 
            <Button className='flex items-center gap-2' variant={'main'}>
              <CiSearch />
              اعمال
            </Button>
          </div>
        </div>
      </Filter>
      <Filter title='نوع اقامتگاه' icon={<TbHomeQuestion />} >
      <div className="p-3 py-5 before:block before:absolute before:content-[''] before:rounded-l-lg before:top-4 before:bottom-0 before:h-8 before:right-0 before:w-2 before:bg-customYellow">
          <p className='font-vazir font-normal text-lg'>نوع اقامتگاه</p>
        <div className='grid mt-4 gap-3 grid-cols-[auto,auto]'>
          <div className='flex justify-between px-3 border-gray-200 pb-2 border-b border-solid'>
            <p>ویلایی</p>
            <input className='rounded-md border-gray-300' type="checkbox" id="" />
          </div>
          <div className='flex justify-between px-3 border-gray-200 pb-2 border-b border-solid'>
            <p>آپارتمان</p>
            <input className='rounded-md border-gray-300' type="checkbox" id="" />
          </div>
          <div className='flex justify-between px-3 border-gray-200 pb-2 border-b border-solid'>
            <p>ویلایی</p>
            <input className='rounded-md border-gray-300' type="checkbox" id="" />
          </div>
          <div className='flex justify-between px-3 border-gray-200 pb-2 border-b border-solid'>
            <p>آپارتمان</p>
            <input className='rounded-md border-gray-300' type="checkbox" id="" />
          </div>
          <div className='flex justify-between px-3 pb-2'>
            <p>ویلایی</p>
            <input className='rounded-md border-gray-300' type="checkbox" id="" />
          </div>
          <div className='flex justify-between px-3 pb-2'>
            <p>آپارتمان</p>
            <input className='rounded-md border-gray-300' type="checkbox" id="" />
          </div>
        </div>
        <div className='mt-4 flex items-center justify-between'>
            <Button className='flex items-center gap-2 border-dashed' variant={'white'}>
              <FaRegTrashCan />
              پاک کردن
            </Button> 
            <Button className='flex items-center gap-2' variant={'main'}>
              <CiSearch />
              اعمال
            </Button>
          </div>
        </div>
      </Filter>
      <Filter title='امکانات اقامتگاه' icon={<TbHomeStar />} >
      <div className="p-3 py-5 before:block before:absolute before:content-[''] before:rounded-l-lg before:top-4 before:bottom-0 before:h-8 before:right-0 before:w-2 before:bg-customYellow">
          <p className='font-vazir font-normal text-lg'>امکانات اقامتگاه</p>
        <div className='grid mt-4 gap-3 grid-cols-[auto,auto]'>
          <div className='flex justify-between px-3 border-gray-200 pb-2 border-b border-solid'>
            <p>استخر</p>
            <input className='rounded-md border-gray-300' type="checkbox" id="" />
          </div>
          <div className='flex justify-between px-3 border-gray-200 pb-2 border-b border-solid'>
            <p>نگهبان</p>
            <input className='rounded-md border-gray-300' type="checkbox" id="" />
          </div>
          <div className='flex justify-between px-3 border-gray-200 pb-2 border-b border-solid'>
            <p>میز بیلیارد</p>
            <input className='rounded-md border-gray-300' type="checkbox" id="" />
          </div>
          <div className='flex justify-between px-3 border-gray-200 pb-2 border-b border-solid'>
            <p>پارکینگ</p>
            <input className='rounded-md border-gray-300' type="checkbox" id="" />
          </div>
          <div className='flex justify-between px-3 pb-2'>
            <p>یخچال و گاز</p>
            <input className='rounded-md border-gray-300' type="checkbox" id="" />
          </div>
          <div className='flex justify-between px-3 pb-2'>
            <p>wifi</p>
            <input className='rounded-md border-gray-300' type="checkbox" id="" />
          </div>
        </div>
        <div className='mt-4 flex items-center justify-between'>
            <Button className='flex items-center gap-2 border-dashed' variant={'white'}>
              <FaRegTrashCan />
              پاک کردن
            </Button> 
            <Button className='flex items-center gap-2' variant={'main'}>
              <CiSearch />
              اعمال
            </Button>
          </div>
        </div>
        </Filter>
      <Filter title='منطقه اقامتگاه' icon={<FaMapLocationDot />} >
      <div className="p-3 py-5 before:block before:absolute before:content-[''] before:rounded-l-lg before:top-4 before:bottom-0 before:h-8 before:right-0 before:w-2 before:bg-customYellow">
          <p className='font-vazir font-normal text-lg'>منطقه اقامتگاه</p>
        <div className='grid mt-4 gap-3 grid-cols-[auto,auto]'>
          <div className='flex justify-between px-3 border-gray-200 pb-2 border-b border-solid'>
            <p>جنگلی</p>
            <input className='rounded-md border-gray-300' type="checkbox" id="" />
          </div>
          <div className='flex justify-between px-3 border-gray-200 pb-2 border-b border-solid'>
            <p>بیابانی</p>
            <input className='rounded-md border-gray-300' type="checkbox" id="" />
          </div>
          <div className='flex justify-between px-3 border-gray-200 pb-2 border-b border-solid'>
            <p>ساحلی</p>
            <input className='rounded-md border-gray-300' type="checkbox" id="" />
          </div>
          <div className='flex justify-between px-3 border-gray-200 pb-2 border-b border-solid'>
            <p>ییلاقی</p>
            <input className='rounded-md border-gray-300' type="checkbox" id="" />
          </div>
          <div className='flex justify-between px-3 pb-2'>
            <p>شهری</p>
            <input className='rounded-md border-gray-300' type="checkbox" id="" />
          </div> 
        </div>
        <div className='mt-4 flex items-center justify-between'>
            <Button className='flex items-center gap-2 border-dashed' variant={'white'}>
              <FaRegTrashCan />
              پاک کردن
            </Button> 
            <Button className='flex items-center gap-2' variant={'main'}>
              <CiSearch />
              اعمال
            </Button>
          </div>
        </div> 
      </Filter>
    </div>
  )
} 
  
export default Filters


//[&>*]:flex [&>*]:bg-white  [&>*]:gap-2 bg-[#f3f3f3]