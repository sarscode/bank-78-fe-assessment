<template>
  <div class="inline-flex flex-col w-full mb-4">
    <FormLabel v-if="label && id" :id="id" :label="label" />
    <input
      :id="id"
      v-model="value"
      :name="name"
      :placeholder="placeholder"
      :type="type"
      class="border p-3 w-full rounded-lg focus:border-brand-500 focus:outline-none"
    />
    <span v-if="errorMessage" class="text-xs mt-1 text-red-500">
      {{ errorMessage }}
    </span>
    <span v-if="info" class="text-xs text-gray-500 font-light">
      {{ info }}
    </span>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  type?: 'text' | 'email' | 'password' | 'number';
  name: string;
  label: string;
  id?: string;
  placeholder?: string;
  info?: string;
}

const { name } = withDefaults(defineProps<Props>(), { type: 'text' });
const { value, errorMessage } = useField(name);
</script>
