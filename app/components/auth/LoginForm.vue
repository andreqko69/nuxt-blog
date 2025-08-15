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

const formRef = useTemplateRef('form')

const pending = ref(false)

async function handleSubmit({ data }: FormSubmitEvent<Schema>) {
  pending.value = true

  try {
    await new Promise(resolve => setTimeout(resolve, 5000))
    console.log('data', data)
    console.log('formRef', formRef)
  }
  catch (error) {
    console.error(error)
  }

  pending.value = false
}
</script>

<template>
  <UCard class="max-w-full w-[300px]">
    <template #header>
      <span class="text-xl font-bold">Login</span>
    </template>

    <UForm ref="form" :schema="schema" :state="state" class="space-y-4" @submit="handleSubmit">
      <UFormField label="Email" name="email">
        <UInput v-model="state.email" class="w-full" />
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
        <ULink :to="routes.signUp.to">
          Register
        </ULink>
      </div>
    </template>
  </UCard>
</template>
