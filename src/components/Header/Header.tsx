import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/inventory" className={styles.navLink}>
          Inventory
        </Link>
        <Link href="/resellers" className={styles.navLink}>
          Resellers
        </Link>
        <Link href="/history" className={styles.navLink}>
          Transaction History
        </Link>
      </nav>
    </header>
  );
};

export default Header;