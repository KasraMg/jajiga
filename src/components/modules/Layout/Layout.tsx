import React, { FC, ReactNode } from 'react'

 interface LayoutProps{
    className?:string
    bg:string
    children: ReactNode | undefined;
 }

 const Layout: FC<LayoutProps> = ({
    className,
    bg,
    children, 
  }) => { 
  return (
    <main className={`${className} bg-${bg} relative bottom-2 rounded-xl z-30 flex items-center justify-center px-5`}> 
      <div className='container'>
          {children}
      </div>
    </main>
  )
}

export default Layout
