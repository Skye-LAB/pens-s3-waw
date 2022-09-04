<script setup>
import { toRefs } from "vue";
import IconUser from "../icons/IconUser.vue";
import IconSetting from "../icons/IconSetting.vue";

const props = defineProps({
  username: String,
  role: String,
  img: String,
});

const { username, role, img } = toRefs(props);
</script>

<template>
  <div id="user" class="flex flex-row relative cursor-pointer">
    <div id="user-icon" class="flex justify-center items-center">
      <img :src="img" :alt="username" v-if="img" />
      <IconUser />
    </div>
    <div class="flex flex-row justify-between w-full items-center">
      <div id="user-content" class="flex flex-col ml-1 leading-4 font-poppins">
        <span>{{ username }}</span>
        <span class="text-sm font-normal text-gray-600">{{ role }}</span>
      </div>
      <IconSetting/>
    </div>
  </div>
</template>
