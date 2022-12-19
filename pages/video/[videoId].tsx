import React from 'react';

import { useRouter } from 'next/router';

function Video() {
  const router = useRouter();

  console.log({ router });
  return <div>Video Page {router.query.videoId}</div>;
}

export default Video;
