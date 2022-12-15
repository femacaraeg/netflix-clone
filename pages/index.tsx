import Head from 'next/head';

import Banner from '../components/Banner/Banner';
import Navbar from '../components/Nav/Navbar';
import SectionCards from '../components/Card/SectionCards';
import { getPopularVideos, getVideos } from '../lib/videos';
import styles from '../styles/Home.module.css';

export async function getServerSideProps() {
  // Fetch data from external API
  const disneyVideos = await getVideos('disney trailer');

  const travelVideos = await getVideos('travel');
  const productivityVideos = await getVideos('productivity');
  const popularVideos = await getPopularVideos();

  // Pass data to the page via props
  return {
    props: { disneyVideos, travelVideos, productivityVideos, popularVideos },
  };
}

export default function Home(props: any) {
  const { disneyVideos, travelVideos, productivityVideos, popularVideos } =
    props;
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta
          name='description'
          content='A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries...'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.main}>
        <Navbar />
        <Banner
          title='Clifford the red dog'
          subtitle='a very cute dog'
          imgUrl='/static/clifford.webp'
        />
        <div className={styles.sectionWrapper}>
          <SectionCards title='Disney' videos={disneyVideos} size='large' />
          <SectionCards title='Travel' videos={travelVideos} size='small' />
          <SectionCards
            title='Productivity'
            videos={productivityVideos}
            size='medium'
          />
          <SectionCards title='Popular' videos={popularVideos} size='small' />
        </div>
        {/* <footer className={styles.footer}></footer> */}
      </div>
    </div>
  );
}
