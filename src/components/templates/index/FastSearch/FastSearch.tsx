 
import React from 'react' 
import Slider from '@/src/components/modules/slider/Slider'
import Card from './components/Card'

const FastSearch = () => {
    return (
        <section className=' text-right pb-5'>
            <p className='text-black text-xl mb-5'>جستجوی سریع</p>
            <Slider
                Card={Card}
                navigation={true}
                className='sm:!pl-6'
                breakPoints={{
                    320:{
                        slidesPerView:2,
                        spaceBetween:15
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    },
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
