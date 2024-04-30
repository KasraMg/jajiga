"use client"
import React, { useState } from 'react'
import { MdOutlinePeople } from "react-icons/md";
import { TbHomeQuestion, TbHomeStar, TbMoneybag } from "react-icons/tb";
import { FaMapLocationDot } from "react-icons/fa6";
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

    <div className='flex bg-[#f3f3f3] py-2 gap-2 px-8' style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
      <Filter title='تعداد نفرات ' icon={<MdOutlinePeople />}>
        <div className='p-3'>
          <div className='flex justify-between items-center text-sm '>
            <p>تعداد نفرات</p>
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
            <Button className='flex items-center gap-2' variant={'main'}>
              <CiSearch />
             اعمال
              </Button>
              <Button className='flex items-center gap-2' variant={'white'}>
              <CiSearch /> 
              پاک کردن
             </Button>
          </div>
        </div>
      </Filter>
      <Filter title='محدوده اجاره بها' icon={<TbMoneybag />} />
      <Filter title='نوع اقامتگاه' icon={<TbHomeQuestion />} />
      <Filter title='امکانات اقامتگاه' icon={<TbHomeStar />} />
      <Filter title='منطقه اقامتگاه' icon={<FaMapLocationDot />} />
    </div>
  )
}

export default Filters


//[&>*]:flex [&>*]:bg-white  [&>*]:gap-2 bg-[#f3f3f3]