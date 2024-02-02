
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
    const [disabelNextButton, setDisabelNextButton] = useState<boolean>(true)
    const [standardSpace, setStandardSpace] = useState<number>(1)
    const [maximumSpace, setMaximumSpace] = useState<number>(1)
    const [landSize, setLandSize] = useState<string>("")
    const [areaSize, setAreaSize] = useState<string>("")
    const [roomCount, setRoomCount] = useState<number>(0)
    const [description, setDescription] = useState<string>("")

    useEffect(() => { 
        if (landSize.length  && areaSize.length  && description) { 
            setDisabelNextButton(false)  
            
        }else {
            setDisabelNextButton(true)
        }
    }, [landSize, areaSize,description])

    const incrementStandardHandler = () => {
        setStandardSpace(prev => prev + 1)
        if (maximumSpace - 1 < standardSpace) {
            setMaximumSpace(prev => prev + 1)
        }
    }
    const decrementStandardHandler = () => {
        if (standardSpace !== 1) {
            setStandardSpace(prev => prev - 1)
        }
    }
    const incrementMaximumHandler = () => {
        setMaximumSpace(prev => prev + 1)
    }
    const decrementMaximumHandler = () => {
        if (maximumSpace !== 1 && maximumSpace !== standardSpace) {
            setMaximumSpace(prev => prev - 1)
        }
    }
    const landSizeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLandSize(event.target.value)
    }
    const areaSizeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAreaSize(event.target.value)
    }
    return (
        <Container disableFooter={true}>
            <Breadcrumb route={'ثبت اقامتگاه'} />
            <Layout>
                <div className='max-w-[1120px] py-8 flex gap-5'>
                    <Stepper active={5} />
                    <div className='w-full space-y-4'>
                        <div className='flex justify-between items-center pl-1'>
                            <p>ظرفیت استاندارد</p>
                            <div className='flex justify-between w-1/2 items-center'>
                                <p onClick={incrementStandardHandler} className='text-2xl cursor-pointer hover:text-gray-500'>+</p>
                                <p>{standardSpace} نفر</p>
                                <p onClick={decrementStandardHandler} className={`${standardSpace == 1 && 'text-gray-300 !cursor-not-allowed'} text-2xl cursor-pointer mb-4 hover:text-gray-500`}>_</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center pl-1'>
                            <p>حداکثر ظرفیت</p>
                            <div className='flex justify-between w-1/2 items-center'>
                                <p onClick={incrementMaximumHandler} className='text-2xl cursor-pointer hover:text-gray-500'>+</p>
                                <p>{maximumSpace} نفر</p>
                                <p onClick={decrementMaximumHandler} className={`${(maximumSpace == 1 || maximumSpace == standardSpace) && 'text-gray-300 !cursor-not-allowed'} text-2xl cursor-pointer mb-4 hover:text-gray-500`}>_</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='text-sm font-vazir-light'>متراژ زمین و محوطه اقامتگاه</p>
                            <div className='flex justify-between  items-center relative'>
                                <input value={landSize} onChange={(event) => landSizeChangeHandler(event)} type="number" dir='ltr' className='outline-none py-2 pr-8 pl-9 rounded-lg w-[340px]' />
                                <span className='text-sm text-gray-500 absolute top-[10px] left-2'>متر</span>
                                {landSize as any > 9999 && <span className='text-xs text-red-600 absolute -bottom-6'>متراژ زمین نمی‌تواند بزرگتر از 9999 متر باشد</span>}
                            </div>

                        </div>
                        <div className='flex justify-between items-center !mt-10'>
                            <p className='text-sm font-vazir-light'>متراژ زیربنای اقامتگاه</p>
                            <div className='flex justify-between  items-center relative'>
                                <input value={areaSize} onChange={(event) => areaSizeChangeHandler(event)} type="number" dir='ltr' className='outline-none py-2 pr-8 pl-9 rounded-lg w-[340px]' />
                                <span className='text-sm text-gray-500 absolute top-[10px] left-2'>متر</span>
                                {landSize < areaSize && <span className='text-xs text-red-600 absolute -bottom-6'>متراژ بنای اقامتگاه نمی‌تواند بزرگتر از متراژ زمین و محوطه باشد</span>}
                                {(landSize > areaSize && areaSize as any > 9999) && <span className='text-xs text-red-600 absolute -bottom-6'>متراژ زیربنا نمی‌تواند بزرگتر از 9999 متر باشد</span>}
                            </div>
                        </div>
                        <div className='flex justify-between items-center pl-1 !mt-6'>
                            <p>تعداد اتاق خواب</p>
                            <div className='flex justify-between w-1/2 items-center'>
                                <p onClick={() => setRoomCount(prev => prev + 1)} className='text-2xl cursor-pointer hover:text-gray-500'>+</p>
                                <p>{roomCount == 0 ? 'فاقد اتاق خواب' : roomCount + '   اتاق  '}</p>
                                <p onClick={() => setRoomCount(prev => prev !== 0 && prev - 1 as any)} className={`${roomCount == 0 && 'text-gray-300 !cursor-not-allowed'} text-2xl cursor-pointer mb-4 hover:text-gray-500`}>_</p>
                            </div>
                        </div>
                        <div className='flex justify-between pb-20'>
                        <p className=' mb-3'>توضیحات فضای خواب</p>
                            <div className='w-[340px]'>
                            <Textarea maxLength={250} setValue={setDescription} value={description} />
                            <span className='text-xs text-[#5f738c] mt-3'>در این قسمت می توانید توضیحات تکمیلی درباره امکانات و شرایط مهیا شده برای خواب میهمانان را ارائه کنید</span>
                            </div>
                        </div>
                        <ContentNavigator disablelPrevButton={false} disabelNextButton={disabelNextButton} prevLink={'newRoom/step4'} nextLink={'newRoom/step6'} />
                    </div>
                    <div className='max-w-[243px] sticky top-[68px] h-max '>
                        <StepperInfo className=' !relative !top-0  ' title="وسعت اقامتگاه" text="متراژ تقریبی زیربنا و همچنین متراژ کل اقامتگاه شامل محوطه و حیاط را در این قسمت وارد کنید." />
                        <StepperInfo className=' !relative !top-0 mt-5' title="ظرفیت استاندارد/ حداکثر ظرفیت" text="حداکثر ظرفیت حداکثر گنجایش اقامتگاه می‌باشد که بر اساس فضا, امکانات موجود و امکانات خواب تعیین می گردد" />
                        <StepperInfo className=' !relative !top-0 mt-5' title="امکانات خواب" text="‎‏در این قسمت, امکانات خواب اقامتگاه, همچون تعداد و نوع تخت خواب های موجود در هر اتاق خواب را مشخص کنید. تعداد و شرح ‏سایر انواع رخت خواب, همچون رخت خواب سنتی (زمین خواب), مبل تخت خواب شو و غیرو ... را نیز در این قسمت وارد کنید" />
                    </div>

                </div>
            </Layout>

        </Container>
    )
}

export default page
