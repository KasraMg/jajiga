
"use client"
import Layout from '@/src/components/modules/Layout/Layout';
import Breadcrumb from '@/src/components/modules/breadcrumb/Breadcrumb';
import Container from '@/src/components/modules/container/Container';
import ContentNavigator from '@/src/components/modules/contentNavigator/ContentNavigator';
import Stepper from '@/src/components/modules/stepper/Stepper';
import StepperInfo from '@/src/components/modules/stepperInfo/StepperInfo';
import { useEffect, useState } from 'react';

const page = () => {
    const informatin = [
        {
            title: 'مبلمان',
            placeholder: 'مثال: مبلمان راحتی برای 7 نفر'
        },
        {
            title: 'یخچال',
            placeholder: 'توضیحات یخچال  '
        },
        {
            title: 'تلویزیون',
            placeholder: ' مثال: یک عدد تلویزیون فلت سامسونگ 48 اینچ '
        },
        {
            title: 'میز نهار خوری',
            placeholder: 'مثال: میز نهارخوری برای 6 نفر و 6 عدد صندلی'
        },
        {
            title: 'سیستم گرمایشی',
            placeholder: 'مثال: سیستم پکیج / بخاری گازی'
        },
        {
            title: 'سیستم سرمایش',
            placeholder: 'مثال: اسپیلت 18 هزار'
        },
        {
            title: 'پارکینگ',
            placeholder: 'مثال:  پارکینگ روباز برای 3 عدد اتومبیل'
        },
        {
            title: 'بیلیارد',
            placeholder: 'توضیحات بیلیارد'
        },
        {
            title: ' اینترنت wifi',
            placeholder: 'مشخص نمایید: اینترنت کابلی / بی‌سیم-وای‌فای'
        },
        {
            title: 'توالت فرنگی',
            placeholder: 'توضیحات توالت فرنگی'
        },
        {
            title: 'استخر',
            placeholder: 'توضیحات استخر'
        },
    ]
    const sanitaryItems = ['تعویض روبالشتی و روتختی (برای هر میهمان جدید) ', 'تعویض ملحفه (برای هر میهمان جدید)', 'شارژ کاغذ توالت', 'مایع ظرفشویی', 'شارژ مایع دستشویی یا صابون', 'مواد ضدعفونی کننده']

    const [disabelNextButton, setDisabelNextButton] = useState<boolean>(false)
    const [showInput, setShowInput] = useState<boolean[]>(new Array(informatin.length).fill(false));

    useEffect(() => {

    }, [])



    return (
        <Container disableFooter={true}>
            <Breadcrumb route={'ثبت اقامتگاه'} />
            <Layout>
                <div className='max-w-[1120px] py-8 flex gap-5'>
                    <Stepper active={4} />
                    <div className='w-full space-y-4'>
                        <p >امکانات و تجهیزات موجود در اقامتگاه خود را مشخص کنید</p>
                        {informatin.map((data, index) => (
                            <div className='flex justify-between' key={index}>
                                <div className='flex gap-3 items-center'>
                                    <input onClick={() => {
                                        const newShowInput = [...showInput];
                                        newShowInput[index] = !newShowInput[index];
                                        setShowInput(newShowInput);
                                    }} style={{ boxShadow: 'none' }} className='checked:bg-black rounded cursor-pointer' type="checkbox" />
                                    <label className='text-sm'>{data.title}</label>
                                </div>
                                {showInput[index] && (
                                    <input placeholder={data.placeholder} className=' text-sm placeholder:text-gray-500 w-[370px] p-2 rounded-md' type="text" />
                                )}
                            </div>
                        ))}
                        <div className='flex justify-between items-center'>
                            <label className='text-sm'>سایر امکانات</label>
                            <input placeholder={'سایر امکانات'} className=' text-sm placeholder:text-gray-500 w-[370px] p-2 rounded-md' type="text" />
                        </div>
                        <p className='border-t border-solid border-gray-200 pt-5 !mt-8'>اقلام بهداشتی</p>
                        {sanitaryItems.map(data => (
                            <div className='flex gap-3 items-center'>
                                <input style={{ boxShadow: 'none' }} className='checked:bg-black rounded cursor-pointer' type="checkbox" />
                                <label className='text-sm'>{data}</label>
                            </div>
                        ))} 
                        <div className='flex justify-between items-center !mb-16'>
                        <label className='text-sm'>سایر موارد</label>
                        <input placeholder={'سایر موارد'} className=' text-sm placeholder:text-gray-500 w-[370px] p-2 rounded-md' type="text" />
                    </div>
                        <ContentNavigator disablelPrevButton={false} disabelNextButton={disabelNextButton} prevLink={'newRoom/step5'} nextLink={'newRoom/step7'} />
                    </div>
                    <div className='max-w-[243px] sticky top-[68px] h-max '>
                        <StepperInfo className=' !relative !top-0' title="امکانات اقامتگاه" text=" در این قسمت امکانات موجود در اقامتگاه را مشخص کنید. همچنین می توانید توضیحات تکمیلی هر گزینه را در کادر روبری آن وارد کنید. بعنوان مثال بعد از افزودن سیستم سرمایش, وارد کنید:  اسپیلت . در صورتی که بعضی از امکانات اقامتگاه خود را در لیست نیافتید, آن موارد را در کادر انتهای صفحه وارد کنید." />
                    </div>

                </div>
            </Layout>
        </Container>
    )
}

export default page
