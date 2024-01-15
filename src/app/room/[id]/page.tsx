import Navbar from '@/src/components/modules/navbar/Navbar';
import Footer from '@/src/components/modules/Footer/Footer';
import Badge from '@/src/components/modules/badge/Badge';
import Breadcrumb from '@/src/components/modules/breadcrumb/Breadcrumb';
const Room = () => {
    return (
        <>
            <Navbar />
            <div className='Container !mt-20'>
                <div className='flex gap-x-3 mb-4'>
                    <div className='w-1/2'>
                        <img
                            src='https://storage.jajiga.com/public/pictures/large/3148120230111161402.jpg'
                            alt=''
                            className='w-full rounded-lg !object-contain'
                        />
                    </div>
                    <div className='grid gap-3 grid-cols-2 w-1/2'>
                        <div>
                            <img
                                src='https://storage.jajiga.com/public/pictures/large/3148120230111161402.jpg'
                                alt=''
                                className='w-full rounded-lg'
                            />
                        </div>
                        <div>
                            <img
                                src='https://storage.jajiga.com/public/pictures/large/3148120230111161402.jpg'
                                alt=''
                                className='w-full rounded-lg'
                            />
                        </div>
                        <div>
                            <img
                                src='https://storage.jajiga.com/public/pictures/large/3148120230111161402.jpg'
                                alt=''
                                className='w-full rounded-lg'
                            />
                        </div>
                        <div>
                            <img
                                src='https://storage.jajiga.com/public/pictures/large/3148120230111161402.jpg'
                                alt=''
                                className='w-full rounded-lg'
                            />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-start'>
                    <div className='flex flex-col'>
                        <Breadcrumb routes={['مازندران','رامسر']} />
                        <p>اجاره ویلا استخردار در رامسر</p>
                        <div className='flex mt-5 gap-x-1'>
                            <Badge bgColor='bg-yellow-300'>کد:303030</Badge>
                            <Badge bgColor='bg-[#f1f1f1]'>+300 رزرو موفق</Badge>
                            {/* stars component */}
                        </div>
                    </div>
                    <div className='w-[72px] h-[72px]'>
                        <img
                            src='https://storage.jajiga.com/public/avatar/small/1910012115521179193.jpg'
                            alt=''
                            className='w-full h-full rounded-full'
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Room;
