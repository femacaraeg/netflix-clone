import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { magic } from '../lib/magic-client';
import type { AppProps } from 'next/app';
import { Roboto_Slab } from '@next/font/google';
import '../styles/globals.css';

const roboto = Roboto_Slab({
  subsets: ['latin'],
});
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleLoggedIn = async () => {
      const isLoggedIn = await magic?.user.isLoggedIn();
      if (isLoggedIn) {
        router.push('/');
      } else {
        router.push('/login');
      }
    };
    handleLoggedIn();
  }, []);

  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
