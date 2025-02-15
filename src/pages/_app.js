import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/header";
export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Hairy</title>
        <meta name="description" content="A hairy creature named Hairy" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Hairy" />
        <meta property="og:description" content="A hairy creature named Hairy" />
        <meta property="og:image" content="https://hairy4.vercel.app/img/hairy2.png" />
        <meta property="og:url" content="https://hairy4.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <Component {...pageProps} />
      </>
  );
}
