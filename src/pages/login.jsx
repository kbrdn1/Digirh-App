import { useState } from 'react'
import Image from 'next/image'
import Input from '@components/Inputs/Default'
import ButtonPrimary from '@components/Buttons/Primary'
import Link from 'next/link'
import axios from 'axios'
import localStorage from 'local-storage'

const api_url = process.env.NEXT_PUBLIC_API_URL

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleEmail = (value) => {
    setEmail(value)
  }

  const handlePassword = (value) => {
    setPassword(value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setIsLoading(true)

    try {
      const response = await axios.post(`${api_url}/login`, {
        username: email,
        password: password,
      })

      if (response.data.success === 'Connecté') {
        const { jwt, user } = response.data

        if (user && jwt) {
          // Save user to local storage
          localStorage.set('user', user)
          // Save JWT to local storage
          localStorage.set('jwt', jwt)

          // Redirect to home page (if in browser)
          if (typeof window !== 'undefined') {
            window.location.href = '/'
          }
        } else {
          throw new Error('Invalid username or password')
        }
      }
    } catch (error) {
      console.error('Login failed:', error)
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="bg-black w-full lg:h-screen lg:w-1/2 xl:w-1/4 flex items-center justify-center py-4">
        <Image
          className="h-1/4 hidden lg:block"
          src="/logo/logo_text_light.svg"
          alt="logo-DIGIRH"
          width={200}
          height={200}
        />
        <Image
          className="lg:hidden"
          src="/logo/logo_text_light.svg"
          alt="logo-DIGIRH"
          width={100}
          height={100}
        />
      </div>
      <section className="bg-white w-full lg:h-screen lg:w-1/2 xl:w-3/4 flex flex-col items-center justify-center py-4">
        <div className="font-nunito w-full xl:w-1/2 flex flex-col items-center gap-5 lg:mx-auto">
          <h1 className="font-franklin font-bold text-4xl w-fit bg-clip-text text-transparent bg-gradient-to-tr from-primary to-primary-5">
            Connexion
          </h1>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col gap-3"
          >
            <div className="flex flex-col gap-4 text-[14px] w-full">
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                required
                autoComplete="email"
                autoFocus
                onChangeValue={handleEmail}
              />
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Mot de passe"
                required
                onChangeValue={handlePassword}
                autoComplete="password"
              />
            </div>
            <ButtonPrimary
              type="submit"
              full
              disabled={isLoading}
              content={isLoading ? 'Connexion en cours...' : 'Se connecter'}
            />
            {error && (
              <p className="text-danger text-center font-semibold">
                {error.message}
              </p>
            )}
            <div className="flex gap-2 text-[14px] justify-center">
              <p className="text-gray-3">Vous n&rsquo;avez pas de compte ?</p>
              <Link href="/register" className="text-primary-5 font-bold">
                S&lsquo;incrire
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Login
