import Head from "next/head";
import Link from "next/link";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pet Care App</title>
      </Head>
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;
