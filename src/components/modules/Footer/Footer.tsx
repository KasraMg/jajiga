import AccessLinks from './components/AccessLinks';
import MarketLinks from './components/MarketLinks';
import Link from 'next/link';
import { LiaInstagram, LiaTelegram } from 'react-icons/lia';
import { PiTelegramLogoBold } from 'react-icons/pi';
import { FaInstagram } from 'react-icons/fa';
import TrustUs from './components/TrustUs';
import CitiesList from './components/CitiesList';
const Footer = () => {
    return (
        <div className='bg-[#f1f1f1] p-4 rounded-2xl'>
            <div className='Container mx-auto'>
                <div className='flex flex-col md:flex-row'>
                    <div className='flex flex-col'>
                        <div className='flex flex-col sm:flex-row'>
                            <div className='sm:w-1/2 md:w-1/3'>
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
                            <div className='sm:w-1/2 md:w-1/3 px-6 lg:px-0'>
                                <p className='text-center mb-3'>
                                    نصب اپلیکیشن جاجیگا
                                </p>
                                <div className='grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-2 lg:grid-cols-2'>
                                    <MarketLinks src='/images/markets/Bazzar.png' />
                                    <MarketLinks src='/images/markets/Myket.png' />
                                    <MarketLinks src='/images/markets/PlayStore.png' />
                                    <MarketLinks src='/images/markets/WebApp.png' />
                                </div>
                            </div>
                            <div className='md:w-1/3 hidden md:block'>
                                <p className='text-center mb-3'>
                                    با ما همراه شوید
                                </p>
                                <Link
                                    href='/'
                                    className='instagramGradiant mx-auto rounded-lg text-white flex items-center justify-center w-1/2 py-2 min-w-[150px]'
                                >
                                    <p>700K</p>
                                    <FaInstagram className='text-3xl mr-4' />
                                </Link>
                                <Link
                                    href='/'
                                    className='telegramGradiant mx-auto rounded-lg text-white flex items-center justify-center w-1/2 py-2 min-w-[150px] mt-4'
                                >
                                    <p>20K</p>
                                    <LiaTelegram className='text-3xl mr-4' />
                                </Link>
                            </div>
                        </div>
                        <CitiesList />
                    </div>
                    <div className='flex flex-col sm:flex-row'>
                        <div className=''>
                            <p className='text-center mb-3'>
                                با خیال راحت به جاجیگا اعتماد کنید
                            </p>
                            <div className='grid grid-cols-4 md:grid-cols-2 gap-4'>
                                <TrustUs />
                                <TrustUs />
                                <TrustUs />
                                <TrustUs />
                            </div>
                        </div>
                        <div className='md:w-1/3 md:hidden'>
                            <p className='text-center mb-3'>با ما همراه شوید</p>
                            <Link
                                href='/'
                                className='instagramGradiant mx-auto rounded-lg text-white flex items-center justify-center w-1/2 py-2 min-w-[150px]'
                            >
                                <p>700K</p>
                                <FaInstagram className='text-3xl mr-4' />
                            </Link>
                            <Link
                                href='/'
                                className='telegramGradiant mx-auto rounded-lg text-white flex items-center justify-center w-1/2 py-2 min-w-[150px] mt-4'
                            >
                                <p>20K</p>
                                <LiaTelegram className='text-3xl mr-4' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
