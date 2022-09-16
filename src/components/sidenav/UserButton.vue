<script setup>
import { ref, toRefs } from "vue";
import IconUser from "../icons/IconUser.vue";
import IconSetting from "../icons/IconSetting.vue";

const props = defineProps({
  username: String,
  role: String,
  img: String,
});

const { username, role, img } = toRefs(props);
const showSetting = ref(false);

const toggleSetting = () => {
  showSetting.value = !showSetting.value
}
</script>

<template>
  <div id="user" class="flex flex-row relative cursor-pointer" @click="toggleSetting">
    <div id="user-icon" class="flex justify-center items-center">
      <img :src="img" :alt="username" v-if="img" />
      <IconUser v-else />
    </div>
    <div class="flex flex-row justify-between w-full items-center">
      <div id="user-content" class="flex flex-col ml-1 leading-4 font-poppins">
        <span>{{ username }}</span>
        <span class="text-sm font-normal text-gray-600">{{ role }}</span>
      </div>
      <IconSetting />
    </div>
    <div
      class="absolute left-full top-0 w-full ml-10 p-3 rounded-xl bg-primary-100 -translate-y-1/4 flex flex-col shadow-lg"
      :class="{ 'hidden': !showSetting }"
    >
      <button class="font-poppins text-left leading-7">Settings</button>
      <button class="font-poppins text-left leading-7 font-medium">Sign out</button>
    </div>
  </div>
</template>
