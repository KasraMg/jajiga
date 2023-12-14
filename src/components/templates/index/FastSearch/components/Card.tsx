import React from 'react'
import { IoShareSocialOutline } from "react-icons/io5";
const Card = () => {
    return (
        <div className='relative cursor-pointer h-[274px] rounded-xl text-white bg-[url(https://www.jajiga.com/static/img/home/special-filters/cottageForest.jpg?v=3)]'>
            <div style={{background:'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)'}} className='text-center w-full absolute bottom-0 pb-4 rounded-xl'>
                <p className='mb-2'>کلبه چوبی</p>
                <div className='flex gap-2 items-center justify-center'>
                    <span className='text-[12px] font-vazir-light'>558 اقامتگاه</span>
                    <IoShareSocialOutline className='text-xl' />
                </div>
            </div>
        </div>
    )
}    

export default Card
