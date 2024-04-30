import React from 'react'
import { GoDotFill } from "react-icons/go";
const Rules = () => {
    return (
        <div className='w-full border-gray-300 border-solid border border-x-0 mt-8'>
            <h2 className='text-lg text-[#252a31] my-4  '>مقررات</h2>
            <ul className='[&>*]:font-vazir font-light  space-y-2 [&>*]:flex [&>*]:gap-3 [&>*]:items-center pb-8'>
                <li>
                    <GoDotFill />
                    برگزاری مهمانی و پخش موزیک ممنوع است .
                </li>
                <li>
                    <GoDotFill />
                    برگزاری مهمانی و پخش موزیک ممنوع است.
                </li>
                <li>
                    <GoDotFill />
                    برگزاری مهمانی و پخش موزیک ممنوع است.
                </li>
                <li>
                    <GoDotFill />
                    برگزاری مهمانی و پخش موزیک ممنوع است.
                </li>
            </ul>
        </div>
    )
}

export default Rules
