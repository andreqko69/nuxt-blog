<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import * as z from 'zod/mini'

const schema = z.object({
  email: z.email({ message: 'Invalid email address' }),
  password: z.string().check(z.minLength(6, { message: 'Password should be at least 6 characters long' }), z.trim()),
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: '',
  password: '',
})

async function handleSubmit({ data }: FormSubmitEvent<Schema>) {
  console.log('data', data)
}
</script>

<template>
  <UCard class="max-w-full w-[300px]">
    <template #header>
      <span class="text-xl font-bold">Login</span>
    </template>

    <UForm :schema="schema" :state="state" class="space-y-4" @submit="handleSubmit">
      <UFormField label="Email" name="email">
        <UInput v-model="state.email" class="w-full" />
      </UFormField>
      <UFormField label="Password" name="password">
        <UInput v-model="state.password" type="password" class="w-full" />
      </UFormField>

      <UButton
        type="submit" class="w-full justify-center font-semibold"
      >
        Login
      </UButton>
    </UForm>

    <template #footer>
      <div>
        Don't have an account? <NuxtLink :to="routes.signUp.to" class="text-green-500 font-semibold">
          Register
        </NuxtLink>
      </div>
    </template>
  </UCard>
</template>
