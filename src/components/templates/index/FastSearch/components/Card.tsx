import React, { FC } from 'react' 
interface CardProps{
     
}
const Card: FC<CardProps> = () => {
    return (
        <div className='relative cursor-pointer text-white  '>
            <img className=' !h-[247px] sm:!h-[274px] w-full object-cover  rounded-xl' src="https://www.jajiga.com/static/img/home/special-filters/cottageForest.jpg?v=3" alt="" />
            <div style={{background:'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)'}} className='text-center w-full absolute bottom-0 pb-4 rounded-xl'>
                <p className='mb-2'>کلبه چوبی</p>
                <div className='flex gap-2 items-center justify-center'>
                    <span className='text-[12px] font-vazir font-light '>558 اقامتگاه</span>
                  
                </div>
            </div>
        </div>
    )
}    

export default Card
