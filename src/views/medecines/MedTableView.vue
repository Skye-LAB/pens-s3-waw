<script setup>
import CardMain from "@/components/cards/CardMain.vue";
</script>

<template>
  <CardMain>
    <template #card-title> List Medecine </template>
    <template #card-tool>
      <input
        type="text"
        placeholder="Search..."
        class="border w-40 h-5 px-3 py-5 font-normal hover:outline-none focus:outline-none focus:ring-1 focus:ring-primary-300 rounded-lg"
      />
    </template>
    <template #card-body>
      <table class="min-w-full">
        <thead>
          <tr>
            <th class="table-head">Code</th>
            <th class="table-head">Name</th>
            <th class="table-head">Stock</th>
            <th class="table-head">Price</th>
            <th class="table-head">Action</th>
          </tr>
        </thead>

        <tbody class="bg-white">
          <tr></tr>
        </tbody>
      </table>
    </template>
  </CardMain>
</template>
