/* eslint-disable @next/next/no-head-element */
import { Inter } from 'next/font/google'
import homePageData from '../../static-data/home'
import Banner from '@/components/banner'
import AboutUs from '@/components/about-us'
import Products from '@/components/products'
import Clients from '@/components/clients'
import ContactUs from '@/components/contact-us'
import Head from 'next/head'


// posts will be populated at build time by getStaticProps()
export default function Home({ home }) {

  return (
    <div className='h-screen'>
      {/* testing next/head to see SEO's result is */}
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name='description' content='Programming Articles' />
      </Head>
      
      {/* {home.blocks.map((block, index) => 
         {if (block.blockType === 'carousel') {
         
        }}
        block.blockType === 'carousel' ? <h1 key={index}>Hello</h1> :  <h2 key={index}>Hi</h2>
    )} */}

      <div className=''>

        <Banner home={home} />

        <AboutUs home={home} />

        <Products home={home} />

        <Clients clients={home.clients} />

        <ContactUs contact={home.contact} form={home.form} />
        
      </div>
    </div>
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