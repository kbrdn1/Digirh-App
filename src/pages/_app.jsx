import '@styles/globals.css'
import Head from 'next/head'
import { Nunito, Libre_Franklin } from 'next/font/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import useVerify from '@hooks/useVerify'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const nunito = Nunito({ subsets: ['latin'] })
const libreFranklin = Libre_Franklin({ subsets: ['latin'] })

const queryClient = new QueryClient()

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  const [isLoading, setIsLoading] = useState(true)

  // get current path
  const { pathname } = useRouter()

  // verify user session
  const verify = useVerify()

  // if user is not logged in, redirect to login page
  if (pathname !== '/login')
    verify()

  // set loading to false after 2 seconds
  const load = () => {
    setIsLoading(false)
  }

  setTimeout(load, 1000)

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
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
      {isLoading ? (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
          <p className="text-primary-4 text-xl font-bold mb-4">
            {' '}
            Chargement...
          </p>
          <FontAwesomeIcon
            className="animate-spin text-5xl text-primary-4 w-10"
            icon={faCircleNotch}
          />
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </QueryClientProvider>
  )
}

export default App
