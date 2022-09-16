<script setup>
import CardMain from "@/components/cards/CardMain.vue";
</script>

<template>
  <CardMain>
    <template #card-title> Add Medecine </template>
    <template #card-body>
      <div class="flex flex-row items-center">
        <label class="basis-1/6">Code</label>
        <input
          type="text"
          placeholder="Code"
          class="basis-5/6 border w-full h-5 px-3 py-5 mt-2 font-normal hover:outline-none focus:outline-none focus:ring-1 focus:ring-primary-300 rounded-md"
        />
      </div>
      <div class="flex flex-row items-center mt-2">
        <label class="basis-1/6">Name</label>
        <input
          type="text"
          placeholder="Name"
          class="basis-5/6 border w-full h-5 px-3 py-5 font-normal hover:outline-none focus:outline-none focus:ring-1 focus:ring-primary-300 rounded-md"
        />
      </div>
      <div class="flex flex-row items-center mt-2">
        <label class="basis-1/6">Stock</label>
        <input
          type="text"
          placeholder="Stock"
          class="basis-5/6 border w-full h-5 px-3 py-5 font-normal hover:outline-none focus:outline-none focus:ring-1 focus:ring-primary-300 rounded-md"
        />
      </div>
      <div class="flex flex-row items-center mt-2">
        <label class="basis-1/6">Price</label>
        <input
          type="number"
          placeholder="Price"
          class="basis-5/6 border w-full h-5 px-3 py-5 font-normal hover:outline-none focus:outline-none focus:ring-1 focus:ring-primary-300 rounded-md"
        />
      </div>
      <div class="flex flex-row items-center mt-2">
        <label class="basis-1/6">Expired Date</label>
        <input
          type="text"
          placeholder="Expired Date"
          class="basis-5/6 border w-full h-5 px-3 py-5 font-normal hover:outline-none focus:outline-none focus:ring-1 focus:ring-primary-300 rounded-md"
        />
      </div>
      <div class="flex flex-row items-center mt-2">
        <label class="basis-1/6">Unit</label>
        <select
          class="basis-5/6 font-poppins rounded-md border text-gray-600 px-2 h-11 w-full bg-white"
        >
          <option selected>Bottle</option>
          <option>Tablet</option>
        </select>
      </div>
      <div class="flex justify-end mt-5">
        <button
          class="bg-info-100 font-poppins px-4 py-2 rounded-md text-slate-800"
        >
          Save
        </button>
      </div>
    </template>
  </CardMain>
</template>
