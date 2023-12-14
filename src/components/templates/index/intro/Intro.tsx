import Navbar from '@/src/components/modules/navbar/Navbar'
import React from 'react'
import { CiSearch } from "react-icons/ci";
const Intro = () => {
  return (
    <div style={{ backgroundPositionX: '-204px' }} className='h-[89vh] w-full bg-no-repeat bg-fixed relative z-[10] bg-[url(https://www.jajiga.com/static/img/home/home-header-bg-3@1920.jpg?v=1)]'>
      <Navbar />
      <div className='z-30 relative text-center text-white pr-4 pt-48'>
        <p className='text-[1.7rem]'>اجاره ویلا در شمال و سراسر ایران زیبا</p>
        <div className='relative mt-5 w-max mx-auto'>
          <i className=' absolute cursor-pointer hover:bg-yellow-400 transition-colors top-[4.5px] left-1 bg-yellow-300 py-2 rounded-full px-2 text-[1.1rem] text-black'>
            <CiSearch />
          </i>
          <input dir='rtl' type="text" className='rounded-full placeholder:text-gray-300 w-[450px]' placeholder='میخوای کجا بری؟' />
        </div>

 
      </div>
      <div className=' absolute bottom-0 text-white w-full text-center mb-8 mx-auto'>
          <p style={{fontVariationSettings: "wght 600",textShadow: 'rgb(0, 0, 0) 0px 1px 12px'}} className='text-[2rem] pb-1'>جاجیــــــگا</p>
          <span dir='rtl'>مثل خونه خودته :)</span>
        </div>
    </div>
  )
} 


export default Intro
