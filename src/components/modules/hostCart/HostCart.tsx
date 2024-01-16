import { FC } from 'react';
interface HostCartProps {
    title: string;
    description: string;
    icon: React.JSX.Element;
    borderColor: string;
}
const HostCart: FC<HostCartProps> = ({
    title,
    description,
    icon,
    borderColor,
}) => {
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
                    className={`rounded-full bg-yellow-300 border-[3px] text-4xl p-2`}
                    style={{ borderColor: `${borderColor}` }}
                >
                    {icon}
                </p>  

            </div>
            <div className='py-4'>
                <h3 className='my-4 font-medium text-center'>{title}</h3>
                <p className='text-sm text-textGray font-vazir-light text-justify '>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default HostCart;
