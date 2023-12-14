 
import React from 'react'
import Card from './components/Card'
import Slider from '@/src/components/modules/slider/Slider'

const FastSearch = () => {
    return (
        <section className=' text-right pb-5'>
            <p className='text-black text-xl mb-5'>جستجوی سریع</p>
            <Slider
                Card={Card}
                navigation={true}
                breakPoints={{
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 15
                    }
                }}
            />
        </section>
    )
}

export default FastSearch
