import React from 'react';

import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './Banner.module.css';

interface BannerProps {
  title: string;
  subtitle: string;
  imgUrl: string;
  videoId: string;
}

function Banner(props: BannerProps) {
  const { title, subtitle, imgUrl, videoId } = props;

  const router = useRouter();

  const handleOnPlay = () => {
    console.log('handleOnPlay');
    router.push(`video/${videoId}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.nseriesWrapper}>
            <p className={styles.firstLetter}>N</p>
            <p className={styles.series}>S E R I E S</p>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <h3 className={styles.subtitle}>{subtitle}</h3>

          <div className={styles.playBtnWrapper}>
            <button className={styles.btnWithIcon} onClick={handleOnPlay}>
              <Image
                src='/static/play_arrow.svg'
                alt='Play Icon'
                width={24}
                height={24}
              />
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.bannerImg}
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>
    </div>
  );
}

export default Banner;
