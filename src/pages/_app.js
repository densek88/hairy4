import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/header";
export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Hairy</title>
        <meta name="description" content="This is my awesome website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      </>
  );
}
