
"use client"
import Layout from '@/src/components/modules/Layout/Layout';
import Breadcrumb from '@/src/components/modules/breadcrumb/Breadcrumb';
import Container from '@/src/components/modules/container/Container';
import ContentNavigator from '@/src/components/modules/contentNavigator/ContentNavigator';
import Stepper from '@/src/components/modules/stepper/Stepper';
import StepperInfo from '@/src/components/modules/stepperInfo/StepperInfo';
import { ChangeEvent, useEffect, useState } from 'react';

const page = () => {

    const [disabelNextButton, setDisabelNextButton] = useState<boolean>(true)

    const season = [{
        title: 'فصل بهار',
        id: 1,
        avatar: ' https://www.jajiga.com/static/img/pricing/spring.png'
    },
    {
        title: 'فصل تابستان',
        id: 2,
        avatar: 'https://www.jajiga.com/static/img/pricing/summer.png'
    },
    {
        title: 'فصل پاییز',
        id: 3,
        avatar: 'https://www.jajiga.com/static/img/pricing/autumn.png'
    },
    {
        title: 'فصل زمستان',
        id: 4,
        avatar: 'https://www.jajiga.com/static/img/pricing/winter.png'
    }
    ]


    const [seasonDatas, setseasonDatas] = useState([
        {
            id: 1,
            Data: [{
                title: 'وسط هفته',
                amount: '',
            },
            {
                title: 'آخر هفته',
                amount: '',
            },
            {
                title: 'تعطیلات',
                amount: '',
            }]


        },
        {
            id: 2,
            Data: [
                {
                    title: 'وسط هفته',
                    amount: '',
                },
                {
                    title: 'آخر هفته',
                    amount: '',
                },
                {
                    title: 'تعطیلات',
                    amount: '',
                }]
        },
        {
            id: 3,
            Data: [
                {
                    title: 'وسط هفته',
                    amount: '',
                },
                {
                    title: 'آخر هفته',
                    amount: '',
                },
                {
                    title: 'تعطیلات',
                    amount: '',
                }]
        },
        {
            id: 4,
            Data: [
                {
                    title: 'وسط هفته',
                    amount: '',
                },
                {
                    title: 'آخر هفته',
                    amount: '',
                },
                {
                    title: 'تعطیلات',
                    amount: '',
                }]
        },
    ]
    )


    const midweekHandler = (event: ChangeEvent<HTMLInputElement>, id: number, date: string) => {
        const seasonId = id - 1
        const season = seasonDatas[seasonId]
        season.Data.find((data) => {
            if (data.title == date) {
                return data.amount = event.target.value
            }
        })  
            seasonDatas.map(season => {
            season.Data.map(data => {
                if (data.amount.length) {
                    setDisabelNextButton(false)
                }else(
                    
                    setDisabelNextButton(true)
                )
            })
        })
    }
    const lastWeekendHandler = (event: ChangeEvent<HTMLInputElement>, id: number, date: string) => {
        const seasonId = id - 1
        const season = seasonDatas[seasonId]

        season.Data.find((data) => {
            if (data.title == date) {
                return data.amount = event.target.value
            }
        }) 
            seasonDatas.map(season => {
            season.Data.map(data => {
                if (data.amount.length) {
                    setDisabelNextButton(false)
                }else(
                    
                    setDisabelNextButton(true)
                )
            })
        })
    }
    const holidaysHandler = (event: ChangeEvent<HTMLInputElement>, id: number, date: string) => {
        const seasonId = id - 1
        const season = seasonDatas[seasonId]
        season.Data.find((data) => {
            if (data.title == date) {
                return data.amount = event.target.value
            }
        }) 
            seasonDatas.map(season => {
            season.Data.map(data => {
                if (data.amount.length !==0) {
                    setDisabelNextButton(false)
                }else(
                    
                    setDisabelNextButton(true)
                )
            })
        })
    }
 

    return (
        <Container disableFooter={true}>
            <Breadcrumb route={'ثبت اقامتگاه'} />
            <Layout>
                <div className='max-w-[1120px] py-8 flex gap-5'>
                    <Stepper active={8} />
                    <div className='w-full space-y-4 mb-20'>
                        <div className='flex justify-between items-center'>
                            <p>نرخ تعطیلات نوروز</p>
                            <div className='relative'>
                                <input type="number" dir='ltr' className='p-2 pl-14 rounded-md w-80' />
                                <span className='text-gray-500 absolute top-2 left-2'>تومان</span>
                            </div>
                        </div>
                        {season && season.map(data => (
                            <div style={{ boxShadow: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;' }} className={`grid divide-y w-full divide-neutral-200 border-b border-1 border-solid px-2 border-[#00000055] mx-auto mt-5`}>
                                <div className="py-2 pb-3">
                                    <details className="group transition">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                            <div>
                                                <div className='flex gap-3 items-center'>
                                                    <img className='h-8 rounded-full w-8' src={data.avatar} alt="" />
                                                    <p className=' font-vazir-bold '>{data.title}</p>
                                                </div>
                                                <p className='mt-2 text-sm mb-3'>تکمیل قیمت‌های این فصل اجباری است</p>
                                            </div>
                                            <span className="transition group-open:rotate-180">
                                                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </summary>
                                        <div className='flex justify-between items-center'>
                                            <p>وسط هفته</p>
                                            <div className='relative'>
                                                <input onChange={event => midweekHandler(event, data.id, 'وسط هفته')} type="number" dir='ltr' className='p-2 pl-14 rounded-md w-80' />
                                                <span className='text-gray-500 absolute top-2 left-2'>تومان</span>
                                            </div>
                                        </div>
                                        <div className='flex justify-between items-center my-4'>
                                            <p>آخر هفته و تعطیلات عادی</p>
                                            <div className='relative'>
                                                <input onChange={event => lastWeekendHandler(event, data.id, 'آخر هفته')} type="number" dir='ltr' className='p-2 pl-14 rounded-md w-80' />
                                                <span className='text-gray-500 absolute top-2 left-2'>تومان</span>
                                            </div>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <p>ایام پیک</p>
                                            <div className='relative'>
                                                <input onChange={event => holidaysHandler(event, data.id, 'تعطیلات')} type="number" dir='ltr' className='p-2 pl-14 rounded-md w-80' />
                                                <span className='text-gray-500 absolute top-2 left-2'>تومان</span>
                                            </div>
                                        </div>
                                    </details>

                                </div>
                            </div>
                        ))}

                        <ContentNavigator disablelPrevButton={false} disabelNextButton={disabelNextButton} prevLink={'newRoom/step7'} nextLink={'newRoom/step9'} />
                    </div>
                    <div className='max-w-[243px]'>
                        <StepperInfo title="تعیین اجاره بها" text="برای آسانتر شدن نرخ گذاری اقامتگاه در روزهای مختلف سال, پس از تعیین نرخهای زیر توسط شما, این نرخها با رعایت روزهای عادی و تعطیل هفته در فصول مختلف سال, بصورت خودکار در تقویم اقامتگاه شما اعمال خواهد گردید.وسط هفته: روزهای شنبه تا چهارشنبه هر هفته. آخر هفته: روزهای پنجشنبه و جمعه و تعطیلات عادی. ایام پیک: تعطیلات خاص و پر مسافر.توجه: شما همچنین می توانید با مراجعه به تقویم موجود در صفحه ویرایش اقامتگاه, اجاره بهای روزهای خاص را بصورت دستی تغییر دهید." />
                    </div>

                </div>
            </Layout>
        </Container>
    )
}

export default page
