import React from 'react'
import { FC } from 'react'
import Button from '../button'
import { BiSupport } from "react-icons/bi"; 
import { FaRegHeart } from "react-icons/fa";
import { TbHomePlus, TbHome, TbInfoCircle, TbMessage2Question } from "react-icons/tb";
import { IoShieldCheckmarkOutline } from "react-icons/io5"
import { GrNotes } from "react-icons/gr";
import { PiGithubLogo, PiInstagramLogo, PiTelegramLogoLight } from "react-icons/pi";
import { GoHome } from 'react-icons/go';
interface LayoutProps {
    show: boolean,
    hideHandler: () => void
}

const Menu: FC<LayoutProps> = ({
    show,
    hideHandler
}) => {
    return (
        <>

            {show && (
                <div onClick={hideHandler} className='fixed z-[999] top-0 w-full h-screen left-0 bg-[#00000094]'></div>
            )}
            <section dir='ltr' className={`${!show ? 'translate-x-full ' : null} rounded-l-2xl py-7 right-0 fixed z-[9999] top-0 border-r  h-screen overflow-y-auto transition-transform  bg-white w-72 dark:bg-gray-800`}>
                <div className='flex px-6 justify-end gap-5 items-center'>
                    <Button variant={'outlineMain'} size={'sm'}>
                        ورود / ثبت نام
                    </Button>
                    <svg width={56} className="sc-679cb2a8-0 iBzAsR sc-2fa8747d-1 eAKzKD" fill="#d6d6d6" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="clip-path"><polygon points="0 0 32 0 32 1.23 32 32 0 32 0 0" style={{ fill: "none" }}></polygon></clipPath></defs><g style={{ clipPath: "url(&quot;#clip-path&quot)" }}><path d="M16,32A16,16,0,1,1,32,16,16,16,0,0,1,16,32ZM16,1.52A14.48,14.48,0,0,0,1.52,16a14.82,14.82,0,0,0,.28,2.82,14.48,14.48,0,0,0,28.4,0A15,15,0,0,0,30.48,16,14.5,14.5,0,0,0,16,1.52Z"></path><path d="M20.5,13.5A4.5,4.5,0,1,1,16,9,4.49,4.49,0,0,1,20.5,13.5ZM19,18.71a6,6,0,1,0-5.94,0A9.76,9.76,0,0,0,6.25,28a.75.75,0,0,0,1.5,0,8.25,8.25,0,0,1,15.87-3.16h0A8.18,8.18,0,0,1,24.25,28a.75.75,0,0,0,1.5,0A9.76,9.76,0,0,0,19,18.71Z" style={{ fillRule: "evenodd" }}></path></g></svg>
                </div>
                <hr className='mt-5' />
                
                <div className='mt-4 mr-4'>
                    <ul>
                        <li className='flex gap-2 pl-6 hover:bg-[#f5f5f5]  pr-2 rounded-r-3xl py-2 pb-3 bg-[#f5f5f5] items-center text-[#666666] font-vazir font-light  flex-row-reverse'>
                            <GoHome className='text-xl' />
                            <span className='mt-1 text-sm'>صفحه اصلی</span>
                        </li>
                        <li className='flex gap-2 pl-6 hover:bg-[#f5f5f5]  pr-2 rounded-r-3xl py-2 pb-3 items-center text-[#666666] font-vazir font-light  flex-row-reverse'>
                            <FaRegHeart className='text-xl' />
                            <span className='mt-1 text-sm'>علاقه مندی ها</span>
                        </li>
                        <li className='flex gap-2 pl-6 hover:bg-[#f5f5f5]  pr-2 rounded-r-3xl py-2 pb-3 items-center text-[#666666] font-vazir font-light  flex-row-reverse'>
                            <TbHomePlus className='text-xl' />
                            <span className='mt-1 text-sm'> میزبان شو</span>
                        </li>
                        <li className='flex gap-2 pl-6 hover:bg-[#f5f5f5]  pr-2 rounded-r-3xl py-2 pb-3 items-center text-[#666666] font-vazir font-light  flex-row-reverse'>
                            <BiSupport className='text-xl' />
                             <span className='mt-1 text-sm'>پشتیبانی</span>
                        </li>
                        <li className='flex gap-2 pl-6 hover:bg-[#f5f5f5]  pr-2 rounded-r-3xl py-2 pb-3 items-center text-[#666666] font-vazir font-light  flex-row-reverse'>
                            <TbMessage2Question className='text-xl' />
                            <span className='mt-1 text-sm'>سوالات متداول</span>
                        </li> 
                        <li className='flex gap-2 pl-6 hover:bg-[#f5f5f5]  pr-2 rounded-r-3xl py-2 pb-3 items-center text-[#666666] font-vazir font-light  flex-row-reverse'>
                            <IoShieldCheckmarkOutline className='text-xl' />
                            <span className='mt-1 text-sm'>ضمانت تحویل</span>
                        </li>
                        <li className='flex gap-2 pl-6 hover:bg-[#f5f5f5]  pr-2 rounded-r-3xl py-2 pb-3 items-center text-[#666666] font-vazir font-light  flex-row-reverse'>
                            <GrNotes className='text-xl' />
                            <span className='mt-1 text-sm'>قوانین وبسایت</span>
                        </li>
                        <li className='flex gap-2 pl-6 hover:bg-[#f5f5f5]  pr-2 rounded-r-3xl py-2 pb-3 items-center text-[#666666] font-vazir font-light  flex-row-reverse'>
                            <TbInfoCircle className='text-xl' />
                            <span className='mt-1 text-sm'>درباره ما</span>
                        </li>

                    </ul>
                </div>

                <div className='absolute flex-row-reverse bottom-0 flex justify-around px-2 w-full py-3 text-xl left-0 bg-[#f5f5f5] rounded-3xl'>
                    <a href="https://t.me/shahiinnnnn">
                        <PiTelegramLogoLight/>
                    </a>
                    <a href="https://github.com/KasraMg">
                        <PiInstagramLogo />
                    </a>
                    <a href="https://github.com/KasraMg">
                        <PiGithubLogo />
                    </a>
                </div>

            </section>




        </>
    )
}

export default Menu
