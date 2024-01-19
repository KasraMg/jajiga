import { BsInfo, BsInfoCircle } from "react-icons/bs"


const Alert = () => {
    return (
        <div className="flex gap-3 p-4 rounded-lg bg-[#faeaea]">
            <BsInfoCircle className='text-3xl relative bottom-1 ' />
            <div>
                <p className="text-[#970c0c] text-[13px] ">موقعیت مکانی (لوکیشن) را به دقت مشخص کنید.</p>
                <p className="text-[#970c0c] text-[13px] leading-6 font-vazir-light my-2">لوکیشن ثبت شده برای مسیریابی به مهمانان ارسال می‌شود. طبق ضمانت تحویل جاجیگا، هرگونه مغایرت می‌تواند باعث لغو رزرو و عودت وجه به مهمان شود.</p>
            </div>
        </div>
    )
}

export default Alert
