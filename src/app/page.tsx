'use client';

import Layout from "../components/modules/Layout/Layout";
import PopularDestinations from "../components/templates/index/PopularDestinations/PopularDestinations";
import Intro from "../components/templates/index/intro/Intro";


export default function Home() {
  return (
    <main>
      <Intro />
      <Layout bg="white">
        <PopularDestinations />
      </Layout>
    </main>
  )
}
