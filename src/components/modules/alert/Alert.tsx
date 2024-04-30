import { alertVariants } from "@/src/utils/alertVariants"
import { cn } from "@/src/utils/cn"
import { VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes, FC } from "react"
import { BsInfoCircle } from "react-icons/bs"

 
export interface AlertPropss
  extends ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof alertVariants> { 
}

const Alert:FC<AlertPropss> = ({variant,className}) => {
    
    return (
        <div
        className={cn(alertVariants({ variant, className }))}> 
            <BsInfoCircle className='text-3xl relative bottom-1 ' />
            <div>
                <p>موقعیت مکانی (لوکیشن) را به دقت مشخص کنید.</p>
                <p className="leading-6 font-vazir font-light  my-2">لوکیشن ثبت شده برای مسیریابی به مهمانان ارسال می‌شود. طبق ضمانت تحویل جاجیگا، هرگونه مغایرت می‌تواند باعث لغو رزرو و عودت وجه به مهمان شود.</p>
            </div>
        </div>
    )
}

export default Alert
