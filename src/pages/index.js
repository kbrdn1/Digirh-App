import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <Image src="/logo/logo_h.svg" alt="Digirh" width={200} height={200} />
        <h1 className="text-4xl font-bold text-center mt-8">Digirh</h1>
        <p className="text-center mt-4">
          Application de gestion des ressources humaines pour les entreprises.
        </p>
      </div>
    </main>
  )
}
