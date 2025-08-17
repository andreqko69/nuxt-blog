import type { User } from '@prisma/client'

export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
}

export const isAdmin = (role?: User['role'] | undefined | null) => role === ROLES.ADMIN
