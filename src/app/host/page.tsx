import Breadcrumb from '@/src/components/modules/breadcrumb/Breadcrumb';
import Navbar from '@/src/components/modules/navbar/Navbar';
import React from 'react';
import HostCart from '@/src/components/modules/host/HostCart';
import HostCartData from '@/src/constants/HostCartData';
const page = () => {
    return (
        <>
            <Navbar />
            <Breadcrumb
                route='چگونه میزبان شوم'
                description='نکات زیر را مطالعه کنید تا با اطلاعات کافی در جاجیگا میزبان شوید و با خیال آسوده کسب درآمد کنید'
            />

            {HostCartData.map((cartData) => (
                <div className='py-4 space-y-10'>
                    <div className='flex flex-col text-center items-center justify-center space-y-2 rounded-t-xl'>
                        <h2 className='text-lg font-medium'>
                            {cartData.mainTitle}
                        </h2>
                        <div className='bg-yellow-300 h-1 rounded-lg w-36'></div>
                        <p className='text-sm text-textGray font-vazir-light'>
                            {cartData.secondaryTitle}
                        </p>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-center Container md:gap-x-4 gap-y-10 px-4 py-10'>
                        {cartData.carts.map((cart) => (
                            <HostCart {...cart} />
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default page;
