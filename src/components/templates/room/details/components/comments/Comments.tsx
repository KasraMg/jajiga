import Image from 'next/image'
import { FaStar } from "react-icons/fa";
const Comments = () => {
    return (
        <div className='w-full pb-8'>
            <p className='text-lg text-[#252a31] my-6 mb-4'>نظر مهمانان <span className='text-sm'>(15 نظر)</span></p>
            <div className='mt-6'>

                <section className='mb-6 border-b border-solid border-gray-200 pb-4'>
                    <div className='flex justify-between'>
                        <div className='flex gap-3 items-center'>
                            <Image className='rounded-full object-cover w-14 h-14' alt='author' width={1000} height={1000} src={'/images/about/about_img6.jpg'} />
                            <div>
                                <p>پریا</p>
                                <span className='text-sm text-gray-500'>07 دی 1402</span>
                            </div>
                        </div>
                        <div className='flex gap-1 text-xs'>
                            <FaStar className='text-orange-500' />
                            <FaStar className='text-orange-500' />
                            <FaStar className='text-orange-500' />
                            <FaStar className='text-orange-500' />
                            <FaStar className='text-orange-500' />
                        </div>
                    </div>
                    <p className='text-sm font-vazir font-light  mt-5'>عالی بود، از همه چیز راضی بودیم</p>
                    <section className='bg-[#f3f3f3] p-2 mt-3 rounded-md mx-3'>
                        <div className='flex gap-3 items-center'>
                            <Image className='rounded-full object-cover w-10 h-10' alt='author' width={1000} height={1000} src={'/images/about/about_img6.jpg'} />
                            <div>
                                <p className='text-sm'>پاسخ میزبان</p>
                                <span className='text-sm text-gray-500'>07 دی 1402</span>
                            </div>
                        </div>
                        <p className='text-sm font-vazir font-light  mt-5'>عالی بود، از همه چیز راضی بودیم</p>
                    </section>
                </section>
                <section className='mb-6 border-b border-solid border-gray-200 pb-4'>
                    <div className='flex justify-between'>
                        <div className='flex gap-3 items-center'>
                            <Image className='rounded-full object-cover w-14 h-14' alt='author' width={1000} height={1000} src={'/images/about/about_img6.jpg'} />
                            <div>
                                <p>پریا</p>
                                <span className='text-sm text-gray-500'>07 دی 1402</span>
                            </div>
                        </div>
                        <div className='flex gap-1 text-xs'>
                            <FaStar className='text-orange-500' />
                            <FaStar className='text-orange-500' />
                            <FaStar className='text-orange-500' />
                            <FaStar className='text-orange-500' />
                            <FaStar className='text-orange-500' />
                        </div>
                    </div>
                    <p className='text-sm font-vazir font-light  mt-5'>عالی بود، از همه چیز راضی بودیم</p>
                </section>
                <section className='mb-6'>
                    <div className='flex justify-between'>
                        <div className='flex gap-3 items-center'>
                            <Image className='rounded-full object-cover w-14 h-14' alt='author' width={1000} height={1000} src={'/images/about/about_img6.jpg'} />
                            <div>
                                <p>پریا</p>
                                <span className='text-sm text-gray-500'>07 دی 1402</span>
                            </div>
                        </div>
                        <div className='flex gap-1 text-xs'>
                            <FaStar className='text-orange-500' />
                            <FaStar className='text-orange-500' />
                            <FaStar className='text-orange-500' />
                            <FaStar className='text-orange-500' />
                            <FaStar className='text-orange-500' />
                        </div>
                    </div>
                    <p className='text-sm font-vazir font-light  mt-5'>عالی بود، از همه چیز راضی بودیم</p>
                </section>


            </div>
        </div>
    )
}

export default Comments
