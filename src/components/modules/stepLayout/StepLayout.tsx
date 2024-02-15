"use client"
import react, { FC } from 'react'
import Layout from '@/src/components/modules/Layout/Layout';
import Breadcrumb from '@/src/components/modules/breadcrumb/Breadcrumb';
import Container from '@/src/components/modules/container/Container';
import Stepper from '@/src/components/modules/stepper/Stepper';

interface StepLayoutProps {
    stepperActive: number,
    children: React.ReactElement
}
const StepLayout: FC<StepLayoutProps> = ({ stepperActive, children }) => {


    return (
        <Container disableFooter={true}>
            <Breadcrumb className='hidden md:block' route={'ثبت اقامتگاه'} />
            <Breadcrumb template={true} className='md:hidden block !py-0'>
                <Stepper active={stepperActive} />
            </Breadcrumb>
            <Layout>
                {children}
            </Layout>
        </Container>
    )
}

export default StepLayout
