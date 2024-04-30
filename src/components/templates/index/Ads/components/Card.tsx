import React, { FC } from 'react'

interface CardProps{
    title:string,
    text:string,
    svg:any
}
const Card: FC<CardProps> = (props) => {
  return (
    <section className='border border-solid flex gap-3 items-center border-[#00000026] rounded-xl w-full px-5 py-3'>
      {props.svg}
      <div>
        <p>{props.title}</p>
        <span className='font-vazir font-light  text-xs'>{props.text}</span>
      </div>
    </section>
  )
}

export default Card
