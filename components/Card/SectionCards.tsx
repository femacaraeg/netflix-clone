import React from 'react';

import Card from './Card';
import styles from './SectionCards.module.css';

interface sectionCardProps {
  title: string;
  videos: Array<{ imgUrl: string }>;
  size: string;
}

function SectionCards(props: sectionCardProps) {
  const { title, videos, size } = props;
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, idx) => {
          return <Card key={idx} id={idx} imgUrl={video.imgUrl} size={size} />;
        })}
      </div>
    </section>
  );
}

export default SectionCards;
