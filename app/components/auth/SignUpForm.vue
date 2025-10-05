<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import * as z from 'zod/mini'

import authClient from '~~/app/lib/auth-client'

const schema = z.object({
  username: z.string({ message: 'Username is required' }).check(z.minLength(2, { message: 'Username should be at least 2 characters long' }), z.trim()),
  email: z.email({ message: 'Invalid email address' }),
  password: z.string().check(z.minLength(8, { message: 'Password should be at least 8 characters long' }), z.trim()),
  confirmPassword: z.string().check(z.minLength(8, { message: 'Confirm password should be at least 8 characters long' }), z.trim()),
}).check(
  z.refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  }),
)

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
})

const pending = ref(false)
const form = useTemplateRef('form')

async function handleSubmit({ data }: FormSubmitEvent<Schema>) {
  try {
    await authClient.signUp.email({
      email: data.email,
      password: data.password,
      name: data.username,
      callbackURL: APP_ROUTES.home.to,
    }, {
      onRequest: () => {
        pending.value = true
      },
      onError: ({ error }) => {
        console.error(error)

        let name = 'email'

        if (error.message?.toLowerCase().includes('username')) {
          name = 'username'
        }

        form.value?.setErrors([{ name, message: error.message }])
        pending.value = false
      },
      onSuccess: async () => {
        await navigateTo(APP_ROUTES.home.to)
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
      <span class="text-xl font-bold">Sign Up</span>
    </template>

    <UForm ref="form" :schema="schema" :state="state" class="space-y-4" @submit="handleSubmit">
      <UFormField label="Username" name="username">
        <UInput v-model="state.username" class="w-full" />
      </UFormField>
      <UFormField label="Email" name="email">
        <UInput v-model="state.email" class="w-full" />
      </UFormField>
      <UFormField label="Password" name="password">
        <UInput v-model="state.password" type="password" class="w-full" />
      </UFormField>
      <UFormField label="Confirm Password" name="confirmPassword">
        <UInput v-model="state.confirmPassword" type="password" class="w-full" />
      </UFormField>

      <UButton
        type="submit" class="w-full justify-center font-semibold" :loading="pending"
      >
        Sign up
      </UButton>
    </UForm>

    <template #footer>
      <div>
        Already have an account?
        <ULink :to="APP_ROUTES.login.to">
          Login
        </ULink>
      </div>
    </template>
  </UCard>
</template>
