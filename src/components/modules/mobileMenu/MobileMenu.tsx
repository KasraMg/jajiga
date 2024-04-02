"use client"
import { BiSupport } from 'react-icons/bi';
import { FaRegHeart } from 'react-icons/fa';
import { TbHome, TbHomePlus } from "react-icons/tb";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const MobileMenu = () => {
    const route = usePathname();
    const [scroll, setScroll] = useState(false);

    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (currentScrollPos > prevScrollPos) {
                setScroll(true);
            } else {
                setScroll(false);
            }
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [prevScrollPos]);

    return (
        <div
            style={{
                transition: "all 0.35s ease-in 0s"
            }}
            className={`${scroll ? '-bottom-[60px]' : 'bottom-0'} border-t border-solid border-gray-200 transition-transform py-2 grid grid-cols-[auto,auto,auto,auto] md:!hidden fixed  bg-white left-0 w-full z-[400]`}
        >
            <Link href={'/support'} className={`text-center relative ${route == '/support' && 'text-red-600 before:block before:absolute before:w-full before:right-0 before:h-2 before:rounded-xl before:-bottom-3 before:bg-red-600'}`}>
                <BiSupport className='text-2xl mb-1 mx-auto' />
                <p className='text-xs'>پشتیبانی</p>
            </Link>
            <Link href={'/host'} className={`text-center relative ${route == '/host' && 'text-red-600 before:block before:absolute before:w-full before:right-0 before:h-2 before:rounded-xl before:-bottom-3 before:bg-red-600'}`}>
                <TbHomePlus className='text-2xl mb-1 mx-auto' />
                <p className='text-xs'>میزبان شوید</p>
            </Link>
            <Link href={'/wishes'} className={`text-center relative ${route == '/wishes' && 'text-red-600 before:block before:absolute before:w-full before:right-0 before:h-2 before:rounded-xl before:-bottom-3 before:bg-red-600'}`}>
                <FaRegHeart className='text-2xl mb-1 mx-auto' />
                <p className='text-xs'>علاقه‌مندی‌ها</p>
            </Link>
            <Link href={'/'} className={`text-center relative ${route.length == 1 && 'text-red-600 before:block before:absolute before:w-full before:right-0 before:h-2 before:rounded-xl before:-bottom-3 before:bg-red-600'}`}>
                <TbHome className='text-2xl mb-1 mx-auto' />
                <p className='text-xs'>صفحه اصلی</p>
            </Link>
        </div>
    )
}

export default MobileMenu
