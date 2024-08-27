<template>
  <section class="p-4 bg-white lg:p-6 rounded-lg">
    <h1 class="text-xl font-semibold mb-4 text-brand-700">Get started</h1>
    <p class="mb-4">
      Already have an account?
      <NuxtLink to="/login" class="text-brand-500">Log in</NuxtLink>
    </p>
  </section>
</template>

<script lang="ts" setup>
definePageMeta({ layout: 'auth' });
</script>

<style></style>
