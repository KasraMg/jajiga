
import MarketLinks from './components/MarketLinks';
import Link from 'next/link';
import { LiaInstagram, LiaTelegram } from 'react-icons/lia';
import { FaInstagram } from 'react-icons/fa';
import CitiesList from './components/CitiesList';
const Footer = () => {
    return (
        <div className='bg-[#f1f1f1]  rounded-2xl pt-8 mt-10'>
            <div className='Container mx-auto px-5'>
                <div className='flex flex-col gap-8 md:flex-row justify-between'>
                    <div className='flex flex-col w-full mb-5 lg:mb-0'>
                        <div className='flex flex-col sm:flex-row gap-[2.5rem] xl:gap-[3.75rem]'>
                            <div className='md:!w-1/2 w-full lg:!w-[unset]'>
                                <p className='text-center mb-3'>
                                    لینک های دسترسی
                                </p>
                                <div className='flex items-center justify-around lg:w-max gap-8 w-full '>
                                    <div className='flex flex-col space-y-2'>
                                        <Link className='font-vazir-light text-sm font-bold text-blue-700 ' href={'/'}>
                                            چگونه مهمان شویم
                                        </Link>
                                        <Link className='font-vazir-light text-sm font-bold text-blue-700 ' href={'/'}>
                                            چگونه مهمان شویم
                                        </Link>
                                        <Link className='font-vazir-light text-sm font-bold text-blue-700 ' href={'/'}>
                                            چگونه مهمان شویم
                                        </Link>
                                        <Link className='font-vazir-light text-sm font-bold text-blue-700 ' href={'/'}>
                                            چگونه مهمان شویم
                                        </Link>
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <Link className='font-vazir-light text-sm font-bold text-blue-700 ' href={'/'}>
                                            چگونه مهمان شویم
                                        </Link>
                                        <Link className='font-vazir-light text-sm font-bold text-blue-700 ' href={'/'}>
                                            چگونه مهمان شویم
                                        </Link>
                                        <Link className='font-vazir-light text-sm font-bold text-blue-700 ' href={'/'}>
                                            چگونه مهمان شویم
                                        </Link>
                                        <Link className='font-vazir-light text-sm font-bold text-blue-700 ' href={'/'}>
                                            چگونه مهمان شویم
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className='md:px-6 lg:px-0 md:!w-[unset] sm:!w-1/2'>
                                <p className='md:!text-center text-right mb-3'>
                                    نصب اپلیکیشن جاجیگا
                                </p>
                                <div className='grid sm:!grid-cols-1 grid-cols-2 md:!grid-cols-2 gap-x-4 gap-y-2 mx-auto w-full   md:!w-[unset] '>
                                    <MarketLinks src='/images/markets/Bazzar.png' />
                                    <MarketLinks src='/images/markets/Myket.png' />
                                    <MarketLinks src='/images/markets/PlayStore.png' />
                                    <MarketLinks src='/images/markets/WebApp.png' />
                                </div>
                            </div>
                            <div className='hidden lg:block'>
                                <p className='text-center mb-3'>
                                    با ما همراه شوید
                                </p>
                                <Link
                                    href='/'
                                    className='h-[45.3px] instagramGradiant mx-auto rounded-lg text-white flex items-center justify-center w-1/2 py-2 min-w-[150px]'
                                >
                                    <p>700K</p>
                                    <FaInstagram className='text-3xl mr-4' />
                                </Link>
                                <Link
                                    href='/'
                                    className='h-[45.3px] telegramGradiant mx-auto rounded-lg text-white flex items-center justify-center w-1/2 py-2 min-w-[150px] mt-2'
                                >
                                    <p>20K</p>
                                    <LiaTelegram className='text-3xl mr-4' />
                                </Link>
                            </div>
                        </div>
                        <div className=' lg:!block hidden'>
                            <CitiesList />
                        </div>
                    </div>

                    <div className='flex-col sm:flex-row lg:!flex hidden'>
                        <div className=''>
                            <p className='text-center mb-3'>
                                با خیال راحت به جاجیگا اعتماد کنید
                            </p>
                            <div className='grid grid-cols-4 md:grid-cols-2 gap-4'>
                                <div className='trust'>
                                    <img className='h-[80%]' src='/images/footer/ecunion.png' alt='' />
                                </div>
                                <div className='trust'>
                                    <img className='h-[80%]' src='/images/footer/enamad.png' alt='' />
                                </div>
                                <div className='trust'>
                                    <img className='h-[80%]' src='/images/footer/iwfm.png' alt='' />
                                </div>
                                <div className='trust'>
                                    <img className='h-[80%]' src='/images/footer/mcth.png' alt='' />
                                </div>
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
                <div className='block lg:hidden mb-10'>
                    <p className='text-right mb-3'>
                        با ما همراه شوید
                    </p>
                    <div className='flex gap-2 items-baseline'>
                        <Link
                            href='/'
                            className='h-[45.3px] instagramGradiant mx-auto rounded-lg text-white flex items-center justify-center w-1/2 py-2  sm:!min-w-[150px]'
                        >
                            <p>700K</p>
                            <FaInstagram className='text-3xl mr-4' />
                        </Link>
                        <Link
                            href='/'
                            className='h-[45.3px] telegramGradiant mx-auto rounded-lg text-white flex items-center justify-center w-1/2 py-2  sm:!min-w-[150px] mt-2'
                        >
                            <p>20K</p>
                            <LiaTelegram className='text-3xl mr-4' />
                        </Link>
                    </div>
                </div>
                <div className='flex-row flex lg:!hidden'>
                    <div className='w-full'>
                        <p className='text-right mb-3'>
                            با خیال راحت به جاجیگا اعتماد کنید
                        </p>
                        <div className='sm:!flex grid grid-cols-[auto,auto] gap-3 justify-evenly sm:!justify-between'>
                            <div className='trust !w-[120px]'>
                                <img className='h-[95px]' src='/images/footer/ecunion.png' alt='' />
                            </div>
                            <div className='trust !w-[120px]'>
                                <img className='h-[95px]' src='/images/footer/enamad.png' alt='' />
                            </div>
                            <div className='trust !w-[120px]'>
                                <img className='h-[95px]' src='/images/footer/iwfm.png' alt='' />
                            </div>
                            <div className='trust !w-[120px]'>
                                <img className='h-[95px]' src='/images/footer/mcth.png' alt='' />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='lg:!hidden'>
                    <CitiesList />
                </div>
            </div>
            <div className='p-3 text-[#6e6e6e] mt-8 bg-[#cbcbcb] leading-6 text-[10px] text-center rounded-t-[16px]  '>
                <p>کلیه حقوق این وبسایت متعلق به شرکت تجارت الکترونیک لوتوس آرمانی (سهامی خاص) می‌باشد.</p>
            </div>
        </div>
    );
};

export default Footer;  