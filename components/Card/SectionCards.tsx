import React from 'react';

import Link from 'next/link';
import Card from './Card';
import styles from './SectionCards.module.css';

interface sectionCardProps {
  title: string;
  videos: Array<{ imgUrl: string; id: number; title: string }>;
  size: string;
}

function SectionCards(props: sectionCardProps) {
  const { title, videos = [], size } = props;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, idx) => {
          const { id } = video;
          return (
            <Link key={idx} href={`/video/${id}`}>
              <Card id={idx} imgUrl={video.imgUrl} size={size} />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default SectionCards;
