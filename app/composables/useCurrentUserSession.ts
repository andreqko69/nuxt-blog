export default async function useCurrentUserSession() {
  const { data } = await useFetch('/api/auth/get-session', {
    key: 'auth:session',
    headers: useRequestHeaders(['cookie']),
  })
  return computed(() => data.value)
}
