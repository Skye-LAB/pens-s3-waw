<script setup>
import { toRefs } from "vue";
import UserButton from "./UserButton.vue";
import Menu from "./Menu.vue";

const props = defineProps({
  title: String,
});

const { title } = toRefs(props);
</script>

<template>
  <div class="w-full h-full bg-primary-100 rounded-xl p-5 flex flex-col">
    <span class="text-3xl font-poppins font-bold">{{ title }}</span>
    <div id="menu" class="flex-1">
      <Menu/>
    </div>
    <UserButton username="Bayu" role="admin" />
  </div>
</template>
