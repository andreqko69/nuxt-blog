export const APP_ROUTES = {
  home: { to: '/', label: 'Home' },
  posts: { to: '/posts', label: 'Posts' },
  about: { to: '/about', label: 'About' },

  login: { to: '/auth/login', label: 'Login' },
  signUp: { to: '/auth/signup', label: 'Sign Up' },

  adminDashboard: { to: '/admin', label: 'Admin Dashboard' },
  adminCreatePost: { to: '/admin/posts/create', label: 'Create Post' },
} as const

export const MAIN_NAVIGATION = [
  APP_ROUTES.home,
  APP_ROUTES.posts,
  APP_ROUTES.about,
] as const
