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
  <div class="h-screen bg-cover bg-hero-pattern m-0">
    <header class="flex text-gray flex-nowrap flex-row items-center">
      <div class="w-7 sm:w-4/12 px-4 m-0">
        <img src="assets/images/logo.png" class="h-auto" />
      </div>
      <div
        class="
          flex flex-nowrap flex-row
          items-center
          w-6/12
          justify-evenly
          text-xl
          uppercase
          text-special
          font-header
        "
      >
        <span>Home</span>
        <span>About Us</span>
        <span>Services</span>
        <span>Contact</span>
      </div>
    </header>
    <span class="absolute right-10 bottom-20 font-title text-4xl"
      >Winning Never Felt Better</span
    >
  </div>
  <div class="p-3 pl-11 bg-secondary">
    <div class="flex flex-row justify-evenly flex-wrap p-5">
      <div class="w-6/12 h-72">
        <div class="bg-cover filter bg-about-us-team h-5/6 sepia"></div>
      </div>
      <div class="flex flex-col w-6/12 p-5 text-black">
        <div>
          <span class="text-xs text-gray-500 font-serif">WHO WE ARE</span>
          <h2>SS</h2>

          <p class="text-sm text-gray-800">
            An elite squad of technomancers with the solutions to all your
            problems. We use our cutting edge techniques to save you time and
            money.
          </p>
        </div>
        <div class="flex flex-row flex-wrap">
          <div class="flex flex-col w-2/4">
            <h3>Super Creative</h3>
            <p class="text-sm">Humble brag about how awesome we are.</p>
          </div>
          <div class="flex flex-col w-2/4">
            <h3>World Class Team</h3>
            <p class="text-sm">Humble brag about how awesome we are.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
