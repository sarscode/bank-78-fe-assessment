<template>
  <section class="bg-grey-50 min-h-screen">
    <main class="max-w-lg mx-auto p-4">
      <header class="text-center my-6">
        <NuxtLink to="/">
          <LogoIcon />
        </NuxtLink>
      </header>
      <slot />
      <footer
        class="mt-4 text-sm text-center font-light text-gray-700 max-w-sm w-[90%] mx-auto"
      >
        <p class="mb-2">&copy; 2024 Bank 78. All rights reserved.</p>
        <p>
          78 Finance Company Limited is fully licensed by the Central Bank of
          Nigeria, deposit insured by the Nigeria Deposit Insurance Corporation.
        </p>
      </footer>
    </main>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
