import type { PrismaConfig } from 'prisma'
import path from 'node:path'
import { config } from 'dotenv'

config()

export default {
  schema: path.join('prisma'),
} satisfies PrismaConfig
