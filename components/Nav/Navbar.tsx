import React, { EventHandler, SyntheticEvent, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Navbar.module.css';

interface NavbarProps {
  username: string;
}

function Navbar(props: NavbarProps) {
  const { username } = props;

  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowDropdown = (e: any) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
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
                  <Link href='/login' className={styles.linkName}>
                    Sign out
                  </Link>
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
