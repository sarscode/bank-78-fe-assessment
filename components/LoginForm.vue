<template>
  <form @submit="onSubmit">
    <FormInput
      id="email"
      label="Email"
      name="email"
      type="email"
      placeholder="Email address"
    />
    <FormInput
      id="password"
      label="Password"
      name="password"
      type="password"
      placeholder="Enter your password"
    />
    <p class="mb-4 text-right">
      Forgot password?
      <NuxtLink to="/" class="text-brand-500">Reset password</NuxtLink>
    </p>
    <FormButton type="submit" :disabled="!meta.valid">Log in</FormButton>
  </form>
</template>

<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

const validationSchema = toTypedSchema(
  zod.object({
    email: zod
      .string({ required_error: 'Email is required' })
      .email({ message: 'Email address must be valid' }),
    password: zod.string({ required_error: 'Password is required' }),
  })
);

const { handleSubmit, meta, resetForm } = useForm({
  validationSchema,
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
  resetForm();
});
</script>
