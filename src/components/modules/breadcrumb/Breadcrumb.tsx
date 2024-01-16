import Link from 'next/link';
import React, { FC } from 'react';
import { FaAngleLeft } from 'react-icons/fa6';

interface BreadcrumbProps {
 
    className?: string,
    route?: string,
    description?: string,
    title?: string  
 
}

const Breadcrumb: FC<BreadcrumbProps> = ({
    className,
 
    route,
    description,
    title
}) => {
    return (
        <section id='breadcrumb' className={`${className} relative mt-[58px] bg-[#f0c807] pb-9 pt-7 bg-cover bg-center  `}>
            <div className='top-0   absolute w-full h-full breadcrumb_bg'></div>
            <div className=' max-w-[1074px] mx-auto pr-4 xl:!px-0'>
                {title ? (
                    <p className='z-50 relative text-2xl font-vazir-bold text-black'>{title}</p>
                ) : (

                    <div className='flex items-center gap-1'>
                        <Link href={'/'} className='font-vazir-light z-50 relative text-black'>جاجیگا</Link>
                        <FaAngleLeft />
                        <span className='text-xl font-vazir-bold text-black z-50'>{route}</span>
                    </div>
                )}

                <p className='pl-8 sm:!pl-0 mt-3  '>{description}</p>
            </div> 
            </section>
    );
};
 

export default Breadcrumb;
