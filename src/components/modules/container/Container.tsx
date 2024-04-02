import React, { FC, ReactElement } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../navbar/Navbar'
import MobileMenu from '../mobileMenu/MobileMenu'

interface ContainerProps {
    children: React.ReactNode,
    disableFooter?: boolean
}
const Container: FC<ContainerProps> = ({ children, disableFooter }) => {

    return (
        <>
            <Navbar />
            {children}
            <MobileMenu />
            {!disableFooter && <Footer />}

        </>
    )
}

export default Container
