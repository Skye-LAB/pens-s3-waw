<script setup>
import CardMain from "@/components/cards/CardMain.vue";
import InputControl from "@/components/inputs/InputControl.vue";
import TextAreaControl from "@/components/inputs/TextAreaControl.vue";
</script>

<template>
  <CardMain>
    <template #card-title> Preserve atient </template>
    <template #card-body>
      <InputControl label="Preserve Date" type="text" class="mt-2" />
      <div class="flex flex-row mt-2 items-center">
        <label class="basis-1/6">Name</label>
        <div class="flex basis-5/6 flex-row space-x-4 items-center">
          <input
            type="text"
            placeholder="Name"
            class="basis-11/12 border w-full h-5 px-3 py-5 font-normal hover:outline-none focus:outline-none focus:ring-1 focus:ring-primary-300 rounded-md"
          />
          <button
            class="flex justify-center items-center w-full basis-1/12 bg-info-100 border rounded-md py-2 px-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 text-slate-900"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="flex flex-row items-center mt-2">
        <label class="basis-1/6">Gender</label>
        <select
          class="basis-5/6 font-poppins rounded-md border text-gray-600 px-2 h-11 w-full bg-white"
        >
          <option selected>Male</option>
          <option>Female</option>
        </select>
      </div>
      <div class="flex flex-row items-center mt-2">
        <label class="basis-1/6">Place, Date of Birth</label>
        <div class="flex basis-5/6 flex-row space-x-4 items-center">
          <input
            type="text"
            placeholder="Place of Birth"
            class="basis-2/6 border w-full h-5 px-3 py-5 font-normal hover:outline-none focus:outline-none focus:ring-1 focus:ring-primary-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Date of Birth"
            class="basis-4/6 border w-full h-5 px-3 py-5 font-normal hover:outline-none focus:outline-none focus:ring-1 focus:ring-primary-300 rounded-md"
          />
        </div>
      </div>
      <InputControl label="Phone" type="text" class="mt-2" />
      <TextAreaControl label="Address" class="mt-2" />
      <InputControl label="City" type="text" class="mt-2"/>
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
