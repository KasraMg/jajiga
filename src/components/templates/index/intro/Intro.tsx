
import { CiSearch } from "react-icons/ci";
import { useContext, useRef } from 'react'
import { ScrollContext } from '@/src/utils/scrollObserver';
import { IoIosArrowDown } from "react-icons/io";

const Intro = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const { scrollY } = useContext(ScrollContext)

  let progress = 0

  const { current: elContainer } = refContainer
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }

  const scrollHandler = () => {
    document.documentElement.scrollTo({
      top:335,
      left:0,
      behavior:'smooth'
  })
  }
  return (

    <div style={{ transform: `translateY(-${progress * 20}vh)` }} ref={refContainer} dir='ltr' className={` ${window.pageYOffset > 800 && 'invisible'} h-[60vh] bg-cover lg:!h-[90vh] bg-fixed w-full sticky top-0 left-0  bg-no-repeat z-0 bg-[url(https://wallpaperaccess.com/full/1320095.jpg)]`}>
      <div className='z-30 relative text-center text-white lg:!pr-4 pt-36 lg:!pt-64'>
        <p className='lg:!text-[1.7rem] text-[1.125rem]'>اجاره ویلا در شمال و سراسر ایران زیبا</p>
        <div className='relative mt-5 w-max mx-auto'>
          <i className=' absolute cursor-pointer hover:bg-yellow-400 transition-colors top-[4.5px] left-1 bg-customYellow py-2 rounded-full px-2 text-[1.1rem] text-black'>
            <CiSearch />
          </i>
          <input dir='rtl' type="text" className='h-[44px] pl-10 pr-3 rounded-full text-black placeholder:text-gray-300 w-[290px] sm:!w-[400px] lg:!w-[450px] focus:!border-[#6B7280]' style={{ boxShadow: 'none' }} placeholder='میخوای کجا بری؟' />
        </div>
      </div>

      <div className=' lg:!mt-0 mt-8 lg:!absolute bottom-0 text-white w-full text-center mb-8 mx-auto'>
        <p style={{ fontVariationSettings: "wght 600", textShadow: 'rgb(0, 0, 0) 0px 1px 12px' }} className='lg:!text-[2rem] text-xl pb-1'>جاجیــــــگا</p>
        <span className="text-sm lg:!text-[16px]" dir='rtl'>مثل خونه خودته :)</span>
      </div>

      <div className="lg:!hidden block mx-auto w-max h-10" onClick={scrollHandler}>
        <IoIosArrowDown className='text-2xl text-white' style={{ animation: '2s ease 3s infinite normal none running arrowMove' }} />
      </div>
    </div>


  )
}


export default Intro
