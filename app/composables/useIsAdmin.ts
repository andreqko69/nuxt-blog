export default async function useIsAdmin() {
  const currentUserRef = await useCurrentUserSession()
  return computed(() => isAdminRole(currentUserRef.value?.user?.role))
}
