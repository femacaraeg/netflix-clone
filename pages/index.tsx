import Head from 'next/head';

import Banner from '../components/Banner/Banner';
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

      <h1>Netflix</h1>
      {/* <main className={styles.main}>
        <h1>Netflix</h1>
      </main> */}
      {/* <NavBar />
      <Banner />
      <Card /> */}
      <Banner />

      <footer className={styles.footer}></footer>
    </div>
  );
}
