import React, { FC } from 'react'
interface TextareaProps {
    value: string,
    setValue: any,
    maxLength: number,
    className?:string,
    placeholder?:string
}

const Textarea: FC<TextareaProps> = ({ maxLength, value, setValue,className,placeholder }) => {
    return (
        <div className={`relative`}>
            <textarea placeholder={placeholder} value={value} onChange={(event) => setValue(event.target.value)} className={`${className && className} w-full rounded-lg border-1 border-solid border-gray-300 ouline-none`} maxLength={maxLength} cols={30} rows={5}></textarea>
            <span className='absolute bottom-2 left-3 text-[#404040] text-sm'>{value?.length ? maxLength - value?.length : maxLength}</span>
        </div>
    )
}

export default Textarea


