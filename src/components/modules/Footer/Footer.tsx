import React from 'react';
import AccessLinks from './components/AccessLinks';
import MarketLinks from './components/MarketLinks';
import Link from 'next/link';
import { LiaInstagram, LiaTelegram } from 'react-icons/lia';
import { PiTelegramLogoBold } from 'react-icons/pi';
import { FaInstagram } from "react-icons/fa";
import TrustUs from './components/TrustUs';
const Footer = () => {
    return (
        <div className='bg-[#f1f1f1] p-4 rounded-2xl'>
            <div className='Container mx-auto'>
                <div className='flex'>
                    <div className='flex flex-col'>
                        <div className='flex'>
                            <div className='w-1/3 bg-pink-500'>
                                <p className='text-center mb-3'>
                                    لینک های دسترسی
                                </p>
                                <div className='flex items-center justify-around'>
                                    <div className='flex flex-col space-y-2'>
                                        <AccessLinks
                                            text='چگونه مهمان شویم'
                                            href='/'
                                        />
                                        <AccessLinks
                                            text='چگونه مهمان شویم'
                                            href='/'
                                        />
                                        <AccessLinks
                                            text='چگونه مهمان شویم'
                                            href='/'
                                        />
                                        <AccessLinks
                                            text='چگونه مهمان شویم'
                                            href='/'
                                        />
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <AccessLinks
                                            text='چگونه مهمان شویم'
                                            href='/'
                                        />
                                        <AccessLinks
                                            text='چگونه مهمان شویم'
                                            href='/'
                                        />
                                        <AccessLinks
                                            text='چگونه مهمان شویم'
                                            href='/'
                                        />
                                        <AccessLinks
                                            text='چگونه مهمان شویم'
                                            href='/'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='w-1/3 bg-blue-500'>
                                <p className='text-center mb-3'>
                                    نصب اپلیکیشن جاجیگا
                                </p>
                                <div className='flex items-center'>
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
                            <div className='w-1/3 bg-red-500'>
                                <p className='text-center mb-3'>
                                    با ما همراه شوید
                                </p>
                                <div className='flex flex-col space-y-1'>
                                    <Link
                                        href='/'
                                        className='instagramGradiant w-1/2 mx-auto rounded-lg text-white flex items-center justify-center px-2'
                                    >
                                        <p>700K</p>
                                        <FaInstagram className='text-3xl mr-4' />
                                    </Link>
                                    <Link
                                        href='/'
                                        className='telegramGradiant  w-1/2 mx-auto rounded-lg text-white flex items-center justify-center px-2'
                                    >
                                        <p>20K</p>
                                        <LiaTelegram className='text-3xl mr-4' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 mt-4 bg-green-500'>
                            <p>اجاره ویلا شمال</p>
                            <p>اجاره ویلا شمال</p>
                            <p>اجاره ویلا شمال</p>
                            <p>اجاره ویلا شمال</p>
                            <p>اجاره ویلا شمال</p>
                            <p>اجاره ویلا شمال</p>
                            <p>اجاره ویلا شمال</p>
                            <p>اجاره ویلا شمال</p>
                            <p>اجاره ویلا شمال</p>
                            <p>اجاره ویلا شمال</p>
                            <p>اجاره ویلا شمال</p>
                            <p>اجاره ویلا شمال</p>
                            <p>اجاره ویلا شمال</p>
                            <p>اجاره ویلا شمال</p>
                            <p>اجاره ویلا شمال</p>
                            <p>اجاره ویلا شمال</p>
                            <p>اجاره ویلا شمال</p>
                            <p>اجاره ویلا شمال</p>
                            <p>اجاره ویلا شمال</p>
                            <p>اجاره ویلا شمال</p>
                        </div>
                    </div>
                    <div className='bg-yellow-500'>
                        <p>با خیال راحت به جاجیگا اعتماد کنید</p>
                        <div className='grid grid-cols-2 gap-4'>
                            <TrustUs />
                            <TrustUs />
                            <TrustUs />
                            <TrustUs />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
