import '@styles/globals.css'
import Head from 'next/head'
import { Nunito, Libre_Franklin } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })
const libreFranklin = Libre_Franklin({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link rel="preload" as="style" href={nunito.preload} />
        <link
          rel="stylesheet"
          href={nunito.href}
          media="print"
          onLoad="this.media='all'"
        />
        <noscript>
          <link rel="stylesheet" href={nunito.href} />
        </noscript>
        <link rel="preload" as="style" href={libreFranklin.preload} />
        <link
          rel="stylesheet"
          href={libreFranklin.href}
          media="print"
          onLoad="this.media='all'"
        />
        <noscript>
          <link rel="stylesheet" href={libreFranklin.href} />
        </noscript>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
