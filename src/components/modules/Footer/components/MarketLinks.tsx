import { FC } from 'react';

interface ImageSrc {
    src: string;
}

const MarketLinks:FC<ImageSrc> = ({ src }) => {
    return (
        <>
            <div className='px-2 py-1 lg:!w-full w-full sm:!w-[150px] md:!w-[147px] h-full bg-black rounded-lg'>
                <img src={src} alt='' className='w-full' />
            </div>
        </>
    );
};

export default MarketLinks;
