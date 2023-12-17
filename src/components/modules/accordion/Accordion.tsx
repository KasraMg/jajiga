import React, { FC } from 'react'

interface AccordionProps {
    className?: string,
    title: string,
    text: string
}

const Accordion: FC<AccordionProps> = ({
    className,
    title,
    text
}) => {
    return (
        <div style={{ boxShadow: ' rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px' }} className={`${className} grid divide-y w-full divide-neutral-200 border-b border-1 border-solid px-2 border-[#00000055] mx-auto mt-5`}>
            <div className="py-2 pb-3">
                <details className="group transition">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span className=' text-sm'>{title}</span>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="text-[#404040] text-sm mt-6 leading-6 group-open:animate-fadeIn ">
                        {text}
                    </p>
                </details>

            </div>
        </div>
    )
}

export default Accordion
