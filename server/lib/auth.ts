import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { APIError } from 'better-auth/api'
import { admin } from 'better-auth/plugins'

import prisma from './prisma'

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
  databaseHooks: {
    user: {
      // TODO: Handle unique constraint violation error from the database (race condition)
      create: {
        before: async (user) => {
          const usernameExists = await prisma.user.findUnique({
            where: {
              username: user.name,
            },
          })

          if (usernameExists) {
            throw new APIError('CONFLICT', { message: 'Username already exists' })
          }

          return {
            data: user,
          }
        },
      },
    },
  },
})

export default auth
