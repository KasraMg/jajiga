
"use client"
import Layout from '@/src/components/modules/Layout/Layout';
import Breadcrumb from '@/src/components/modules/breadcrumb/Breadcrumb';
import Container from '@/src/components/modules/container/Container';
import ContentNavigator from '@/src/components/modules/contentNavigator/ContentNavigator';
import Stepper from '@/src/components/modules/stepper/Stepper';
import StepperInfo from '@/src/components/modules/stepperInfo/StepperInfo';
import Textarea from '@/src/components/modules/textarea/Textarea';
import { useEffect, useState } from 'react';

const page = () => {

    const [disabelNextButton, setDisabelNextButton] = useState<boolean>(false)
    const [rules, setRules] = useState<string>("")

    return (
        <Container disableFooter={true}>
            <Breadcrumb route={'ثبت اقامتگاه'} />
            <Layout>
                <div className='max-w-[1120px] py-8 flex gap-5'>
                    <Stepper active={9} />
                    <div className='w-full space-y-5'>
                        <div>
                            <div className='flex justify-between items-center'>
                                <p className='text-sm'>همراه داشتن حیوان خانگی</p>

                                <div className="grid grid-cols-2 gap-2  bg-gray-200 p-1 rounded-[32px]">
                                    <div>
                                        <input type="radio" name="animal" id="1" value="1" className="peer hidden" />
                                        <label htmlFor={"1"} className="block cursor-pointer select-none  py-[6px] px-2 text-center peer-checked:bg-[#f0c807] rounded-[50px] peer-checked:text-black">مجاز</label>
                                    </div>

                                    <div>
                                        <input type="radio" name="animal" id="2" value="2" className="peer hidden" />
                                        <label htmlFor={"2"} className="block cursor-pointer select-none  py-[6px] px-2 text-center peer-checked:bg-[#f0c807] rounded-[50px] peer-checked:text-black">ممنوع</label>
                                    </div>

                                </div>
                            </div>
                            <p className='text-gray-400 text-xs'>توضیحات:</p>
                            <p className='text-gray-400 text-xs'>ورود حیوان خانگی (سگ، گربه، ...) به شرط رعایت کامل نظافت مجاز است. در داخل ساختمان حیوان باید در باکس مخصوص نگهداری شود.</p>
                        </div>
                        <div>
                            <div className='flex justify-between items-center'>
                                <p className='text-sm'>برگزاری جشن و پخش موزیک</p>

                                <div className="grid grid-cols-2 gap-2  bg-gray-200 p-1 rounded-[32px]">
                                    <div>
                                        <input type="radio" name="music" id="3" value="1" className="peer hidden" />
                                        <label htmlFor={"3"} className="block cursor-pointer select-none  py-[6px] px-2 text-center peer-checked:bg-[#f0c807] rounded-[50px] peer-checked:text-black">مجاز</label>
                                    </div>

                                    <div>
                                        <input type="radio" name="music" id="4" value="2" className="peer hidden" />
                                        <label htmlFor={"4"} className="block cursor-pointer select-none  py-[6px] px-2 text-center peer-checked:bg-[#f0c807] rounded-[50px] peer-checked:text-black">ممنوع</label>
                                    </div>

                                </div>
                            </div>
                            <p className='text-gray-400 text-xs'>توضیحات:</p>
                            <p className='text-gray-400 text-xs'> برگزاری جشن کوچک با هماهنگی میزبان امکانپذیر است.</p>
                        </div>
                        <div>
                            <div className='flex justify-between items-center'>
                                <p className='text-sm'>استعمال دخانیات (سیگار، قلیان و ...) در فضای داخلی ساختمان</p>

                                <div className="grid grid-cols-2 gap-2  bg-gray-200 p-1 rounded-[32px]">
                                    <div>
                                        <input type="radio" name="smoke" id="5" value="1" className="peer hidden" />
                                        <label htmlFor={"5"} className="block cursor-pointer select-none  py-[6px] px-2 text-center peer-checked:bg-[#f0c807] rounded-[50px] peer-checked:text-black">مجاز</label>
                                    </div>

                                    <div>
                                        <input type="radio" name="smoke" id="6" value="2" className="peer hidden" />
                                        <label htmlFor={"6"} className="block cursor-pointer select-none  py-[6px] px-2 text-center peer-checked:bg-[#f0c807] rounded-[50px] peer-checked:text-black">ممنوع</label>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='flex justify-between pb-20'>
                            <p className=' mb-3'>افزودن مقررات بیشتر</p>
                            <div className='w-[340px]'>
                                <Textarea maxLength={250} setValue={setRules} value={rules} />

                            </div>
                        </div>
                        <ContentNavigator disablelPrevButton={false} disabelNextButton={disabelNextButton} prevLink={'newRoom/step8'} nextLink={'newRoom/successfull'} />
                    </div>
                    <div className='max-w-[243px]'>
                        <StepperInfo title=" مقررات اقامتگاه " text="تعیین و درج مقررات اقامتگاه بصورت شفاف و گویا باعث حداقل شدن مشکلات آینده خواهد شد. توجه داشته باشید که تنها میهمانانی که تمامی مقررات اقامتگاه شما را می پذیرند قادر به رزرو اقامتگاه خواهند بود, لذا با رعایت تعادل در تعیین مقررات ‏تعداد کمتری از میهمانان را از دست خواهید داد." />

                    </div>
                </div>
            </Layout>
        </Container>
    )
}

export default page
