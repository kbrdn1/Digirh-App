import { useCallback } from 'react'
import axios from 'axios'
import localStorage, { set } from 'local-storage'

const api_url = process.env.NEXT_PUBLIC_API_URL

const useVerify = () => {
  const verify = useCallback(async () => {
    // Verify
    const jwt = localStorage.get('jwt')
    const user = localStorage.get('user')

    await axios
      .post(
        `${api_url}/token/verify`,
        {
          jwt: jwt,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      )
      .catch((error) => {
        localStorage.clear()
        if (typeof window !== 'undefined') window.location.href = '/login'
      })
  }, [])

  return verify
}

export default useVerify
