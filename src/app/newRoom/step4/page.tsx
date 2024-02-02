
"use client"
import Layout from '@/src/components/modules/Layout/Layout';
import Breadcrumb from '@/src/components/modules/breadcrumb/Breadcrumb';
import Container from '@/src/components/modules/container/Container';
import ContentNavigator from '@/src/components/modules/contentNavigator/ContentNavigator';
import Stepper from '@/src/components/modules/stepper/Stepper';
import StepperInfo from '@/src/components/modules/stepperInfo/StepperInfo';
import Textarea from '@/src/components/modules/textarea/Textarea';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { spaceOptions, typeOptions, areaOptions } from '@/src/utils/selectOptions'

const page = () => {
    const [description, setDescription] = useState<string>("")
    const [spaceSelectedOption, setSpaceSelectedOption] = useState<{ label: string; value: string; } | null>(null);
    const [typeSelectedOption, setTypeSelectedOption] = useState<{ label: string; value: string; } | null>(null);
    const [areaSelectedOption, setAreaSelectedOption] = useState<{ label: string; value: string; } | null>(null);
    const [disabelNextButton, setDisabelNextButton] = useState<boolean>(true)


    useEffect(() => {
        if (spaceSelectedOption && typeSelectedOption && areaSelectedOption && description) {
            setDisabelNextButton(false)
        } else {
            setDisabelNextButton(true)
        }
    }, [spaceSelectedOption, typeSelectedOption, areaSelectedOption, description])

    return (
        <Container disableFooter={true}>
            <Breadcrumb route={'ثبت اقامتگاه'} />
            <Layout>
                <div className='max-w-[1120px] py-8 flex gap-5'>
                    <Stepper active={4} />
                    <div className='w-full space-y-4'>
                        <div className='flex justify-between items-center'>
                            <p className='font-vazir-light'>فضای اقامتگاه</p>
                            <Select
                                defaultValue={spaceSelectedOption}
                                onChange={setSpaceSelectedOption as any}
                                isClearable={true}
                                className='w-80 text-sm font-vazir-light'
                                isRtl={true}
                                isSearchable={true}
                                options={spaceOptions}
                                placeholder={'فضای اقامتگاه خود را انتخاب کنید'}
                            />
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='font-vazir-light'>نوع اقامتگاه</p>
                            <Select
                                defaultValue={typeSelectedOption}
                                onChange={setTypeSelectedOption as any}
                                isClearable={true}
                                className='w-80 text-sm font-vazir-light'
                                isRtl={true}
                                isSearchable={true}
                                options={typeOptions}
                                placeholder={'نوع اقامتگاه خود را انتخاب کنید'}
                            />
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='font-vazir-light'>منطقه اقامتگاه</p>
                            <Select
                                defaultValue={areaSelectedOption}
                                onChange={setAreaSelectedOption as any}
                                isClearable={true}
                                className='w-80 text-sm font-vazir-light'
                                isRtl={true}
                                isSearchable={true}
                                options={areaOptions}
                                placeholder={'منطقه اقامتگاه خود را انتخاب کنید'}
                            />
                        </div>
                        <div className='border-t border-solid border-gray-300 pt-5 !mt-8'>
                            <p className='text-gray-500 text-sm mb-3'>درباره اقامتگاه</p>
                            <Textarea maxLength={994} setValue={setDescription} value={description} />
                            <p className='text-gray-500 leading-5 text-xs'>در اینجا نکاتی را که میهمان شما باید بداند بنویسید، از نقاط قوت و ضعف اقامتگاه، بعنوان مثال از تعداد زیاد پله ها که برای سالمندان مناسب نیست و ورودی تنگ پارکینگ، از چشم انداز زیبای منزل یا از جاذبه های گردشگری ‏اطراف همچون ساحل دریا/رودخانه/کوهستان/ اماکن تاریخی/بازار محلی بگویید و فاصله اقامتگاه از هر یک را بنویسید. وجود فروشگاههای مواد غذایی و نانوایی در مجاورت منزل خود را مشخص ‏کنید.‏‎ از حال و هوای محله و رفتار احتمالی همسایه ها بنویسید. هر آنچه میهمان شما لازم ااست بداند را اینجا بنویسید.‏‎</p>
                        </div>
                        <ContentNavigator disablelPrevButton={false} disabelNextButton={disabelNextButton} prevLink={'newRoom/step3'} nextLink={'newRoom/step5'} />
                    </div>
                    <div className='max-w-[243px] sticky top-[68px] h-max '>
                        <StepperInfo className=' !relative !top-0' title="توضیحات   درباره اقامتگاه" text="بهتر است در توضیحات خود, به فراهم بودن امکانات ‏تفریحی همچون دوچرخه سواری, اسب سواری یا ماهی گیری و قایقرانی در مجاورت اقامتگاه خود اشاره کنید. همچنین نحوه و ‏فاصله دسترسی گردشگران به ‏تاکسی/اتوبوس/فرودگاه/قطار را در این قسمت مشخص نمایید تا میهمانان شما با اطلاع از شرایط زندگی در ‏محله شما و با خیالی آسوده, سفر خود را آغاز کنند.‏‎" />
                    </div>

                </div>
            </Layout>

        </Container>
    )
}

export default page
