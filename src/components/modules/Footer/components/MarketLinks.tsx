import { FC } from 'react';

interface ImageSrc {
    src: string;
}

const MarketLinks:FC<ImageSrc> = ({ src }) => {
    return (
        <>
            <div className='px-2 py-1 w-full h-full bg-black rounded-lg'>
                <img src={src} alt='' className='w-full' />
            </div>
        </>
    );
};

export default MarketLinks;
