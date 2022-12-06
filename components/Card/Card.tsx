import React, { useState } from 'react';
import Image from 'next/image';

import styles from './Card.module.css';

interface CardProps {
  imgUrl: string;
  size: string;
}

function Card(props: CardProps) {
  const { imgUrl = '/static/clifford.webp', size = 'medium' } = props;

  const classMap: any = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const [imgSrc, setImgSrc] = useState(imgUrl);

  const handleOnError = () => {
    console.error('hi error');
    setImgSrc('/static/clifford.webp');
  };

  return (
    <div className={styles.container}>
      <div className={classMap[size]}>
        card
        <Image
          src={imgSrc}
          alt='image'
          onError={handleOnError}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}

export default Card;
