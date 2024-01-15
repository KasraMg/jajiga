import Link from 'next/link';
import React, { FC } from 'react';
import { FaAngleLeft } from 'react-icons/fa6';

interface BreadcrumbProps {
    className?: string;
    routes: string[];
    description?: string;
    variant?: string;
}

const Breadcrumb: FC<BreadcrumbProps> = ({
    className,
    routes,
    description,
    variant,
}) => {
    if (variant == 'full') {
        return (
            <section
                id='breadcrumb'
                className={`${className} relative mt-[58px] bg-[#f0c807] pb-9 pt-7 bg-cover bg-center  `}
            >
                <div
                    className='top-0 opacity-50 absolute w-full h-full '
                    style={{
                        background:
                            'url(https://www.jajiga.com/static/img/backdrop-pattern.svg) 0% 0% / 200px repeat rgb(240, 200, 7)',
                    }}
                ></div>
                <div className=' max-w-[1074px] mx-auto pr-4 xl:!px-0'>
                    <div className='flex items-center gap-1'>
                        <Link
                            href={'/'}
                            className='font-vazir-light text-black'
                        >
                            جاجیگا
                        </Link>
                        <FaAngleLeft />
                        {routes.map((route) => (
                            <span className='text-xl'>{route}</span>
                        ))}
                    </div>
                    <p className='pl-8 sm:!pl-0 mt-3 sm:!mt-0'>{description}</p>
                </div>
            </section>
        );
    }
    return (
        <div className='flex mb-4'>
            <span className='flex items-center text-[#505050] text-xs gap-[2px] mx-[2px]'>
                جاجیگا <FaAngleLeft />
            </span>
            {routes.map((route, index) => (
                <span className='flex items-center text-[#505050] text-xs mx-[2px] gap-[2px]' key={index} >
                    {route}
                    {index !== routes.length - 1 ? <FaAngleLeft /> : ''}
                </span>
            ))}
        </div>
    );
};

export default Breadcrumb;
