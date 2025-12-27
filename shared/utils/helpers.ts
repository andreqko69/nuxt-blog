export function debounce(func: (...params: Array<any>) => unknown, time: number) {
  let timeout: NodeJS.Timeout | undefined

  const funcWithTimeout = (...params: Array<any>) => {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      func(params)
    }, time)
  }

  return funcWithTimeout
}
