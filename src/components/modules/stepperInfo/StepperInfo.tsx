import React, { FC } from 'react'
interface StepperInfoProps {
  title: string,
  text: string
}
const StepperInfo: FC<StepperInfoProps> = ({ title, text }) => {
  return (
    <div style={{boxShadow:'grey 0px 1px 3px 0px' }} className='p-4 sticky top-[68px] rounded-xl h-max'>
      <p className='text-lg text-[#252a31] leading-7 text-right mb-3'>{title}</p>
      <span className='text-sm text-[#404040] leading-6 text-justify font-vazir-light'>{text}</span>
    </div>
  )
}

export default StepperInfo
