import React from 'react';

import Card from './Card';
import styles from './SectionCard.module.css';

interface sectionCardProps {
  title: string;
}

function SectionCard(props: sectionCardProps) {
  const { title } = props;
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        <Card imgUrl='/static/clifford.webp' size='large' />
        <Card imgUrl='/static/clifford.webp' size='large' />
        <Card imgUrl='/static/clifford.webp' size='large' />
        <Card imgUrl='/static/clifford.webp' size='large' />
        <Card imgUrl='/static/clifford.webp' size='large' />
        <Card imgUrl='/static/clifford.webp' size='large' />
      </div>
    </section>
  );
}

export default SectionCard;
