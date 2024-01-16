
import Footer from '@/src/components/modules/Footer/Footer';
import Layout from '@/src/components/modules/Layout/Layout';
import Breadcrumb from '@/src/components/modules/breadcrumb/Breadcrumb';
import HostCart from '@/src/components/modules/hostCart/HostCart';
import Navbar from '@/src/components/modules/navbar/Navbar';
import { IoMdCheckmark } from "react-icons/io";
import { TbHomePlus } from "react-icons/tb";
const page = () => {
    return (
        <>
            <Navbar/>
            <Breadcrumb route={'ثبت اقامتگاه'} />
            <Layout>
                <div className='gap-10 max-w-[860px] mx-auto grid grid-cols-[auto] lg:!grid-cols-[auto,auto] lf:!gap-5 justify-center mb-6 mt-20'>
                    <HostCart readMore={true} borderColor='white' icon={<IoMdCheckmark />} title='صحت اطلاعات' description='مطمئن شوید که نمایه اقامتگاه خود را منطبق با واقعیت تنظیم می کنید. به هیچ عنوان امکاناتی که در منزل فراهم نیست را ثبت نکنید و یا از عکسهای غیر واقعی استفاده نکنید. همچنین در صورتی که عیب, نقص یا مشکلی در اقامتگاه وجود دارد, در توضیحات اقامتگاه ذکر کنید و تصاویر آن را اضافه کنید. مطابق ضمانت تحویل اقامتگاه جاجیگا، درصورت اثبات عدم مطابقت اقامتگاه تحویل شده, رزرو لغو گردیده و کل ‏وجه دریافتی به میهمان بازگردانده خواهد شد.' />
                    <HostCart readMore={true} borderColor='white' icon={<TbHomePlus />} title='لغو مراحل ثبت' description='در صورتی که قادر به اتمام مراحل ثبت اقامتگاه نباشید, می توانید با کلیک بر گزینه "لغو و خروج" در بالای صفحه, مراحل ثبت را نیمه کاره بگذارید. اطلاعات وارد شده تا همان مرحله ذخیره می شود و می توانید در فرصت بعدی مراحل ثبت اقامتگاه را به پایان برسانید. پس با خیال راحت, ثبت اقامتگاه خود را شروع کنید.' />
                </div>
                <button className='outline-0 border-0 max-w-[860px] mx-auto block my-8 mb-12 w-full rounded-full bg-[#f0c807] py-2'>شروع ثبت اقامتگاه</button>
            </Layout>
            <Footer/>

        </>
    )
}

export default page
