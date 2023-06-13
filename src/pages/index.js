import homePageData from '../../static-data/home'
import HomeContent from '@/components/home-content'

export default function Home({ home }) {

  return (
    <>
      <HomeContent home={home} />

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