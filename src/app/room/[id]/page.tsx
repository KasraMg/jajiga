import Navbar from '@/src/components/modules/navbar/Navbar';
import Footer from '@/src/components/modules/Footer/Footer';
const Room = () => {
    return (
        <>
            <Navbar />
            <div className='Container !mt-20'>
                <div className='flex gap-x-3'>
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
            </div>
            <Footer />
        </>
    );
};

export default Room;
