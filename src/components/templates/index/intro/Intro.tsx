
import { CiSearch } from "react-icons/ci";
import { useContext, useRef } from 'react'
import ScrollObserver, { ScrollContext } from '@/src/utils/scrollObserver';
const Intro = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const { scrollY } = useContext(ScrollContext)

  let progress = 0

  const { current: elContainer } = refContainer
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }

  return (

    <div style={{ transform: `translateY(-${progress * 20}vh)`, backgroundPositionX: '-204px' }} ref={refContainer} dir='ltr' className={` ${window.pageYOffset > 800 && 'invisible'} h-[90vh] bg-fixed w-full sticky top-0 left-0  bg-no-repeat z-0 bg-[url(/images/home-header-bg-3@1920.jpg)]`}>
      <div className='z-30 relative text-center text-white pr-4 pt-64'>
        <p className='text-[1.7rem]'>اجاره ویلا در شمال و سراسر ایران زیبا</p>
        <div className='relative mt-5 w-max mx-auto'>
          <i className=' absolute cursor-pointer hover:bg-yellow-400 transition-colors top-[4.5px] left-1 bg-yellow-300 py-2 rounded-full px-2 text-[1.1rem] text-black'>
            <CiSearch />
          </i>
          <input dir='rtl' type="text" className='rounded-full text-black placeholder:text-gray-300 w-[450px] focus:!border-[#6B7280]' style={{ boxShadow: 'none' }} placeholder='میخوای کجا بری؟' />
        </div>
      </div>

      <div className=' absolute bottom-0 text-white w-full text-center mb-8 mx-auto'>
        <p style={{ fontVariationSettings: "wght 600", textShadow: 'rgb(0, 0, 0) 0px 1px 12px' }} className='text-[2rem] pb-1'>جاجیــــــگا</p>
        <span dir='rtl'>مثل خونه خودته :)</span>
      </div>
    </div>


  )
}


export default Intro
