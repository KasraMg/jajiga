
"use client"
import Layout from '@/src/components/modules/Layout/Layout';
import Breadcrumb from '@/src/components/modules/breadcrumb/Breadcrumb';
import Container from '@/src/components/modules/container/Container';
import Stepper from '@/src/components/modules/stepper/Stepper';
import StepperInfo from '@/src/components/modules/stepperInfo/StepperInfo';
import Textarea from '@/src/components/modules/textarea/Textarea';
import { useEffect, useState } from 'react';
import { BsCamera, BsTrash3 } from 'react-icons/bs';


const page = () => {
    const [description, setDescription] = useState<string>("")

    return (
        <Container disableFooter={true}>
            <Breadcrumb route={'ثبت اقامتگاه'} />
            <Layout>
                <div className='max-w-[1120px] py-8 flex gap-5'>
                    <Stepper active={3} />
                    <div className='w-full'>
                        <p>تصاویر اقامتگاه را آپلود کنید</p>
                        <p className='text-sm font-vazir-light mt-3'>ارائه تصاویر زیبا و واقعی از اقامتگاه شما می تواند نقش بسیار مهمی در جلب نظر میهمانان ایفا نماید.‏‎‏ لذا:</p>
                        <ul className='text-sm mt-4 list-disc mr-4'>
                            <li className='font-vazir-light'>حداقل 10 عکسِ باکیفیت، از پذیرایی، اتاق خواب ها، آشپزخانه، سرویس بهداشتی، حیاط و نمای ساختمان آپلود کنید.</li>
                            <li className='font-vazir-light mt-2'>ترجیحاً از تصاویر افقی (Landscape) استفاده کنید.</li>
                        </ul>

                        <div className='border border-dashed border-gray-700  rounded-xl w-full p-4 text-center mt-3 relative'>
                            <input type="file" className='opacity-0 absolute top-0 right-0 w-full h-full cursor-pointer z-50' id="" />
                            <div className='bg-gray-200 text-gray-700 p-[10px] rounded-full w-max block mx-auto text-3xl'>
                                <BsCamera />
                            </div>
                            <p className='text-sm font-vazir-light mt-3'>انتخاب تصویر +</p>
                        </div>

                        <div className='rounded-lg mt-5 pb-3' style={{ boxShadow: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px' }}>
                            <div className='relative'>
                                <img className='border border-dashed border-gray-600 h-[353px] w-full rounded-lg' src="https://storage.jajiga.com/public/pictures/medium/2024/01/28/3216492240128221348.jpg" alt="" />
                                <div className=' absolute top-3 right-2 bg-white rounded-full px-2 pt-1 text-sm text-center text-black'>
                                    <p>1</p>
                                </div>
                                <div className='p-2 bg-red-600 text-white cursor-pointer top-3 left-3 absolute text-2xl text-center w-max rounded-md'>
                                    <BsTrash3 />
                                </div>
                            </div>
                            <div className=' relative'>
                                <Textarea  className='!px-4 !h-[70px] !pt-2 !pb-10 placeholder:text-gray-400 focus:!border-black text-xs block  rounded-lg !w-[98%] mx-auto mt-2' placeholder='عنوان مناسبی برای این تصویر بنویسید' maxLength={56} setValue={setDescription} value={description} />
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[243px] sticky top-[68px] h-max '>
                        <StepperInfo className=' !relative !top-0' title="تصاویر اقامتگاه" text="شما می توانید با گرفتن و کشیدن (Drag) عکسها, تصویر اصلی اقامتگاه و ترتیب نمایش تصاویر را به میل خود تغییر دهید..‏" />
                        <StepperInfo className='mt-4 !relative !top-0' title="ویرایش تصاویر اقامتگاه" text="همچنین می توانید بعد از ثبت اقامتگاه, به قسمت ویرایش اقامتگاه مراجعه کرده, تصویر اصلی اقامتگاه را ‏تغییر دهید, تصاویر بیشتری اضافه کنید و یا ترتیب تصاویر را تغییر دهید" />
                    </div>

                </div>
            </Layout>

        </Container>
    )
}

export default page
