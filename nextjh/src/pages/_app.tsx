import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>JJH&#39;s Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
