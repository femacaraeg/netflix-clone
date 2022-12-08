import Head from 'next/head';

import Banner from '../components/Banner/Banner';
import Navbar from '../components/Nav/Navbar';
import Card from '../components/Card/Card';
import SectionCard from '../components/Card/SectionCard';
import styles from '../styles/Home.module.css';

export default function Home() {
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
      <SectionCard title='movies' />
      <Card imgUrl='/static/clifford.webp' size='small' />
      <Card size='medium' />
      <Card imgUrl='/static/clifford.webp' size='large' />

      <footer className={styles.footer}></footer>
    </div>
  );
}
