import { useCallback, useRef } from 'react'

export const useDeBounce = (delay = 500, notDelayInFirstTime = true) => {
  const isFirstTime = useRef(notDelayInFirstTime)
  const debouncing = useRef<ReturnType<typeof setTimeout>>()

  if (debouncing.current) {
    clearTimeout(debouncing.current)
  }

  const debounce = useCallback(
    (func: () => void) => {
      if (isFirstTime.current) {
        isFirstTime.current = false
        func()
      } else {
        debouncing.current = setTimeout(() => {
          func()
        }, delay)
      }
    },
    [delay]
  )
  return { debounce }
}
