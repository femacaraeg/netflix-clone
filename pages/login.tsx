import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { magic } from '../lib/magic-client';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Login.module.css';

function Login() {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [userMsg, setUserMsg] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleComplete = () => {
      setIsLoading(false);
    };
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  const handleOnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserMsg('');
    const email = e.target.value;
    setEmail(email);
  };

  const handleLoginWithEmail = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (email) {
      if (email === 'femacaraeg@gmail.com') {
        // route to dashboard
        try {
          const didToken = await magic?.auth.loginWithMagicLink({ email });
          if (didToken) {
            setIsLoading(false);
            router.push('/');
          }
        } catch (error) {
          console.error('Something went wrong logging in', error);
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
        setUserMsg('Something went wrong logging in');
      }
    } else {
      // show user message
      setIsLoading(false);
      setUserMsg('Enter a valid email address');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix SignIn</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Link className={styles.logoLink} href='/'>
            <div className={styles.logoWrapper}>
              <Image
                src='/static/netflix.svg'
                alt='Netflix logo'
                width={128}
                height={34}
              />
            </div>
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign In</h1>

          <input
            type='text'
            placeholder='Email address'
            className={styles.emailInput}
            onChange={handleOnChangeEmail}
          />

          <p className={styles.userMsg}>{userMsg}</p>
          <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
            {isLoading ? 'Loading...' : 'Sign In'}
          </button>
        </div>
      </main>
    </div>
  );
}

export default Login;
