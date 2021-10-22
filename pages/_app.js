import Head from 'next/head';
import { Fragment } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Motion One examples</title>
        <meta
          name="description"
          content="Motion One is a new animation library from the creators of Framer, built with the aim of creating a fast, and small animation library and simple to use!"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
