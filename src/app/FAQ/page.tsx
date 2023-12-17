import Layout from '@/src/components/modules/Layout/Layout'
import Breadcrumb from '@/src/components/modules/breadcrumb/Breadcrumb'
import Navbar from '@/src/components/modules/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb route='سوالات متداول' />
      <Layout className='!z-10' bg='white'>
<p>//code</p>

       </Layout>
    </>
  )
}

export default page
