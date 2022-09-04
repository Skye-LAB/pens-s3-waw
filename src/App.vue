<script setup>
import { RouterLink, RouterView } from 'vue-router'

import SideNav from '@/components/sidenav/SideNav.vue';
</script>

<template>
  <main class="min-h-screen h-screen bg-gray-100">
    <div class="flex flex-row space-x-10 p-10 h-full">
      <div class="basis-1/5">
        <SideNav title="Clinic."/>
      </div>
      <div class="basis-4/5">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>