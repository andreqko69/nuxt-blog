export function debounce(func: (...params: Array<unknown>) => unknown, time: number) {
  let timeout: NodeJS.Timeout | undefined

  const funcWithTimeout = (...params: Array<unknown>) => {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      func(params)
    }, time)
  }

  return funcWithTimeout
}
