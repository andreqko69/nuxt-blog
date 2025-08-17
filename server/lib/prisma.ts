import process from 'node:process'
import { PrismaClient } from '@prisma/client'

declare global {
  var __prisma: PrismaClient | undefined
}

const prisma = (() => {
  if (process.env.NODE_ENV === 'production') {
    return new PrismaClient()
  }
  else {
    if (!globalThis.__prisma) {
      globalThis.__prisma = new PrismaClient()
    }
    return globalThis.__prisma
  }
})()

export default prisma
