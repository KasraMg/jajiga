

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
        <div className={`${className} px-4 py-3 bg-[#00000099] rounded-lg flex justify-between fixed bottom-2 mr-5 min-w-[468px]`}>
            <Button className={`${disablelPrevButton && 'opacity-40 cursor-not-allowed  hover:!opacity-30'}  bg-[#f5f5f5] text-black  transition-colors hover:opacity-75`}> <Link className={`${disablelPrevButton  && 'pointer-events-none '}  py-[3px] px-8 `} href={`/${prevLink}`}> قبلی</Link> </Button>
            <Button variant="yellow" className={`${disabelNextButton && 'opacity-40 cursor-not-allowed hover:!opacity-30'} rounded-md transition-colors hover:opacity-75`}>  <Link onClick={clickHandler} className={`${disabelNextButton && 'pointer-events-none '}  py-[3px] px-8 `} href={`/${nextLink}`}>بعدی</Link></Button>
        </div>
    )
}


export default ContentNavigator
