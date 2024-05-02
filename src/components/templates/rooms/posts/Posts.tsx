"use client"
import Select from 'react-select';
import { useState } from 'react'  
import { GoDotFill } from "react-icons/go";
import { categoryFilterOptions  } from '@/src/utils/selectOptions'
import Card from '../../index/SpecialAccommodations/components/Card';
const Posts = () => {
  const [spaceSelectedOption, setSpaceSelectedOption] = useState<{ label: string; value: string; } | null>({ label: "جدید ترین", value:  "جدید ترین" });


  return (
    <div className="sm:!px-8 px-4 pb-5">
      <div className="flex items-center gap-1 mt-5">
        <GoDotFill className="text-customYellow" />
        <p className='text-xs font-light'>برای مشاهده نتایج دقیق‌تر، <strong>تاریخ سفر</strong> و <strong>تعداد نفرات</strong> را انتخاب نمایید</p>
      </div>

      <div className="mt-12">
        <div className='flex sm:!flex-row flex-col items-center justify-between'>
          <p className="text-sm"><strong>1466 اقامتگاه </strong> از <strong>300٬000</strong> <span className="text-xs">تومان</span></p>
          <Select
            defaultValue={spaceSelectedOption}
            onChange={setSpaceSelectedOption as any}
            isClearable={false}
            className='sm:!w-[160px] w-full sm:!mt-0 mt-3 text-sm font-vazir font-light '
            isRtl={true} 
            options={categoryFilterOptions} 
          />
        </div>
        <main className='grid lg:!grid-cols-[auto,auto,auto] sm:!grid-cols-[auto,auto] xl:!grid-cols-[auto,auto,auto,auto] justify-evenly mt-6 gap-3'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </main>
      </div>
    </div>
  )
}

export default Posts
