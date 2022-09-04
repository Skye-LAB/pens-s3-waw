<script setup>
import MenuChild from './MenuChild.vue';

const menu = ['Dashboard', 'Medecine']
</script>

<template>
  <div id="menu-1" class="my-2 font-poppins">
    <span>Home</span>
    <div id="submenu-1">
      <MenuChild :menus="menu"/>
    </div>
  </div>
</template>
