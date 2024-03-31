import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { FaRegSnowflake } from 'react-icons/fa';

const Infoes = () => {
    return (
        <div>
            <h2 className='text-lg text-[#252a31] my-6 mb-4'>درباره اقامتگاه</h2>
            <p className='text-[#404040]'>اجاره اقامتگاه در رامسر</p>
            <div className='text-[#404040] text-sm leading-6 font-light font-vazir-light'>
                این ویلا دو خوابه دارای استخر آبگرم با سیستم تصفیه اتوماتیک در
                منطقه شهری و در عین حال در جای دنج و خلوتی قرار دارد.
                <br />
                دسترسی آسان به مراکز تفریحی و گردشگری همچنین به مراکز خرید و
                خدماتی نظیر پمپ بنزین از مزیت آن است.
                <br />
                استخر سرپوشیده آبگرم به ابعاد 5 در 4 متر و عمق 1/60 با تصفیه
                اتوماتیک 12 ساعته مهیای استفاده مهمانان می باشد.
                <br />
                فاصله ویلا از ساحل حدود 1 کیلومتر است و همچنین سوپرمارکت و
                نانوایی نیز در فاصله 200 متری آن واقع شده است.
                <br />
                در نزدیکی ویلا و در فاصله حدود 50 متری همسایه ای نیست از این رو
                مزاحمتی برای آرامش یا خوش بودن مهمانها وجود ندارد، البته امنیت
                ویلا مسلما کامل است.
                <br />
                فاصله حدود 4 کیلومتری از مجموعه تله کابین رامسر و فاصله 3
                کیلومری از جاده جواهرده از دیگر خصوصیات ویلا محسوب میشود.
                <br /> لازم به ذکر است که به تمیزی این ویلا توجه ویژه ای میشود،
                از این رو از مهمانان نیز انتظار داریم که با ما همسو باشند
            </div>
            <hr className='mt-4' />
            <div>
                <h2 className='text-lg text-[#252a31] my-6 mb-4'>درباره اقامتگاه</h2>
                <div className='grid-cols-[auto,auto] text-sm grid gap-3 text-gray-800'>
                    <p> <strong>ظرفیت استاندارد: </strong> 3 نفر</p>
                    <p><strong className='text-black ml-2'>حداکثر ظرفیت: </strong> 5 نفر</p>
                    <p><strong className='text-black ml-2'>متراژ زیربنا:</strong> 62 متر  </p>
                    <p><strong className='text-black ml-2'>متراژ محوطه:</strong> 1000 متر </p>
                    <p><strong className='text-black ml-2'>نوع اقامتگاه:</strong>  کلبه  </p>
                    <p><strong className='text-black ml-2'>منطقه:</strong>روستایی</p>
                    <p><strong className='text-black ml-2'>تعداد اتاق:</strong>1</p>
                </div>
            </div>
            <hr className='mt-8' /> 
            <div className='border-gray-300  pb-4'>
                <h2 className='text-lg text-[#252a31] my-6 mb-4'>امکانات</h2>
                <div className='grid-cols-[auto,auto] text-sm grid gap-3 text-gray-800'>
                     <div className='flex gap-2 items-center'>
                        <FaRegSnowflake />
                        <p>پارکینگ</p>
                        <div className='text-[#6378f1] cursor-pointer relative' id='tooltip'>
                            <BsInfoCircleFill />
                            <div className=' absolute invisible -left-[2.5rem] -top-[2.5rem] bg-black py-2 px-4 whitespace-nowrap rounded-lg text-white text-xs' >
                                <span>سلام چطوری؟</span>
                            </div>
                        </div>
                     </div>
                     <div className='flex gap-2 items-center'>
                        <FaRegSnowflake />
                        <p>پارکینگ</p>
                        <div className='text-[#6378f1] cursor-pointer relative' id='tooltip'>
                            <BsInfoCircleFill />
                            <div className=' absolute invisible -left-[2.5rem] -top-[2.5rem] bg-black py-2 px-4 whitespace-nowrap rounded-lg text-white text-xs'>
                                <span>سلام چطوری؟</span>
                            </div>
                        </div>
                     </div>
                     <div className='flex gap-2 items-center'>
                        <FaRegSnowflake />
                        <p>پارکینگ</p>
                        <div className='text-[#6378f1] cursor-pointer relative' id='tooltip'>
                            <BsInfoCircleFill />
                            <div className=' absolute invisible -left-[2.5rem] -top-[2.5rem] bg-black py-2 px-4 whitespace-nowrap rounded-lg text-white text-xs'>
                                <span>سلام چطوری؟</span>
                            </div>
                        </div>
                     </div>
                     <div className='flex gap-2 items-center'>
                        <FaRegSnowflake />
                        <p>پارکینگ</p>
                        <div className='text-[#6378f1] cursor-pointer relative' id='tooltip'>
                            <BsInfoCircleFill />
                            <div className=' absolute invisible -left-[2.5rem] -top-[2.5rem] bg-black py-2 px-4 whitespace-nowrap rounded-lg text-white text-xs'>
                                <span>سلام چطوری؟</span>
                            </div>
                        </div>
                     </div>
                     <div className='flex gap-2 items-center'>
                        <FaRegSnowflake />
                        <p>پارکینگ</p>
                        <div className='text-[#6378f1] cursor-pointer relative' id='tooltip'>
                            <BsInfoCircleFill />
                            <div className=' absolute invisible -left-[2.5rem] -top-[2.5rem] bg-black py-2 px-4 whitespace-nowrap rounded-lg text-white text-xs'>
                                <span>سلام چطوری؟</span>
                            </div>
                        </div>
                     </div>
                     <div className='flex gap-2 items-center'>
                        <FaRegSnowflake />
                        <p>پارکینگ</p>
                        <div className='text-[#6378f1] cursor-pointer relative' id='tooltip'>
                            <BsInfoCircleFill />
                            <div className=' absolute invisible -left-[2.5rem] -top-[2.5rem] bg-black py-2 px-4 whitespace-nowrap rounded-lg text-white text-xs'>
                                <span>سلام چطوری؟</span>
                            </div>
                        </div>
                     </div>
                </div>
            </div> 
        </div>
    );
};

export default Infoes;
