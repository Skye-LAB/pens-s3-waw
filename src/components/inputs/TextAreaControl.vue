<script setup>
import { toRefs } from "vue";
const props = defineProps({
  label: String,
});

const { label, type } = toRefs(props);
</script>

<template>
  <div class="flex flex-row items-center">
    <label :for="label" class="basis-1/6">{{ label }}</label>
    <textarea
      :name="label"
      rows="2"
      class="basis-5/6 textarea-control"
    ></textarea>
  </div>
</template>
