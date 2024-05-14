 

 
 
import Breadcrumb from '@/src/components/modules/breadcrumb/Breadcrumb'; 
import React from 'react';
import HostCart from '@/src/components/modules/hostCart/HostCart'; 
import Button from '@/src/components/modules/button';
import useHostCartData from '@/src/hooks/useHostCartData';
import Container from '@/src/components/modules/container/Container';

const Host = () => {
    const HostData = useHostCartData();
    return (
        <Container> 
            <Breadcrumb
                title={'چگونه میزبان شوم؟'}
                description='نکات زیر را مطالعه کنید تا با اطلاعات کافی در جاجیگا میزبان شوید و با خیال آسوده کسب درآمد کنید'
                
            />

            {HostData.map((cartData) => (
                <div
                    key={cartData.id}
                    className='py-4 space-y-10 rounded-t-xl'
                    style={{ background: cartData.bgColor }}
                >
                    <div className='flex flex-col text-center items-center justify-center space-y-2 rounded-t-xl'>
                        <h2 className='text-lg font-medium mt-2'>
                            {cartData.mainTitle}
                        </h2>
                        <div className='bg-yellow-300 h-1 rounded-lg w-36'></div>
                        <p className='text-sm text-textGray font-vazir font-light  px-3 sm:!px-0 leading-6'>
                            {cartData.secondaryTitle}
                        </p>
                    </div>
                    <div className='grid lg:!grid-cols-[auto,auto,auto]   grid-cols-[auto] justify-center md:flex-row items-start Container md:gap-x-4 gap-y-10 px-4 pt-0 py-10'>
                        {cartData.carts.map((cart) => (
                            <HostCart
                                {...cart}
                                borderColor={cartData.bgColor}
                            />
                        ))}
                    </div>
                </div>
            ))}
            <div className=' mx-auto  w-[90%]  sm:!w-80 max-w-[320px] sticky bottom-2 bg-[#00000099] h-16 rounded-lg flex items-center justify-center px-4 my-4'>
                <Button
                    className='w-full p-2 rounded-full text-center text-black flex items-center justify-center hover:bg-[#d2b43d] duration-300'
                    variant='yellow'
                >
                    ثبت اقامتگاه
                </Button>
            </div> 
        </Container>
    );
};

export default Host; 
