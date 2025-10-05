import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { APIError } from 'better-auth/api'
import { admin, createAuthMiddleware } from 'better-auth/plugins'

import prisma from './prisma'

export const AUTH_ERROR_MESSAGES = {
  EMAIL_ALREADY_EXISTS: 'Email already exists',
  USERNAME_ALREADY_EXISTS: 'Username already exists',
}

const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [admin()],
  user: {
    fields: {
      name: 'username',
    },
  },
  hooks: {
    before: createAuthMiddleware(async ({ body, path }) => {
      // Customize error messages and add pre-sign-up checks
      if (path.startsWith('/sign-up')) {
        const existingUser = await prisma.user.findFirst({
          where: {
            OR: [
              { email: body.email },
              { username: body.name },
            ],
          },
        })

        if (existingUser) {
          const message = existingUser.email === body.email
            ? AUTH_ERROR_MESSAGES.EMAIL_ALREADY_EXISTS
            : AUTH_ERROR_MESSAGES.USERNAME_ALREADY_EXISTS

          throw new APIError('CONFLICT', { message })
        }
      }
    }),
  },
})

export default auth
