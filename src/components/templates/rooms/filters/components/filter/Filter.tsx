
import React, { FC, useRef } from 'react'
interface FilterProps {
  // show: boolean,
  // hideHandler: () => void,
  title: string,
  icon: any,
  children?: React.ReactElement
}

const Filter: FC<FilterProps> = ({
  // show,
  // hideHandler,
  title,
  icon,
  children
}) => {

  const radio = useRef<any>()
  return (
    <div className='relative'>
      <div className='flex relative bg-white p-2 rounded-full text-sm items-center gap-1'>
        {icon}
        <p className='font-vazir font-light  text-sm '>{title}</p>
        <input ref={radio} name={`radioBox`} id='filter-input' className='absolute peer left-0 top-0 h-full w-full opacity-0 cursor-pointer' type="radio" />
      <section className='bg-white peer-checked:!block hidden transition-transform absolute top-10 right-5 shadow-sm rounded-lg min-w-[380px]'>
      <div onClick={()=>radio.current.checked = false} className='fixed top-[100px] left-0 w-full h-full'></div>
      {children && children}
      </section>
      </div>
    </div>
  )
}

export default Filter
