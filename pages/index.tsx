import Head from 'next/head';

import Banner from '../components/Banner/Banner';
import Navbar from '../components/Nav/Navbar';
import Card from '../components/Card/Card';
import SectionCards from '../components/Card/SectionCards';
import styles from '../styles/Home.module.css';

export default function Home() {
  const disneyVideos = [
    {
      imgUrl: '/static/clifford.webp',
    },
    {
      imgUrl: '/static/clifford.webp',
    },
    {
      imgUrl: '/static/clifford.webp',
    },
  ];

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
      <Navbar username='Fe Macaraeg' />
      <Banner
        title='Clifford the red dog'
        subtitle='a very cute dog'
        imgUrl='/static/clifford.webp'
      />
      <div className={styles.sectionWrapper}>
        <SectionCards title='Disney' videos={disneyVideos} size='large' />
        <SectionCards title='Disney' videos={disneyVideos} size='medium' />
      </div>
      <footer className={styles.footer}></footer>
    </div>
  );
}
