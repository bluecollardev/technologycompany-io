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
  <div class="p-3 h-screen bg-cover bg-hero-pattern">

  <header class="flex flex-nowrap flex-row">
      <div class="w-6/12 sm:w-4/12 px-4">
    <img src="assets/images/logo.png" class="h-auto"  />
    </div>
  </header>

  </div>
  <div class="p-3 bg-secondary"></div>
</template>
