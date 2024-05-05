import Link from 'next/link'
import React, { FC } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
interface BreadcrumbProps {
    state: string,
    city: string,
    className?:string
}

const Breadcrumb: FC<BreadcrumbProps> = ({ state, city, className }) => {
    return ( 
            <div className={`${className && className} flex items-center gap-1`}>
                <Link href={'/'} className='font-vazir font-light  z-50 relative text-black'>جاجیگا</Link>
                <FaAngleLeft />
                <Link href={'/'} className='font-vazir font-light  z-50 relative text-black'>{state}</Link>
                <FaAngleLeft />
                <Link href={'/'} className='font-vazir font-light  z-50 relative text-black'>{city}</Link>
            </div> 
    )
}

export default Breadcrumb
