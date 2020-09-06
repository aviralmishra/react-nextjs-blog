import Head from 'next/head';
import styles from '../styles/index.module.css';

import Header from '../components/common/header';

export default function Home() {
  return (
    <html>
      <div className={styles.content}>
        <Head>
          <title>Code Blog</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
      </div>

      <Header />

      <footer className={styles.footer}></footer>
    </html>
  );
}
