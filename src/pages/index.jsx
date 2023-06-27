import Head from 'next/head'
import Image from 'next/image'
import { Nunito, Libre_Franklin } from 'next/font/google'
import PrimaryBtn from '@/components/Buttons/Primary'

const nunito = Nunito({ subsets: ['latin'] })
const libreFranklin = Libre_Franklin({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>DIGIRH - Home</title>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${nunito.className}`}
      >
        <div className="flex flex-col items-center justify-center">
          <Image src="/logo/logo_h.svg" alt="Digirh" width={200} height={200} />
          <h1
            className={`text-4xl font-bold text-center mt-8 font-franklin ${libreFranklin.className}`}
          >
            Digirh
          </h1>
          <p className="text-center mt-4">
            Application de gestion des ressources humaines pour les entreprises.
          </p>
          <PrimaryBtn content="Se connecter" full={true} />
        </div>
      </main>
    </>
  )
}
