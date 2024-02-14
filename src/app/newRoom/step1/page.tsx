"use client" 
import ContentNavigator from '@/src/components/modules/contentNavigator/ContentNavigator';
import StepLayout from '@/src/components/modules/stepLayout/StepLayout';
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
    const [disabelNextButton, setDisabelNextButton] = useState(true)

    useEffect(() => {
        setCitySelectedOption(null)
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
        <StepLayout stepperId={1}>
            <div className='max-w-[1120px] py-8 flex gap-0 sm:!gap-5'>
                <div className='hidden md:!flex lg:!min-w-[21%] min-w-[23%] '>
                    <Stepper active={1} />
                </div>
                <div className='flex flex-col gap-8 w-full'>
                    <div className='flex flex-col md:flex-row items-start md:!gap-0 gap-2 md:!items-center justify-between'>
                        <p className='text-[#252a31] whitespace-nowrap min-w-[150px] text-sm'>انتخاب استان:</p>
                        <Select
                            defaultValue={stateSelectedOption}
                            onChange={setStateSelectedOption as any}
                            isClearable={true}
                            className='lg:!w-full md:w-[200px] w-full '
                            isRtl={true}
                            isSearchable={true}
                            options={stateOptions}
                            placeholder={'استان خود را انتخاب کنید'}
                        />
                    </div>

                    <div className='flex flex-col md:flex-row mt-2 items-start md:!gap-0 gap-2 md:!items-center justify-between'>
                        <p className='text-[#252a31] whitespace-nowrap min-w-[150px] text-sm'>انتخاب شهر:</p>
                        <Select
                            defaultValue={citySelectedOption}
                            onChange={setCitySelectedOption as any}
                            isDisabled={citySelectorDisabel}
                            isClearable={true}
                            className='lg:!w-full md:w-[200px] w-full '
                            isRtl={true}
                            isSearchable={true}
                            value={citySelectedOption}
                            options={cityOption}
                            placeholder={'شهر خود را انتخاب کنید'}
                        />
                    </div>

                    <div className='flex flex-col md:flex-row justify-between gap-2 mb-20 md:!mb-4'>
                        <p className='text-[#252a31] whitespace-nowrap text-sm min-w-[150px]'> آدرس دقیق:</p>
                        <div className='w-full '>
                            <Textarea className='h-[104px]' maxLength={250} setValue={setAddress} value={address} />
                            <span className='text-xs text-[#5f738c] mt-3'>آدرس اقامتگاه را با جزییات کامل وارد کنید تا میهمان پس از رزرو به راحتی بتوانند اقامتگاه را پیدا کنند.</span>
                        </div>
                    </div>
                    <ContentNavigator clickHandler={clickHandler} disablelPrevButton={true} disabelNextButton={disabelNextButton} prevLink={'/'} nextLink={'newRoom/step2'} />
                </div>
                <StepperInfo title="آدرس اقامتگاه" text="آدرس دقیق اقامتگاه, تنها پس ازقطعی شدن رزروبرای میهمان ارسال می گردد." />
            </div>
        </StepLayout>

    )
}

export default page
