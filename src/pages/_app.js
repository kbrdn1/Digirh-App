import '@styles/globals.css'
import { Nunito, Libre_Franklin } from 'next/font/google'
import favicon from '@assets/favicon.ico'
import { DefaultSeo } from 'next-seo'

export const metadata = {
  title: 'Digirh - Gestion des ressources humaines',
  description:
    'Application de gestion des ressources humaines pour les entreprises.',
  keywords: 'RH, ressources humaines, gestion, entreprise, digirh, digirh.com',
  favicon: favicon,
}

const nunito = Nunito({ subsets: ['latin-ext'] })
const libre_franklin = Libre_Franklin({ subsets: ['latin-ext'] })

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
        favicon={favicon}
      />
      <div className='font-nunito bg-light'>
        <Component {...pageProps} />
      </div>
    </>
  )
}
