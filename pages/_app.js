import Head from 'next/head';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/header';
import Footer from '../components/footer';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Header></Header>
      <Component {...pageProps} />;
      <Footer></Footer>

    </>
  )
}