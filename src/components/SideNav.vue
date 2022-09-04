<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    title: String
  })
</script>

<template>
  <div class="w-full h-full bg-primary-100 rounded-xl p-5 flex flex-col">
    <span class="text-3xl font-poppins font-bold">{{ title }}</span>
    <div id="menu" class="flex-1">
      <div id="menu-1" class="my-2 font-poppins">
        <span>Auth</span>
        <div id="submenu-1">
          <ul class="list-disc text-sm ml-5">
            <li class="text-slate-600 hover:text-slate-900 cursor-pointer">
              Login
            </li>
            <li class="text-slate-600 hover:text-slate-900 cursor-pointer">
              Register
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="user" class="flex flex-row relative">
      <div id="user-icon" class="flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-9 h-9"
        >
          <path
            fill-rule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div id="user-content" class="flex flex-col ml-1 leading-4 font-poppins">
        <span>Username</span>
        <span class="text-sm font-normal text-gray-600">role</span>
      </div>
    </div>
  </div>
</template>