import { useRef, useState } from 'react'
import Input from '@components/Inputs/Default'
import ButtonPrimary from '@components/Buttons/Primary'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '@contexts/Auth.jsx'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
  const navigate = useNavigate()
  const authStore = useContext(AuthContext)

  const emailRef = useRef('')
  const passwordRef = useRef('')
  const errorRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    setIsLoading(true)

    const data = {
      username: emailRef.current,
      password: passwordRef.current,
    }

    await authStore.login(data)

    if (authStore.user && authStore.jwt) {
      navigate('/', { replace: true })
    } else {
      errorRef.current = 'Identifiants incorrects'
    }
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="bg-black w-full lg:h-screen lg:w-1/2 xl:w-1/4 flex items-center justify-center py-4">
        <img
          className="h-1/4 hidden lg:block"
          src="/logo/logo_text_light.svg"
          alt="logo-DIGIRH"
        />
        <img
          className="lg:hidden"
          src="/logo/logo_text_h_light.svg"
          alt="logo-DIGIRH"
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
                onChangeValue={(value) => (emailRef.current = value)}
              />
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Mot de passe"
                required
                onChangeValue={(value) => (passwordRef.current = value)}
                autoComplete="password"
              />
            </div>
            {errorRef.current && (
              <p className="text-danger text-center font-semibold">
                {errorRef.current}
              </p>
            )}
            <ButtonPrimary
              type="submit"
              full
              disabled={isLoading}
              iconRight={isLoading ? faSpinner : null}
              iconSpin={isLoading}
              content={isLoading ? 'Connexion en cours ' : 'Se connecter'}
            />
            <div className="flex gap-2 text-[14px] justify-center">
              <p className="text-gray-3">Vous n&rsquo;avez pas de compte ?</p>
              <Link to="/register" className="text-primary-5 font-bold">
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
