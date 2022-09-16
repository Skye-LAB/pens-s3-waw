<script setup>
import { toRefs } from "vue"
const props = defineProps({
  label: String,
  type: String
});

const {label, type} = toRefs(props)
</script>

<template>
  <div class="flex flex-row items-center">
    <label :for="label" class="basis-1/6">{{ label }}</label>
    <input :type="type" :name="label" :placeholder="label" class="basis-5/6 input-control" />
  </div>
</template>
