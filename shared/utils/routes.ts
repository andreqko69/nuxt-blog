export const APP_ROUTES = {
  home: { to: '/', label: 'Home' },
  posts: { to: '/posts', label: 'Posts' },
  about: { to: '/about', label: 'About' },
  // auth
  login: { to: '/auth/login', label: 'Login' },
  signUp: { to: '/auth/signup', label: 'Sign Up' },
  // admin
  adminDashboard: { to: '/admin', label: 'Admin Dashboard' },
  adminCreatePost: { to: '/admin/posts/create', label: 'Create Post' },
  adminManagePosts: { to: '/admin/posts/manage', label: 'Manage Posts' },
  adminManageCategories: { to: '/admin/categories/manage', label: 'Manage Categories' },
  adminAnalytics: { to: '/admin/analytics', label: 'Analytics' },
} as const

export const MAIN_NAVIGATION = [
  APP_ROUTES.home,
  APP_ROUTES.posts,
  APP_ROUTES.about,
] as const
