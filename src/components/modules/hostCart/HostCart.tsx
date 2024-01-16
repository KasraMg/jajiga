"use client"
import { FC, useState } from 'react';
interface HostCartProps {
    title: string;
    description: string;
    icon: React.JSX.Element;
    borderColor: string;
    readMore?: boolean
}
const HostCart: FC<HostCartProps> = ({
    title,
    description,
    readMore,
    icon,
    borderColor,
}) => {
    const [readMoreStatus, setReadMoreStatus] = useState(false)
    return (
        <div
            className='relative rounded-md border-t-[2px] border-yellow-300 flex flex-col items-center justify-center space-y-2 bg-white p-4 h-full'
            style={{
                boxShadow: 'rgba(160, 160, 160, 0.7) 0px 3px 10px',
            }}
        >
            <div
                className='rounded-full p-[2px] -top-8 absolute'
                style={{
                    background: `${`linear-gradient(0deg, rgb(255, 200, 4) 0%, rgb(255, 200, 4) 50%, ${borderColor} 50%, ${borderColor} 100%)`}`,
                }}
            >
                <p
                    className={`rounded-full bg-yellow-300 border-4 text-4xl p-2`}
                    style={{ borderColor: `${borderColor}` }}
                >
                    {icon}
                </p>

            </div>
            <div className='py-4 flex flex-col items-center h-[-webkit-fill-available]'>
                <h3 className='my-4 font-medium text-center'>{title}</h3>
                <p className='text-sm text-textGray font-vazir-light text-justify leading-6'>
                    {readMore && !readMoreStatus ? (
                        <>
                            <> {description.slice(0, 175) + '...'} <span style={{ background: 'linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 75%, rgba(252, 176, 69, 0) 100%)' }} onClick={() => setReadMoreStatus(true)} className='relative -right-6 pr-4 text-blue-600 cursor-pointer'>بیشتر</span></>
                        </>
                    ) : (
                        <>
                            {description}

                        </>
                    )}

                </p>
            </div>
        </div>
    );
};

export default HostCart;

