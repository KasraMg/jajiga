import Link from 'next/link';
import React, { FC } from 'react';
import { FaAngleLeft } from 'react-icons/fa6';

interface BreadcrumbProps {

    className?: string,
    route?: string,
    routes?: string[];
    description?: string,
    title?: string,
    template?: boolean,
    children?: any

}

const Breadcrumb: FC<BreadcrumbProps> = ({
    className,
    route,
    routes,
    description,
    template,
    title,
    children
}) => {
    return (
        <section id='breadcrumb' className={`${className} relative mt-[58px] bg-[#f0c807] pb-9 pt-7 bg-cover bg-center`}>
            <div className='top-0   absolute w-full h-full breadcrumb_bg'></div>
            <div className=' max-w-[1074px] mx-auto pr-4 xl:!px-0'>
                {template ? children : (
                    <>
                        {title ? (
                            <p className='z-50 relative text-2xl font-vazir font-extrabold  text-black'>{title}</p>
                        ) : (

                            <div className='flex items-center gap-1'>
                                <Link href={'/'} className='font-vazir font-light  z-50 relative text-black'>جاجیگا</Link>
                                <FaAngleLeft />
                                {route && <span className='text-xl font-vazir font-extrabold  text-black z-50'>{route}</span>}
                                {routes && routes.map((route, index) => (
                                    <Link href={`/category/${route}`} className='flex z-50 items-center text-[#505050] text-xs mx-[2px] gap-[2px]' key={index} >
                                        {route}
                                        {index !== routes.length - 1 ? <FaAngleLeft /> : ''}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {description && (
                            <p className='pl-8 sm:!pl-0 mt-3 text-sm sm:!text-base '>{description}</p>
                        )}
                    </> 
                )}

            </div>
        </section>
    );
};


export default Breadcrumb;
