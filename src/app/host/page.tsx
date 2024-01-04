import Breadcrumb from '@/src/components/modules/breadcrumb/Breadcrumb';
import Navbar from '@/src/components/modules/navbar/Navbar';
import React from 'react';

const page = () => {
    return (
        <>
            <Navbar />
            <Breadcrumb
                route='چگونه میزبان شوم'
                description='نکات زیر را مطالعه کنید تا با اطلاعات کافی در جاجیگا میزبان شوید و با خیال آسوده کسب درآمد کنید'
            />
            <div className='py-4'>
                <div className='flex flex-col text-center items-center justify-center space-y-2'>
                    <p className='text-lg font-medium'>۱- ابتدا ثبت نام کنید</p>
                    <div className='bg-yellow-300 h-1 rounded-lg w-36'></div>
                    <p className='text-sm text-textGray font-vazir-light'>
                        ابتدا ثبت‌نام کنید تا برای جاجیگا قابل شناسایی شوید و
                        بتوانید تنظیمات شخصی خودتان را اعمال کنید
                    </p>
                </div>
            </div>
        </>
    );
};

export default page;
