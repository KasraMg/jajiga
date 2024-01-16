import React, { FC } from 'react'

interface BoxProps {
    icon: React.ReactElement,
    title: string,
    text: string,
    className?:string,
}

const Box: FC<BoxProps> = ({ title, icon, text,className }) => {
    return (
        <div style={{ boxShadow: 'rgba(160, 160, 160, 0.7) 0px 3px 10px ' }} className={`${className} relative px-4 pb-8 rounded-xl flex flex-col bg-white border-t-2 botder-solid border-[#f0c807]`}>
            <div className='rounded-[50%] mx-auto w-[70px] h-[70px] flex justify-center items-center mt-[calc(-44px)]' style={{ transform: 'translateY(7px)', background: 'linear-gradient(0deg, rgb(255, 200, 4) 0%, rgb(255, 200, 4) 50%, transparent 50%, transparent 100%)'}}>
                <i className='m-auto justify-center flex items-center text-3xl rounded-[50%] w-16 h-16 border-4 border-solid border-white bg-[#ffc804] text-[#333333]'>{icon}</i>
            </div>
            <p className='mt-7 font-vazir-bold '>{title}</p>
            <p className='mt-5 text-sm text-gray font-vazir-light text-justify leading-6 '>{text}</p>
        </div>
    )
}

export default Box


 