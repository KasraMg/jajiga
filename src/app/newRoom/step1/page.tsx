"use client"
import Layout from '@/src/components/modules/Layout/Layout';
import Breadcrumb from '@/src/components/modules/breadcrumb/Breadcrumb';
import Container from '@/src/components/modules/container/Container';
import Stepper from '@/src/components/modules/stepper/Stepper';
import StepperInfo from '@/src/components/modules/stepperInfo/StepperInfo';
import useStateData from '@/src/hooks/useStateData';
import { useEffect, useState } from 'react';
import { SlLocationPin } from "react-icons/sl";
import Select from 'react-select';

const stateOptions = useStateData()


const page = () => {
    const [textAreaValue,settextAreaValue]=useState<string>()
    const [stateSelectedOption, setStateSelectedOption] = useState<{ label: string; value: string[]; } | null>(null);
    const [citySelectedOption, setCitySelectedOption] = useState<{ label: string; value: string[]; } | null>(null);
    const [cityOption, setCityOption] = useState<{
        label: string,
        value: string[]
    }[]>([]);
    const [isDisabled, setIsDisabled] = useState(true);
    const [isLodaing, setIsLodaing] = useState(false)
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
            setIsDisabled(false)
            setIsLodaing(false)
        }

    }, [stateSelectedOption])

    return (
        <Container>
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
                                isDisabled={isDisabled}
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
                            <div className='relative w-80 '>
                                <textarea value={textAreaValue} onChange={(event)=>settextAreaValue(event.target.value)} maxLength={250} className='w-full rounded-md focus:border-1 focus:border-solid focus:!border-[#f0c807]' cols={30} rows={5}></textarea>
                                <span className='absolute bottom-2 left-2 text-[#404040] text-sm'>{textAreaValue?.length ? 250 - textAreaValue?.length : '250'}</span>
                            </div>

                        </div>
                    </div>
                    <StepperInfo title="آدرس اقامتگاه" text="آدرس دقیق اقامتگاه, تنها پس ازقطعی شدن رزروبرای میهمان ارسال می گردد." />
                </div>
            </Layout>

        </Container>
    )
}

export default page
