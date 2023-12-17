'use client';

import Layout from '../components/modules/Layout/Layout';
import Ads from '../components/templates/index/Ads/Ads';
import BecomeHost from '../components/templates/index/BecomeHost/BecomeHost';
import FastSearch from '../components/templates/index/FastSearch/FastSearch';
import Offers from '../components/templates/index/Offers/Offers';

import PopularDestinations from '../components/templates/index/PopularDestinations/PopularDestinations';
import SpecialAccommodations from '../components/templates/index/SpecialAccommodations/SpecialAccommodations';

import SupperOffers from '../components/templates/index/SuperOffers/SuperOffers';

import Intro from '../components/templates/index/intro/Intro';
import Footer from '../components/modules/Footer/Footer';
export default function Home() {
    return (
        <main>
            <Intro />
            <Layout bg='white'>
                <PopularDestinations />
                <FastSearch />
                <Ads />
                <SpecialAccommodations />
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
            </Layout>
            <Footer />
        </main>
    );
}
