 
import { IoStatsChart } from "react-icons/io5";
const Box = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className='w-full p-4 bg-[#dc26261c] rounded-lg'>
      <span>{value}</span>
      <div className="flex justify-between items-center">
        <p className="sm:!text-base text-xs">{title}</p>
        <IoStatsChart className='text-red-600 text-2xl' />
      </div>
    </div>
  );
};

export default Box;
 