<script setup>
import CardMain from "@/components/cards/CardMain.vue";
import InputControl from "@/components/inputs/InputControl.vue";
</script>

<template>
  <CardMain>
    <template #card-title> Precheck Patient </template>
    <template #card-body>
      <InputControl label="Name" type="text" />
    </template>
  </CardMain>
</template>
