import homePageData from '../../static-data/homepage'
import HomeContent from '@/components/home-content'
import BackToTop from '@/components/BackToTop';

export default function Home({ home }) {

  return (
    <>
      <HomeContent home={home} />
      <BackToTop />
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