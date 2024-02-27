import React from 'react';
import { IoHomeOutline, IoPeopleOutline } from 'react-icons/io5';
import { MdOutlineBedroomParent } from 'react-icons/md';
import { TbArrowAutofitHeight } from 'react-icons/tb';
const Summery = () => {
    return (
        <div className='w-full flex rounded-lg py-[14px] px-4 bg-[#f3f3f3] items-center justify-between'>
            <div className='flex items-center justify-center flex-col w-1/4'>
                <IoHomeOutline className='text-3xl' />
                <p className='text-xs mt-2'>دربست</p>
            </div>
            <div className='flex items-center justify-center flex-col w-1/4'>
                <IoPeopleOutline className='text-3xl' />
                <p className='text-xs mt-2'>تا 6 مهمان</p>
            </div>
            <div className='flex items-center justify-center flex-col w-1/4'>
                <MdOutlineBedroomParent className='text-3xl' />
                <p className='text-xs mt-2'>2 اتاق خواب</p>
            </div>
            <div className='flex items-center justify-center flex-col w-1/4'>
                <TbArrowAutofitHeight className='text-3xl' />
                <p className='text-xs mt-2'>150 متر</p>
            </div>
        </div>
    );
};

export default Summery;
