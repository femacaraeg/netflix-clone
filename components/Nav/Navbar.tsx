import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { magic } from '../../lib/magic-client';

import styles from './Navbar.module.css';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [username, setUsername] = useState('');

  const router = useRouter();

  const handleShowDropdown = (e: any) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    async function getUsername() {
      try {
        const { email, issuer } = await magic?.user.getMetadata();
        const didToken = await magic?.user.getIdToken();

        console.log('token', didToken);
        if (email) {
          setUsername(email);
        }
      } catch (error) {
        console.log('Error retrieving email:', error);
      }
    }

    getUsername();
  }, []);

  const handleSignout = async (e: any) => {
    e.preventDefault();

    try {
      await magic?.user.logout();
      console.log(await magic?.user.isLoggedIn());
      router.push('/login');
    } catch (error) {
      console.error('Error loggin out', error);
      router.push('/login');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.logoLink} href='/'>
          <div className={styles.logoWrapper}>
            <Image
              src='/static/netflix.svg'
              alt='Netflix Logo'
              width={128}
              height={34}
            />
          </div>
        </Link>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href='/'>Home</Link>
          </li>
          <li className={styles.navItem2}>
            <Link href='/browse/my-list'>My List</Link>
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}>{username}</p>
              <Image
                src='/static/expand_more.svg'
                alt='Expand more'
                width={24}
                height={24}
              />

              {/* Expand more icon */}
            </button>
            {showDropdown && (
              <div className={styles.navDropdown}>
                <div className={styles.dropDown}>
                  <a onClick={handleSignout} className={styles.linkName}>
                    Sign out
                  </a>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
