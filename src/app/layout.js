import '@styles/globals.css'
import { Nunito, Libre_Franklin } from 'next/font/google'

const nunito = Nunito({subsets: ['latin-ext']})
const libre_franklin = Libre_Franklin({subsets: ['latin-ext']})

export const metadata = {
  title: 'Digirh - Gestion des ressources humaines',
  description: 'Application de gestion des ressources humaines pour les entreprises.',
  keywords: 'RH, ressources humaines, gestion, entreprise, digirh, digirh.com',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className='font-nunito bg-light'>
        {children}
      </body>
    </html>
  )
}
