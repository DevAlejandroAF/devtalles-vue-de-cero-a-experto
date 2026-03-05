<script lang="ts" setup>
import MyCounter from './components/counter/CounterTemplate.vue';
import MyCounter2 from './components/MyCounter.vue';
</script>

<template>
  <main class="grid justify-center">
    <h2 class="text-3xl font-bold mt-3 text-white">My First Vue App</h2>
    <br />
    <MyCounter :initialValue="5" />
    <MyCounter2 :initialValue="4" />
  </main>
</template>

<style>
@reference "tailwindcss";
@layer base {
  body {
    @apply bg-slate-800;
  }
}
</style>
