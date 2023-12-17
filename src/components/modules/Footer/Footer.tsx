import React from 'react';
import AccessLinks from './components/AccessLinks';
import MarketLinks from './components/MarketLinks';

const Footer = () => {
    return (
        <div className='bg-[#f1f1f1]'>
            <div className='grid grid-cols-4 gap-4 container mx-auto'>
                <div>
                    <p className='text-center mb-3'>لینک های دسترسی</p>
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col space-y-2'>
                            <AccessLinks text='چگونه مهمان شویم' href='/' />
                            <AccessLinks text='چگونه مهمان شویم' href='/' />
                            <AccessLinks text='چگونه مهمان شویم' href='/' />
                            <AccessLinks text='چگونه مهمان شویم' href='/' />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <AccessLinks text='چگونه مهمان شویم' href='/' />
                            <AccessLinks text='چگونه مهمان شویم' href='/' />
                            <AccessLinks text='چگونه مهمان شویم' href='/' />
                            <AccessLinks text='چگونه مهمان شویم' href='/' />
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-center mb-3'>نصب اپلیکیشن جاجیگا</p>
                    <div className='flex items-center space-x-2'>
                        <div className='flex items-center flex-col space-y-1 ml-2'>
                            <MarketLinks src='/images/markets/Bazzar.png' />
                            <MarketLinks src='/images/markets/Myket.png' />
                        </div>
                        <div className='flex flex-col items-center space-y-1'>
                            <MarketLinks src='/images/markets/PlayStore.png' />
                            <MarketLinks src='/images/markets/WebApp.png' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
