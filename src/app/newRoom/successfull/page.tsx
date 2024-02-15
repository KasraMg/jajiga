
"use client"
import Layout from '@/src/components/modules/Layout/Layout';
import Breadcrumb from '@/src/components/modules/breadcrumb/Breadcrumb';
import Container from '@/src/components/modules/container/Container'; 
import Link from 'next/link'; 

const page = () => {
 

    return (
        <Container disableFooter={true}>
            <Breadcrumb route={'ثبت اقامتگاه'} />
            <Layout>
                <div className='max-w-[1120px] py-8 flex flex-col justify-center gap-5'>
                <img width="110" height="110" className='mx-auto mt-20' src="https://img.icons8.com/3d-fluency/94/verified-account.png" alt="verified-account"/>
                    <p className='sm:!text-2xl text-xl mt-3 text-center'>اقامتگاه شما با موفقیت ثبت شد</p>
                    <Link className='text-blue-600 text-sx text-center' href={'/'}>مشاهده اقامتگاه</Link>
                </div>
            </Layout>
        </Container>
    )
}

export default page
