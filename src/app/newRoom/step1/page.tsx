 
import Layout from '@/src/components/modules/Layout/Layout';
import Breadcrumb from '@/src/components/modules/breadcrumb/Breadcrumb'; 
import Container from '@/src/components/modules/container/Container'; 
const page = () => {
    return (
        <Container> 
            <Breadcrumb route={'ثبت اقامتگاه'} />
            <Layout>
               <p>ddd</p>
            </Layout>
            
        </Container>
    )
}

export default page
