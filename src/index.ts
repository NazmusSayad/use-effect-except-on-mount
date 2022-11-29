import { useEffect, useRef } from 'react'

const useEffectExceptOnMount = (effect: Function, dependencies: any[]) => {
  const mounted = useRef(false)

  useEffect(() => {
    if (mounted.current) {
      const unmount = effect()
      return () => unmount && unmount()
    } else {
      mounted.current = true
    }
  }, dependencies)

  useEffect(() => {
    return () => (mounted.current = false)
  }, [])
}

export default useEffectExceptOnMount
