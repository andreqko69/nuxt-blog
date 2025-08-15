export const routes = {
  home: { to: '/', label: 'Home' },
  posts: { to: '/posts', label: 'Posts' },
  about: { to: '/about', label: 'About' },
  login: { to: '/auth/login', label: 'Login' },
  signUp: { to: '/auth/signup', label: 'Sign Up' },
} as const

export const mainNavigation = [
  routes.home,
  routes.posts,
  routes.about,
] as const
