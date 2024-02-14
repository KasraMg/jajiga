

import React, { FC } from 'react'
import Button from '../button'
import Link from 'next/link'

interface ContentNavigatorProps {
    disablelPrevButton: boolean,
    disabelNextButton: boolean,
    prevLink: string,
    nextLink: string,
    className?: string,
    clickHandler?:()=>void
}
const ContentNavigator: FC<ContentNavigatorProps> = ({ className,clickHandler, nextLink, prevLink, disabelNextButton, disablelPrevButton }) => {
    return (
        <section style={{transition: 'transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s'}} className='fixed bottom-2 mx-auto left-2 right-2 z-50 '>
        <div className={`${className} px-4 py-3 bg-[#00000099] rounded-lg flex justify-between mx-auto w-full sm:!w-[468px]`}>
            <Button className={`${disablelPrevButton && 'opacity-40 cursor-not-allowed  hover:!opacity-30'}  bg-[#f5f5f5] text-black  transition-colors hover:opacity-75`}> <Link className={`${disablelPrevButton  && 'pointer-events-none '}  py-[3px] px-8 `} href={`/${prevLink}`}> قبلی</Link> </Button>
            <Button variant="yellow" className={`${disabelNextButton && 'opacity-40 cursor-not-allowed hover:!opacity-30'} rounded-md transition-colors hover:opacity-75`}>  <Link onClick={clickHandler} className={`${disabelNextButton && 'pointer-events-none '}  py-[3px] px-8 `} href={`/${nextLink}`}>بعدی</Link></Button>
        </div>
        </section>
    )
}


export default ContentNavigator

 
 
