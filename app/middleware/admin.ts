export default defineNuxtRouteMiddleware(async (to) => {
  const isAdminRoute = to.path.startsWith('/admin')

  if (isAdminRoute) {
    const { value: isAdmin } = await useIsAdmin()

    if (!isAdmin) {
      return navigateTo(APP_ROUTES.home.to)
    }
  }
})
