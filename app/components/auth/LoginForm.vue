<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import * as z from 'zod/mini'

import authClient from '~~/app/lib/auth-client'

const schema = z.object({
  email: z.email({ message: 'Invalid email address' }),
  password: z.string().check(z.minLength(8, { message: 'Password should be at least 8 characters long' }), z.trim()),
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: '',
  password: '',
})

const pending = ref(false)
const form = useTemplateRef('form')

async function handleSubmit({ data }: FormSubmitEvent<Schema>) {
  pending.value = true

  try {
    await authClient.signIn.email({ email: data.email, password: data.password }, {
      onSuccess: async () => {
        await navigateTo(APP_ROUTES.home.to)
      },
      onError: ({ error }) => {
        console.error(error)
        form.value?.setErrors([{ name: 'email', message: error.message ?? 'Invalid email or password' }])
        pending.value = false
      },
      onRequest: () => {
        pending.value = true
      },
    })
  }
  catch (error) {
    console.error(error)
    form.value?.setErrors([{ name: 'email', message: 'Something went wrong. Please, try again' }])
    pending.value = false
  }
}
</script>

<template>
  <UCard class="max-w-full w-[300px]">
    <template #header>
      <span class="text-xl font-bold">Login</span>
    </template>

    <UForm ref="form" :schema="schema" :state="state" class="space-y-4" @submit="handleSubmit">
      <UFormField label="Email" name="email">
        <UInput v-model="state.email" class="w-full" type="email" />
      </UFormField>
      <UFormField label="Password" name="password">
        <UInput v-model="state.password" type="password" class="w-full" />
      </UFormField>

      <UButton
        type="submit" class="w-full justify-center font-semibold" :loading="pending"
      >
        Login
      </UButton>
    </UForm>

    <template #footer>
      <div>
        Don't have an account?
        <ULink :to="APP_ROUTES.signUp.to">
          Register
        </ULink>
      </div>
    </template>
  </UCard>
</template>
