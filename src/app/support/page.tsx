import Layout from '@/src/components/modules/Layout/Layout'
import Accordion from '@/src/components/modules/accordion/Accordion'
import Breadcrumb from '@/src/components/modules/breadcrumb/Breadcrumb'
import Navbar from '@/src/components/modules/navbar/Navbar'
import Form from '@/src/components/templates/support/Form/Form'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <Breadcrumb route='پشتیبانی' />
            <Layout className='!z-10' bg='white'>
                <div className='max-w-[815px] pt-10 mx-auto gap-4 flex'>
                    <div className='w-1/2'>
                        <Form />
                        <div className='flex mt-4 gap-2'>
                            <div style={{boxShadow: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px'}} className='w-1/2 p-2 text-center rounded-md pb-2 cursor-pointer'>
                                <svg width={28} className="sc-679cb2a8-0 jespqW mx-auto mb-1" fill="none" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 17H18C17.448 17 17 16.552 17 16V11C17 10.448 17.448 10 18 10H19C20.105 10 21 10.895 21 12V15C21 16.105 20.105 17 19 17Z" fill="#F0C807" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6 17H5C3.895 17 3 16.105 3 15V12C3 10.895 3.895 10 5 10H6C6.552 10 7 10.448 7 11V16C7 16.552 6.552 17 6 17Z" fill="#F0C807" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.5 10V9.5C18.5 5.91 15.59 3 12 3V3C8.41 3 5.5 5.91 5.5 9.5V10" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.625 21.25H11.375C10.685 21.25 10.125 20.69 10.125 20C10.125 19.31 10.685 18.75 11.375 18.75H12.625C13.315 18.75 13.875 19.31 13.875 20C13.875 20.69 13.315 21.25 12.625 21.25Z" fill="#F0C807" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.875 20H16C17.105 20 18 19.105 18 18V17" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                <p className='text-xs'>تماس</p>
                            </div>
                            <div style={{boxShadow: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px'}} className='w-1/2 p-2 text-center rounded-md pb-2 cursor-pointer'>
                                <svg width={28} className="sc-679cb2a8-0 jespqW mx-auto mb-1" fill="none" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M19.56 7.119a8.998 8.998 0 01.001 9.763M15.548 8.452a5.017 5.017 0 11-7.096 7.095 5.017 5.017 0 017.096-7.095" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.321 7.55l2.584-3.138a1.003 1.003 0 011.483-.072l1.273 1.273a1.002 1.002 0 01-.072 1.483L16.45 9.68" fill="#F0C807"></path><path d="M14.321 7.55l2.584-3.138a1.003 1.003 0 011.483-.072l1.273 1.273a1.002 1.002 0 01-.072 1.483L16.45 9.68" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.679 16.45l-2.584 3.138a1.003 1.003 0 01-1.483.072l-1.273-1.273a1.002 1.002 0 01.072-1.483L7.55 14.32" fill="#F0C807"></path><path d="M9.679 16.45l-2.584 3.138a1.003 1.003 0 01-1.483.072l-1.273-1.273a1.002 1.002 0 01.072-1.483L7.55 14.32" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.551 9.68l-3.14-2.585a1.003 1.003 0 01-.072-1.483L5.612 4.34a1.002 1.002 0 011.483.072l2.584 3.14" fill="#F0C807"></path><path d="M7.551 9.68l-3.14-2.585a1.003 1.003 0 01-.072-1.483L5.612 4.34a1.002 1.002 0 011.483.072l2.584 3.14" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.449 14.321l3.139 2.584c.457.376.49 1.064.072 1.483l-1.273 1.273a1.002 1.002 0 01-1.483-.072L14.32 16.45" fill="#F0C807"></path><path d="M16.449 14.321l3.139 2.584c.457.376.49 1.064.072 1.483l-1.273 1.273a1.002 1.002 0 01-1.483-.072L14.32 16.45M16.882 19.561a8.998 8.998 0 01-9.763 0M4.439 7.118a8.998 8.998 0 00.001 9.763M16.881 4.44a8.998 8.998 0 00-9.763-.001" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                <p className='text-xs'>سایر راه های ارتباطی</p>
                            </div>
                        </div>
                    </div>
                    <section className='w-1/2'>
                        <p className='text-center'>سوالات متداول</p>
                        <Accordion title="چطور رزرو کنم؟" text='پس از مشخص کردن تاریخ ورود و خروج و تعداد نفرات، درخواست رزرو خود را به‌صورت رایگان ثبت کنید تا برای میزبان ارسال ‌شود. میزبان در صورت خالی بودن و مهیا بودن اقامتگاه، رزرو را تایید می‌کند. سپس پیامکی مبنی بر تایید رزرو برای شما ارسال می‌شود و شما حداکثر 30 دقیقه فرصت خواهید داشت تا با پرداخت مبلغ صورتحساب، رزرو را قطعی کرده و سند رزرو حاوی صورتحساب، شماره تماس میزبان، آدرس اقامتگاه و سایر اطلاعات رزرو را دریافت کنید.' />
                        <Accordion title="چطور رزرو کنم؟" text='پس از مشخص کردن تاریخ ورود و خروج و تعداد نفرات، درخواست رزرو خود را به‌صورت رایگان ثبت کنید تا برای میزبان ارسال ‌شود. میزبان در صورت خالی بودن و مهیا بودن اقامتگاه، رزرو را تایید می‌کند. سپس پیامکی مبنی بر تایید رزرو برای شما ارسال می‌شود و شما حداکثر 30 دقیقه فرصت خواهید داشت تا با پرداخت مبلغ صورتحساب، رزرو را قطعی کرده و سند رزرو حاوی صورتحساب، شماره تماس میزبان، آدرس اقامتگاه و سایر اطلاعات رزرو را دریافت کنید.' />
                        <Accordion title="چطور رزرو کنم؟" text='پس از مشخص کردن تاریخ ورود و خروج و تعداد نفرات، درخواست رزرو خود را به‌صورت رایگان ثبت کنید تا برای میزبان ارسال ‌شود. میزبان در صورت خالی بودن و مهیا بودن اقامتگاه، رزرو را تایید می‌کند. سپس پیامکی مبنی بر تایید رزرو برای شما ارسال می‌شود و شما حداکثر 30 دقیقه فرصت خواهید داشت تا با پرداخت مبلغ صورتحساب، رزرو را قطعی کرده و سند رزرو حاوی صورتحساب، شماره تماس میزبان، آدرس اقامتگاه و سایر اطلاعات رزرو را دریافت کنید.' />
                        <Accordion title="چطور رزرو کنم؟" text='پس از مشخص کردن تاریخ ورود و خروج و تعداد نفرات، درخواست رزرو خود را به‌صورت رایگان ثبت کنید تا برای میزبان ارسال ‌شود. میزبان در صورت خالی بودن و مهیا بودن اقامتگاه، رزرو را تایید می‌کند. سپس پیامکی مبنی بر تایید رزرو برای شما ارسال می‌شود و شما حداکثر 30 دقیقه فرصت خواهید داشت تا با پرداخت مبلغ صورتحساب، رزرو را قطعی کرده و سند رزرو حاوی صورتحساب، شماره تماس میزبان، آدرس اقامتگاه و سایر اطلاعات رزرو را دریافت کنید.' />
                        <Accordion title="چطور رزرو کنم؟" text='پس از مشخص کردن تاریخ ورود و خروج و تعداد نفرات، درخواست رزرو خود را به‌صورت رایگان ثبت کنید تا برای میزبان ارسال ‌شود. میزبان در صورت خالی بودن و مهیا بودن اقامتگاه، رزرو را تایید می‌کند. سپس پیامکی مبنی بر تایید رزرو برای شما ارسال می‌شود و شما حداکثر 30 دقیقه فرصت خواهید داشت تا با پرداخت مبلغ صورتحساب، رزرو را قطعی کرده و سند رزرو حاوی صورتحساب، شماره تماس میزبان، آدرس اقامتگاه و سایر اطلاعات رزرو را دریافت کنید.' />
                        <Accordion title="چطور رزرو کنم؟" text='پس از مشخص کردن تاریخ ورود و خروج و تعداد نفرات، درخواست رزرو خود را به‌صورت رایگان ثبت کنید تا برای میزبان ارسال ‌شود. میزبان در صورت خالی بودن و مهیا بودن اقامتگاه، رزرو را تایید می‌کند. سپس پیامکی مبنی بر تایید رزرو برای شما ارسال می‌شود و شما حداکثر 30 دقیقه فرصت خواهید داشت تا با پرداخت مبلغ صورتحساب، رزرو را قطعی کرده و سند رزرو حاوی صورتحساب، شماره تماس میزبان، آدرس اقامتگاه و سایر اطلاعات رزرو را دریافت کنید.' />
                        <Accordion title="چطور رزرو کنم؟" text='پس از مشخص کردن تاریخ ورود و خروج و تعداد نفرات، درخواست رزرو خود را به‌صورت رایگان ثبت کنید تا برای میزبان ارسال ‌شود. میزبان در صورت خالی بودن و مهیا بودن اقامتگاه، رزرو را تایید می‌کند. سپس پیامکی مبنی بر تایید رزرو برای شما ارسال می‌شود و شما حداکثر 30 دقیقه فرصت خواهید داشت تا با پرداخت مبلغ صورتحساب، رزرو را قطعی کرده و سند رزرو حاوی صورتحساب، شماره تماس میزبان، آدرس اقامتگاه و سایر اطلاعات رزرو را دریافت کنید.' />
                    </section>
                </div>
            </Layout>
        </>
    )
}

export default page
