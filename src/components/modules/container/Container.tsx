import React, { FC, ReactElement } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../navbar/Navbar'

interface ContainerProps{
    children:React.ReactNode,
    disableFooter?:boolean
}
const Container:FC<ContainerProps> = ({ children,disableFooter }) => {
    
    return (
        <>
            <Navbar />
                {children}
                {disableFooter ?  null :(
                    <Footer />
                )}
            
        </>
    )
}

export default Container
