import homePageData from '../../static-data/home'
import Banner from '@/components/banner'
import AboutUs from '@/components/about-us'
import Products from '@/components/products'
import Clients from '@/components/clients'
import ContactUs from '@/components/contact-us'

export default function Home({ home }) {


  return (
      <>
        <Banner home={home} />
        <AboutUs about={home.about} />
        <Products home={home} />
        <Clients clients={home.clients} />
        <ContactUs contact={home.contact} />
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