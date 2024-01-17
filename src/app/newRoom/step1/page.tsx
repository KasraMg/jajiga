"use client"
import Layout from '@/src/components/modules/Layout/Layout';
import Breadcrumb from '@/src/components/modules/breadcrumb/Breadcrumb';
import Container from '@/src/components/modules/container/Container';
import Stepper from '@/src/components/modules/stepper/Stepper';
import StepperInfo from '@/src/components/modules/stepperInfo/StepperInfo';
import { useState } from 'react';
import { SlLocationPin } from "react-icons/sl";
import { MultiSelect } from "react-multi-select-component";

const options = [
    { label: "آذربایجان شرقی", value: "آذربایجان شرقی" },
    { label: "آذربایجان غربی", value: "آذربایجان غربی" },
    { label: "اردبیل", value: "اردبیل", },
    { label: "اصفهان", value: "اصفهان", },
    { label: "البرز", value: "البرز", },
    { label: "ایلام", value: "ایلام", },
    { label: "بوشهر", value: "بوشهر", },
    { label: "تهران", value: "تهران", },
    { label: "چهارمحال و بختیاری", value: "چهارمحال و بختیاری", },
    { label: "خراسان جنوبی", value: "خراسان جنوبی", },
    { label: "خراسان رضوی", value: "خراسان رضوی", },
    { label: "خراسان شمالی", value: "خراسان شمالی", },
    { label: "خوزستان", value: "خوزستان", },
    { label: "زنجان ", value: "زنجان ", },
    { label: "سمنان ", value: "سمنان ", },
    { label: "سیستان و بلوچستان", value: "سیستان و بلوچستان", },
    { label: "فارس ", value: "فارس ", },
    { label: "قزوین ", value: "قزوین ", },
    { label: "قم ", value: "قم ", },
    { label: "کردستان ", value: "کردستان ", },
    { label: "کرمان ", value: "کرمان ", },
    { label: "کرمانشاه ", value: "کرمانشاه ", },
    { label: "کهگیلویه وبویراحمد", value: "کهگیلویه وبویراحمد", },
    { label: "گلستان ", value: "گلستان ", },
    { label: "گیلان ", value: "گیلان ", },
    { label: "لرستان ", value: "لرستان ", },
    { label: "مازندران ", value: "مازندران ", },
    { label: "مرکزی ", value: "مرکزی ", },
    { label: "هرمزگان ", value: "هرمزگان ", },
    { label: "همدان ", value: "همدان ", },
    { label: "یزد ", value: "یزد ", },
];


const page = () => {
    const [selectState, setSelectState] = useState([]);
    const [selectCity, setSelectCity] = useState([]);
    const ArrowRenderer = ({ expanded }: any) => <>{expanded ? <SlLocationPin /> : <SlLocationPin />}</>;
    return (
        <Container>
            <Breadcrumb route={'ثبت اقامتگاه'} />
            <Layout>
                <div className='max-w-[1120px] py-8  flex gap-5'>
                    <Stepper active={1} />
                    <div className='flex flex-col gap-8'>
                        <div className='flex gap-20 items-center justify-between'>
                            <p className='text-[#252a31] whitespace-nowrap text-sm'>انتخاب استان:</p>
                            <MultiSelect
                                options={options}
                                value={selectState}
                                hasSelectAll={false}
                                onChange={setSelectState}
                                labelledBy="Select"
                                className='w-80'
                                ArrowRenderer={ArrowRenderer}
                                overrideStrings={{ "selectSomeItems": "استان خود را انتخاب کنید" }}

                            />
                        </div>

                        <div className='flex gap-20 mt-2 items-center justify-between'>
                            <p className='text-[#252a31] whitespace-nowrap text-sm'>انتخاب شهر:</p>
                            <MultiSelect
                                options={options}
                                value={selectCity}
                                hasSelectAll={false}
                                onChange={setSelectCity}
                                labelledBy="Select"
                                className='w-80'
                                disabled={true}
                                ArrowRenderer={ArrowRenderer}
                                overrideStrings={{ "selectSomeItems": "شهر خود را انتخاب کنید" }}

                            />
                        </div>

                        <div className='flex gap-20 justify-between '>
                            <p className='text-[#252a31] whitespace-nowrap text-sm'> آدرس دقیق:</p>
                            <textarea style={{ boxShadow: 'none !important' }} className='w-80 rounded-md focus:border-1 focus:border-solid focus:!border-[#f0c807]' cols={30} rows={5}></textarea>
                        </div>
                    </div>
                    <StepperInfo />
                </div>
            </Layout>

        </Container>
    )
}

export default page
