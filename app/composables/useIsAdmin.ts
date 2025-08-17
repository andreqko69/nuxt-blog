export default async function useIsAdmin() {
  const currentUserRef = await useCurrentUserSession()
  return computed(() => isAdmin(currentUserRef.value?.user?.role))
}
