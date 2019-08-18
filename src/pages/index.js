import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Events from '../sections/Events';
import Sponsors from '../sections/Sponsors';
import Writing from '../sections/Writing';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Events />
    <Writing />
    <Footer />
  </Layout>
);

export default IndexPage;
