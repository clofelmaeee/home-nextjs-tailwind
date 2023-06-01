/* eslint-disable @next/next/no-head-element */
import { Inter } from 'next/font/google'
import homePageData from '../../static-data/home'
import Banner from '@/components/banner'
import AboutUs from '@/components/about-us'
import Products from '@/components/products'
import Clients from '@/components/clients'
import ContactUs from '@/components/contact-us'
import Head from 'next/head'
import Footer from '@/components/footer'



// posts will be populated at build time by getStaticProps()
export default function Home({ home, footerData }) {

  // console.log(footerData)
  return (
      <>
        <Banner home={home} />

        <AboutUs home={home} />

        <Products home={home} />

        <Clients clients={home.clients} />

        <ContactUs contact={home.contact} form={home.form} />
      </>
  );
}
export async function getStaticProps() {
  const home = homePageData;
  return {
    props: {
      home,
    },
  };
}