import authClient from '~~/app/lib/auth-client'

export default async function useCurrentUserSession() {
  const { data } = await authClient.useSession(useFetch)
  return computed(() => data.value)
}
