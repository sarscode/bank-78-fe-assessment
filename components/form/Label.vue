<template>
  <label :for="id" class="mb-1 text-gray-600">
    {{ label }}
  </label>
</template>

<script lang="ts" setup>
interface Props {
  label: string;
  id: string;
}

defineProps<Props>();
</script>
