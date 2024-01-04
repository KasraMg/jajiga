import { FC } from 'react';
interface HostCartProps {
    className?: string;
}
import { BsSuitcase } from 'react-icons/bs';

const HostCart: FC<HostCartProps> = ({ className }) => {
    return (
        <div
            className={`rounded-md border-t-[2px] border-yellow-300 flex flex-col items-center justify-center space-y-2 p-4 ${className}`}
            style={{
                boxShadow: 'rgba(160, 160, 160, 0.7) 0px 3px 10px',
            }}
        >
            <div className='rounded-full testBg p-[2px] -translate-y-[3rem]'>
                <p className='rounded-full bg-yellow-300 border-white border-[3px] text-lg p-2'>
                    <BsSuitcase className='text-4xl' />
                </p>
            </div>
            <h3 className='text-lg font-medium'>
                چرا باید حساب کاربری خود را تکمیل کنم ؟
            </h3>
            <p className='text-sm text-textGray font-vazir-light'>
                تکمیل اطلاعات هویتی همچون کد ملی و آپلود کارت ملی موجب افزایش
                ایمنی کاربران جاجیگا بوده و زمینه ساز تعامل ایمن و توام با
                آسودگی کاربران با یکدیگر می‌باشد. تکمیل اطلاعات ارتباطی همچون
                ایمیل نیز باعث سهولت بیشتر در عملکرد سامانه و تسهیل در ارسال به
                موقع اعلان های فصلی و نکات و آموزش های دوره ای برای میزبان ها می
                شود.
            </p>
        </div>
    );
};

export default HostCart;
