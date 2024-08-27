<template>
  <button
    :type="type"
    class="w-full p-3 rounded-lg bg-brand-500 hover:shadow-sm text-white mb-4 disabled:bg-brand-500/50"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
interface Props {
  type: 'submit' | 'button';
}
defineProps<Props>();
</script>

<style></style>
