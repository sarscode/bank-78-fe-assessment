<template>
  <div class="inline-flex flex-col w-full mb-4">
    <FormLabel v-if="label && id" :id="id" :label="label" />
    <select
      :id="id"
      v-model="value"
      :name="name"
      :placeholder="placeholder"
      class="border p-3 w-full rounded-lg placeholder:text-sm focus:border-purple-900 focus:outline-none bg-transparent"
    >
      <option value="" selected>Select a country</option>
      <option value="Nigeria">Nigeria</option>
      <option value="Nigeria">Ghana</option>
    </select>
    <span v-if="errorMessage" class="text-xs mt-1 text-red-500">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  name: string;
  label: string;
  id?: string;
  placeholder?: string;
}

const { name } = withDefaults(defineProps<Props>(), {});
const { value, errorMessage } = useField(name);
</script>
