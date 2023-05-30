import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import homePageData from '../../static-data/home'
import { Discovery } from 'dynamoose/dist/aws/sdk'
import SectionOne from '@/components/banner'
import SectionTwo from '@/components/about-us'
import SectionThree from '@/components/products'
import SectionFour from '@/components/clients'
import Banner from '@/components/banner'
import AboutUs from '@/components/about-us'
import Products from '@/components/products'
import Clients from '@/components/clients'
import ContactUs from '@/components/contact-us'
import Footer from '@/components/footer'
const inter = Inter({ subsets: ['latin'] })


// posts will be populated at build time by getStaticProps()
export default function Home({ home }) {
  console.log(home.hero.banner)
  return (
    <div className='h-screen'>
      <div className=''>

        <section className='banner'>

          <div className='container'>
            <Banner home={home} />
          </div>
        </section>

        <section className='about-us flex bg-white items-center  '>
          <AboutUs home={home} />
        </section>

        <section className='products flex bg-gray-100 items-center w-full py-40 px-96 items-center mx-0'>
          <Products home={home} />
        </section>

        <section className='clients flex bg-white items-center w-full'>
          <Clients home={home} />
        </section>

        <section className='contact-us bg-white w-full'>
          <ContactUs home={home}/>
        </section>

        <section className='contact-us bg-gray-500 w-full p-10'>
          <Footer home={home}/>
        </section>
        
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