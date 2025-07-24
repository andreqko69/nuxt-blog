<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import * as z from 'zod/mini'

const schema = z.object({
  email: z.email('Invalid email'),
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
})

const toast = useToast()

async function onSubmit({ data: { email } }: FormSubmitEvent<Schema>) {
  toast.add({
    title: 'Success',
    description: 'Thank you for subscribing!',
    color: 'success',
  })

  state.email = email
}
</script>

<template>
  <section class="py-16 px-4 bg-muted">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4">
        Stay Updated
      </h2>
      <p class="text-muted-foreground mb-8">
        Subscribe to our newsletter and never miss our latest articles and updates.
      </p>
      <UForm :schema="schema" :state="state" class="flex items-start justify-center gap-4" @submit="onSubmit">
        <UFormField name="email">
          <UInput v-model="state.email" size="xl" placeholder="Enter your email" />
        </UFormField>

        <UButton type="submit" size="xl">
          Subscribe
        </UButton>
      </UForm>
    </div>
  </section>
</template>
