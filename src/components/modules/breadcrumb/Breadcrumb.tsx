import React, { FC } from 'react'
import { FaAngleLeft } from "react-icons/fa6";

interface BreadcrumbProps {
    className?: string,
    route: string,
    description?: string
}

const Breadcrumb: FC<BreadcrumbProps> = ({
    className,
    route,
    description
}) => {
    return (
        <section id='breadcrumb' className={`${className} relative mt-[58px] bg-[#f0c807] pb-9 pt-7 bg-cover bg-center  `}>
            <div className='top-0 opacity-50 absolute w-full h-full' style={{ background: 'url(https://www.jajiga.com/static/img/backdrop-pattern.svg) 0% 0% / 200px repeat rgb(240, 200, 7)' }}></div>
            <div className='Container'>
                <div className='flex items-center gap-1'>
                    <p className='font-vazir-light'>جاجیگا</p>
                    <FaAngleLeft />
                    <span className='text-xl'>{route}</span>
                </div>
                <p>{description}</p>
            </div>

        </section>
    )
}

export default Breadcrumb 