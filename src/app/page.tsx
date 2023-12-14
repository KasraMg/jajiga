'use client';

import Layout from '../components/modules/Layout/Layout';
import BecomeHost from '../components/templates/index/BecomeHost/BecomeHost';
import Offers from '../components/templates/index/Offers/Offers';
import PopularDestinations from '../components/templates/index/PopularDestinations/PopularDestinations';
import SupperOffers from '../components/templates/index/SuperOffers/SuperOffers';
import Intro from '../components/templates/index/intro/Intro';

export default function Home() {
    return (
        <main>
            <Intro />
            <Layout bg='white'>
                <PopularDestinations />
            </Layout>
            <SupperOffers />
            <Layout bg='white'>
                <Offers />
                <Offers />
                <BecomeHost />
                <Offers />
                <Offers />
                {/* comment component */}
                <Offers />
                {/* footer */}
            </Layout>
        </main>
    );
}
