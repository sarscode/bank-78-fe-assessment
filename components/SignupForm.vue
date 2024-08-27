<template>
  <form @submit="onSubmit">
    <section class="md:flex gap-2">
      <FormInput
        id="firstName"
        label="First Name"
        name="firstName"
        type="text"
        placeholder="First Name"
      />
      <FormInput
        id="lastName"
        label="Last Name"
        name="lastName"
        type="text"
        placeholder="Last Name"
      />
    </section>
    <p class="text-xs text-gray-500 mb-4 font-light">
      Please ensure this is first and last name on your Government ID document.
    </p>
    <FormInput
      id="businessName"
      label="Business Name"
      name="businessName"
      type="text"
      placeholder="Business Name"
    />
    <FormInput
      id="businessName"
      label="CAC Number"
      name="cacNumber"
      type="text"
      placeholder="Ex: 123456"
      info="This data will be validated against the official registration list"
    />
    <FormInput
      id="email"
      label="Email"
      name="email"
      type="email"
      placeholder="Email Address"
    />
    <FormSelect
      id="country"
      label="Select country"
      name="country"
      placeholder="Select a country"
    />
    <FormInput
      id="password"
      label="Choose a password"
      name="password"
      type="password"
      placeholder="Enter your password"
    />
    <p class="mb-4 text-sm text-gray-600">
      By clicking the <span class="text-brand-500">“Continue” </span> button,
      you agree to Bank 78’s terms of acceptable use and Data Processing
      Agreement.
    </p>
    <FormButton type="submit" :disabled="!meta.valid">Continue</FormButton>
  </form>
</template>

<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

const validationSchema = toTypedSchema(
  zod.object({
    firstName: zod
      .string({ required_error: 'First name is required' })
      .min(2, { message: 'Enter a valid name' })
      .max(35, { message: 'Enter a valid name' })
      .trim(),
    lastName: zod
      .string({ required_error: 'Last name is required' })
      .min(2, { message: 'Last name is too short' })
      .trim(),
    businessName: zod
      .string({ required_error: 'Business name is required' })
      .min(2, { message: 'Business name is too short' })
      .trim(),
    cacNumber: zod.number({
      required_error: 'CAC Number is required',
      message: 'Invalid CAC number',
    }),
    country: zod.string({ required_error: 'Country is required' }),
    email: zod
      .string({ required_error: 'Email is required' })
      .min(3, { message: 'Email address must be valid' })
      .email({ message: 'Email address must be valid' }),
    password: zod
      .string({ required_error: 'Password is required' })
      .min(6, { message: 'Password cannot be less than 6 characters' }),
  })
);

const { handleSubmit, meta, resetForm } = useForm({
  validationSchema,
  initialValues: {
    country: '',
  },
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
  resetForm();
});
</script>
