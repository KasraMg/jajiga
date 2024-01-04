import Breadcrumb from '@/src/components/modules/breadcrumb/Breadcrumb';
import Navbar from '@/src/components/modules/navbar/Navbar';
import React from 'react';
import HostCart from '@/src/components/modules/host/HostCart';

const page = () => {
    return (
        <>
            <Navbar />
            <Breadcrumb
                route='چگونه میزبان شوم'
                description='نکات زیر را مطالعه کنید تا با اطلاعات کافی در جاجیگا میزبان شوید و با خیال آسوده کسب درآمد کنید'
            />
            <div className='py-4 space-y-10'>
                <div className='flex flex-col text-center items-center justify-center space-y-2'>
                    <h2 className='text-lg font-medium'>
                        ۱- ابتدا ثبت نام کنید
                    </h2>
                    <div className='bg-yellow-300 h-1 rounded-lg w-36'></div>
                    <p className='text-sm text-textGray font-vazir-light'>
                        ابتدا ثبت‌نام کنید تا برای جاجیگا قابل شناسایی شوید و
                        بتوانید تنظیمات شخصی خودتان را اعمال کنید
                    </p>
                </div>
                <div className='flex items-center justify-center Container gap-x-4'>
                    <HostCart />
                    <HostCart />
                    <HostCart />
                </div>
            </div>
        </>
    );
};

export default page;
