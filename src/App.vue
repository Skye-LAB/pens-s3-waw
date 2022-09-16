<script setup>
import { ref } from "vue";

import { RouterView, useRouter } from "vue-router";

import SideNav from "@/components/sidenav/SideNav.vue";
import TopNav from "./components/topnav/TopNav.vue";

const router = useRouter();
const authenticated = ref(true);

if (!authenticated.value) {
  router.push("/login");
}
</script>

<template>
  <main v-if="authenticated" class="min-h-screen h-screen bg-gray-100">
    <div class="flex flex-row space-x-10 p-10 h-full">
      <div class="basis-1/5">
        <SideNav title="Clinic." />
      </div>
      <div class="basis-4/5">
        <TopNav title="Dashboard" />
        <div class="pt-10">
          <RouterView />
        </div>
      </div>
    </div>
  </main>
  <main
    v-else
    class="h-screen bg-gray-100 bg-cover"
    style="background-image: url('./bg-1.webp')"
  >
    <RouterView />
  </main>
</template>

<style scoped></style>
