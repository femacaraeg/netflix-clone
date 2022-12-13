import React, { SyntheticEvent, useState } from 'react';

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

  const handleOnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserMsg('');
    console.log('event', e);
    const email = e.target.value;
    setEmail(email);
  };

  const handleLoginWithEmail = async (e: React.SyntheticEvent) => {
    console.log('hi button');

    e.preventDefault();
    if (email) {
      if (email === 'femacaraeg@gmail.com') {
        // route to dashboard
        try {
          const didToken = await magic?.auth.loginWithMagicLink({ email });
          console.log({ didToken });
        } catch (error) {
          console.error('Something went wrong logging in', error);
        }
      } else {
        setUserMsg('Something went wrong logging in');
      }
    } else {
      // show user message
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
            Sign In
          </button>
        </div>
      </main>
    </div>
  );
}

export default Login;
