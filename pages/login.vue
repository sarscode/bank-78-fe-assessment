<template>
  <section class="p-4 bg-white lg:p-6 rounded-lg">
    <h1 class="text-xl font-semibold mb-4 text-brand-700">
      Login to your account
    </h1>
    <p class="mb-4">
      Don't have an account?
      <NuxtLink to="/signup" class="text-brand-500">Sign up</NuxtLink>
    </p>
  </section>
</template>

<script lang="ts" setup>
definePageMeta({ layout: 'auth' });
</script>

<style></style>
