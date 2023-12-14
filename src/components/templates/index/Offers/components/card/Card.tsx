import React from 'react';

const Card = () => {
    return (
        <section className=''>
            <img
                className='rounded-2xl w-full h-52'
                src='https://storage.jajiga.com/public/pictures/large/3153949201117121900.jpg'
            />
            <div>
                <p>اجاره ویلا دوبلکس در نوشهر - ونوش</p>
                <div className='flex space-x-3'>
                    <p>4 خوابه</p>
                    <p>400 متر</p>
                    <p>10 مهمان</p>
                </div>
            </div>
        </section>
    );
};

export default Card;
