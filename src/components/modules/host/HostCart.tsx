import { FC } from 'react';
interface HostCartProps {
    title: string;
    description: string;
    icon: string;
}
import { BsSuitcase } from 'react-icons/bs';

const HostCart: FC<HostCartProps> = ({ title, description, icon }) => {
    return (
        <div
            className='relative rounded-md border-t-[2px] border-yellow-300 flex flex-col items-center justify-center space-y-2 bg-white p-4'
            style={{
                boxShadow: 'rgba(160, 160, 160, 0.7) 0px 3px 10px',
            }}
        >
            <div className='rounded-full testBg p-[2px] -top-8 absolute'>
                <p className='rounded-full bg-yellow-300 border-white border-[3px] text-lg p-2'>
                    <BsSuitcase className='text-4xl' />
                </p>
            </div>
            <div className='py-4'>
                <h3 className='mb-4 font-medium'>{title}</h3>
                <p className='text-sm text-textGray font-vazir-light'>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default HostCart;
