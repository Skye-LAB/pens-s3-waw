<template>
  <div class="flex flex-row space-x-10 p-10 h-full">
    <div class="basis-2/4"></div>
    <div class="basis-2/4">
      <div
        class="w-full h-full bg-white rounded-xl shadow-xl p-20 font-poppins text-gray-800 antialiased flex flex-col text-center"
      >
        <span class="text-2xl font-bold">Sign In</span>
        <span class="text-gray-600">Clinic Information System</span>
        <div class="flex flex-col space-y-3 my-10">
          <div>
            <label for="email" class="block font-semibold text-left"
              >Email</label
            >
            <input
              type="email"
              id="email"
              placeholder="Email"
              class="border w-full h-5 px-3 py-5 mt-2 font-normal hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
            />
          </div>
          <div>
            <label for="password" class="block font-semibold text-left"
              >Password</label
            >
            <input
              type="password"
              id="password"
              placeholder="Password"
              class="border w-full h-5 px-3 py-5 mt-2 font-normal hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
            />
          </div>
        </div>
        <div class="mb-10">
          <button class="bg-blue-500 w-full py-2 rounded-md text-blue-100">
            Sign In
          </button>
        </div>
        <span class="text-sm"
          >Not a member yet?<a href="#" class="text-blue-500"> Sign Up</a></span
        >
      </div>
    </div>
  </div>
</template>
