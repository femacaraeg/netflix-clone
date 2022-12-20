import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import styles from '../../styles/Video.module.css';

import { useRouter } from 'next/router';

Modal.setAppElement('#__next');

function Video() {
  const router = useRouter();

  console.log({ router });
  return (
    <div className={styles.container}>
      <Modal
        isOpen={true}
        contentLabel='Watch the video'
        onRequestClose={() => router.back()}
        overlayClassName={styles.overlay}
        className={styles.modal}
      >
        <div>Modal body</div>
      </Modal>
    </div>
  );
}

export default Video;
