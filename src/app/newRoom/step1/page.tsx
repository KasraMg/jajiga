"use client"
import Layout from '@/src/components/modules/Layout/Layout';
import Breadcrumb from '@/src/components/modules/breadcrumb/Breadcrumb';
import Container from '@/src/components/modules/container/Container';
import ContentNavigator from '@/src/components/modules/contentNavigator/ContentNavigator';
import Stepper from '@/src/components/modules/stepper/Stepper';
import StepperInfo from '@/src/components/modules/stepperInfo/StepperInfo';
import Textarea from '@/src/components/modules/textarea/Textarea';
import useStateData from '@/src/hooks/useStateData';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const stateOptions = useStateData()


const page = () => {
    const [address, setAddress] = useState<string>("")
    const [stateSelectedOption, setStateSelectedOption] = useState<{ label: string; value: string[]; } | null>(null);
    const [citySelectedOption, setCitySelectedOption] = useState<{ label: string; value: string[]; } | null>(null);
    const [cityOption, setCityOption] = useState<{ label: string, value: string[] }[]>([]);
    const [citySelectorDisabel, setcitySelectorDisabel] = useState(true);
    const [isLodaing, setIsLodaing] = useState(false)
    const [disabelNextButton, setDisabelNextButton] = useState(true)

    useEffect(() => {
        setCitySelectedOption(null)
        setIsLodaing(true)
        if (stateSelectedOption?.value) {
            const city: any =
                stateSelectedOption?.value.map(data => {
                    return {
                        value: data,
                        label: data
                    }
                })
            setCityOption(city)
            setcitySelectorDisabel(false)
            setIsLodaing(false)
        }

    }, [stateSelectedOption])

    useEffect(() => {
        if (stateSelectedOption && address && citySelectedOption) {
            setDisabelNextButton(false)
        } else (
            setDisabelNextButton(true)
        )
    }, [stateSelectedOption, address, citySelectedOption])

    const clickHandler = () => {
    }
    return (
        <Container disableFooter={true}>
            <Breadcrumb route={'ثبت اقامتگاه'} />
            <Layout>
                <div className='max-w-[1120px] py-8  flex gap-5'>
                    <Stepper active={1} />
                    <div className='flex flex-col gap-8'>
                        <div className='flex gap-20 items-center justify-between'>
                            <p className='text-[#252a31] whitespace-nowrap text-sm'>انتخاب استان:</p>
                            <Select
                                defaultValue={stateSelectedOption}
                                onChange={setStateSelectedOption as any}
                                isClearable={true}
                                className='w-80'
                                isRtl={true}
                                isSearchable={true}
                                options={stateOptions}
                                placeholder={'استان خود را انتخاب کنید'}
                            />
                        </div>

                        <div className='flex gap-20 mt-2 items-center justify-between'>
                            <p className='text-[#252a31] whitespace-nowrap text-sm'>انتخاب شهر:</p>
                            <Select
                                defaultValue={citySelectedOption}
                                onChange={setCitySelectedOption as any}
                                isDisabled={citySelectorDisabel}
                                isClearable={true}
                                className='w-80'
                                isLoading={isLodaing}
                                isRtl={true}
                                isSearchable={true}
                                value={citySelectedOption}
                                options={cityOption}
                                placeholder={'شهر خود را انتخاب کنید'}
                            />
                        </div>

                        <div className='flex gap-20 justify-between '>
                            <p className='text-[#252a31] whitespace-nowrap text-sm'> آدرس دقیق:</p>
                            <div className='w-80 '>
                                <Textarea className='h-[104px]' maxLength={250} setValue={setAddress} value={address} />
                                <span className='text-xs text-[#5f738c] mt-3'>آدرس اقامتگاه را با جزییات کامل وارد کنید تا میهمان پس از رزرو به راحتی بتوانند اقامتگاه را پیدا کنند.</span>
                            </div>
                        </div>
                        <ContentNavigator clickHandler={clickHandler} disablelPrevButton={true} disabelNextButton={disabelNextButton} prevLink={'/'} nextLink={'newRoom/step2'} />
                    </div>
                    <StepperInfo title="آدرس اقامتگاه" text="آدرس دقیق اقامتگاه, تنها پس ازقطعی شدن رزروبرای میهمان ارسال می گردد." />
                </div>
            </Layout>

        </Container>
    )
}

export default page
