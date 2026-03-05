<script lang="ts" src="./CounterScript.ts"></script>
<template>
  <section>
    <h3 class="text-xl text-white">Conunter: {{ counter }}</h3>
    <h3 class="text-xl text-white">Square: {{ squareCounter }}</h3>
    <div class="mt-2">
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>
<style>
@reference "tailwindcss";
@layer components {
  .btn {
    @apply p-5 bg-blue-500 rounded-2xl hover:bg-blue-800 mr-2 text-white;
  }
}
</style>
