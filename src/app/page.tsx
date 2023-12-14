'use client';

import Layout from '../components/modules/Layout/Layout';
import Offers from '../components/templates/index/Offers/Offers';
import PopularDestinations from '../components/templates/index/PopularDestinations/PopularDestinations';
import Intro from '../components/templates/index/intro/Intro';

export default function Home() {
    return (
        <main>
            <Intro />
            <Layout bg='white'>
                <PopularDestinations />
                <Offers />
                <Offers />
            </Layout>
        </main>
    );
}
