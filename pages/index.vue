<script lang="ts" setup>
import { useNuxtApp } from "#app";
// hello world component is auto imported
const title = "Hello World";
// fetching data from /server/api/hello.ts
const { data } = await useFetch("/api/hello");
if (process.server) console.log("server");
if (process.client) console.log("client");
// access the request object server side
if (process.server) {
  const nuxtApp = useNuxtApp();
  console.log(nuxtApp.ssrContext?.req.headers);
}
</script>

<template>
  <div class="h-screen bg-cover bg-hero-pattern ">

  <header class="flex text-gray flex-nowrap flex-row items-center">
      <div class="w-7 sm:w-4/12 px-4 m-0">
    <img src="assets/images/logo.png" class="h-auto"  />
    </div>
    <div class="flex flex-nowrap flex-row items-center w-6/12 justify-evenly text-xl">
    <span 	>Home</span>
    <span>About Us</span>
    <span>Services</span>
    <span>Contact</span>
    </div>
  </header>
  <span class="absolute right-10	bottom-20 font-title text-4xl">Winning Never Felt Better</span>
  </div>
  <div class="p-3 bg-secondary"></div>
</template>
