import React from 'react'  
import Slider from '@/src/components/modules/slider/Slider'
import Card from './components/Card'

const SpecialAccommodations = () => {
    return (
        <div>
            <p className='text-xl'>اقامتگاه های خاص</p>
            <span className='text-sm text-[#666] mb-1'>اﻗﺎﻣﺘﮕﺎه‌ﻫﺎی متفاوت و جذاب ﺑﺮای اﻓﺮاد ﺧﺎص</span>
            <Slider
                Card={Card}
                navigation={true}
                className='mt-4 mb-12  sm:!pl-6'
                breakPoints={{
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                }}
            />
        </div>
    )
}

export default SpecialAccommodations
