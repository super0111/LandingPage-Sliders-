import Head from "next/head";
import Header from '@/components/header/Header'
import { StateProvider } from '@/contexts/StateContext';

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <StateProvider>
        <Header />
        <Component {...pageProps} />
      </StateProvider>
      <Head>
        <title>Board</title>
        <meta name="description" content="Board Website: Coming Soon! In development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  )
}
