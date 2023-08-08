import { useState, useEffect } from 'react'
let timeoutId

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  const [isWaiting, setIsWaiting] = useState(false)
  useEffect(() => {
    if (timeoutId) {
      setIsWaiting(true)
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      setDebouncedValue(value)
      setIsWaiting(false)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [value])

  return [debouncedValue, isWaiting]
}

export default useDebounce
