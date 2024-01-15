'use client';

import { useEffect } from 'react';
import Footer from '@/src/components/modules/Footer/Footer';
import Layout from '@/src/components/modules/Layout/Layout';
import Breadcrumb from '@/src/components/modules/breadcrumb/Breadcrumb';
import Navbar from '@/src/components/modules/navbar/Navbar';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const page = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Navbar />
            <Breadcrumb routes={['درباره ما']} variant='full' />
            <Layout className='!z-10' bg='white'>
                <section className='flex items-center px-24 mt-20 flex-row-reverse gap-16 leading-7'>
                    <img
                        style={{
                            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 8px 16px 0px',
                        }}
                        className='w-[439px] h-[351px] rounded-xl'
                        src='https://www.jajiga.com/static/img/about/about_img1.jpg'
                        alt=''
                    />
                    <div className=' space-y-6'>
                        <p className='text-2xl'>سلام ایسا خانوم</p>
                        <p>
                            امروزه بسیاری از گردشگران داخلی و خارجی ترجیح میدهند
                            تا با اقامت در منازل شخصی مردم و در کنار ایشان فضای
                            صمیمی تری را تجربه کنند
                        </p>
                        <p>
                            امروزه بسیاری از گردشگران داخلی و خارجی ترجیح میدهند
                            تا با اقامت در منازل شخصی مردم و در کنار ایشان فضای
                            صمیمی تری را{' '}
                        </p>
                    </div>
                </section>
                <section className='flex items-center px-24 mt-10 gap-16 leading-7'>
                    <img
                        style={{
                            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 8px 16px 0px',
                        }}
                        className='w-[439px] h-[351px] rounded-xl'
                        src='https://www.jajiga.com/static/img/about/about_img1.jpg'
                        alt=''
                    />
                    <div className=' space-y-6'>
                        <p>
                            به اعتراف اکثر گردشگرانی که از ایران دیدن کرده اند,
                            در کنار آثار باستانی اعجاب انگیز و طبیعت زیبای
                            ایران, این مردم کوچه و بازار هستند که با مهمان نوازی
                            ایرانی خاطره ای خوش از خود و سرزمین ایران را در ذهن
                            و روح ایشان حک کرده اند, همان مردمی که با آغوشی باز
                            و لبخندی گشاده به استقبالشان میروند و بی تکلف ایشان
                            را برای صرف چای به خانه خود دعوت میکنند.
                        </p>
                    </div>
                </section>
                <section className='flex items-center px-24 mt-10 flex-row-reverse  gap-16 leading-7'>
                    <img
                        style={{
                            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 8px 16px 0px',
                        }}
                        className='w-[439px] h-[351px] rounded-xl'
                        src='https://www.jajiga.com/static/img/about/about_img1.jpg'
                        alt=''
                    />
                    <div className=' space-y-6'>
                        <p>
                            این رویکرد جدید با افزایش آگاهی گردشگران و پایبندی
                            ایشان به هنجار های جامعه میزبان به رویکرد قالب در
                            میان گردشگران بین المللی بدل گشته است.
                        </p>
                    </div>
                </section>
                <section className='my-20'>
                    <img
                        style={{
                            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 8px 16px 0px',
                        }}
                        className='w-full rounded-xl'
                        src='https://www.jajiga.com/static/img/about/about_img4.jpg'
                        alt=''
                    />
                </section>
                <section className='flex flex-row-reverse px-24 mt-20 gap-16 leading-7'>
                    <img
                        style={{
                            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 8px 16px 0px',
                        }}
                        className='w-[264px] h-[390px] rounded-xl'
                        src='/images/about/about_img5.jpg'
                        alt=''
                    />
                    <div className=' space-y-6 mt-6'>
                        <p className='text-2xl'>سلام ایسا خانوم</p>
                        <p>
                            امروزه بسیاری از گردشگران داخلی و خارجی ترجیح میدهند
                            تا با اقامت در منازل شخصی مردم و در کنار ایشان فضای
                            صمیمی تری را تجربه کنند
                        </p>
                        <img
                            style={{
                                boxShadow:
                                    'rgba(0, 0, 0, 0.25) 0px 8px 16px 0px',
                            }}
                            className='w-full h-[308px] rounded-xl'
                            src='/images/about/about_img6.jpg'
                            alt=''
                        />
                        <p>
                            امروزه بسیاری از گردشگران داخلی و خارجی ترجیح میدهند
                            تا با اقامت در منازل شخصی مردم و در کنار ایشان فضای
                            صمیمی تری را{' '}
                        </p>
                    </div>
                </section>
                <section className='flex px-24 my-20 gap-[4.5rem] leading-7'>
                    <img
                        style={{
                            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 8px 16px 0px',
                        }}
                        className='w-[239px] h-[239px] rounded-xl'
                        src='https://www.jajiga.com/static/img/about/about_img13.jpg'
                        alt=''
                    />
                    <div className='mt-5'>
                        <p>
                            تنوع مکانهای اقامتی این کسب و کار به وسعت تنوع
                            سکونتگاه های سرزمین ایران است. سکونتگاه هایی واقع در
                            شهر و روستا و ساحل دریا تا جنگل و کویر و مزارع زیبا
                        </p>
                        <div className='flex justify-between'>
                            <img
                                style={{
                                    boxShadow:
                                        'rgba(0, 0, 0, 0.25) 0px 8px 16px 0px',
                                }}
                                className='w-[244px] mt-12 h-[244px] rounded-xl'
                                src='https://www.jajiga.com/static/img/about/about_img13.jpg'
                                alt=''
                            />
                            <img
                                style={{
                                    boxShadow:
                                        'rgba(0, 0, 0, 0.25) 0px 8px 16px 0px',
                                }}
                                className='w-[244px] mt-48  h-[244px] rounded-xl'
                                src='https://www.jajiga.com/static/img/about/about_img13.jpg'
                                alt=''
                            />
                        </div>
                    </div>
                </section>
            </Layout>
            <Footer />
        </>
    );
};

export default page;
