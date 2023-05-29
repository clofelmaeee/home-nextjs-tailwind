import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import homePageData from '../../static-data/home'
import { Discovery } from 'dynamoose/dist/aws/sdk'
import SectionOne from '@/components/SectionOne'
import SectionTwo from '@/components/SectionTwo'
import SectionThree from '@/components/SectionThree'
import SectionFour from '@/components/SectionFour'
const inter = Inter({ subsets: ['latin'] })


// posts will be populated at build time by getStaticProps()
export default function Home({ home }) {
  console.log(home.hero.banner)
  return (
    <div className='h-screen'>
      <section>

        <div className='container'>
          <SectionOne home={home} />
        </div>
      </section>
      <section className='flex bg-white items-center'>
        <SectionTwo home={home} />
      </section>

      <section className='flex bg-gray-200 items-center w-full'>
        <SectionThree home={home} />
      </section>

      <section className='flex bg-gray-200 items-center w-full'>
        <SectionFour home={home} />
      </section>
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