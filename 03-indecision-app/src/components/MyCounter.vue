<template>
  <section>
    <h3 class="text-xl text-white">Counter: {{ counter }}</h3>
    <h3 class="text-xl text-white">Square: {{ squareCounter }}</h3>
    <div>
      <button class="btn bg-green-400 hover:bg-green-800" @click="counter++">+1</button>
      <button class="btn bg-green-400 hover:bg-green-800" @click="counter--">-1</button>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { useCounter } from '../composables/useCounter';

interface Props {
  initialValue?: number;
}
const props = defineProps<Props>();
const { counter, squareCounter } = useCounter(props.initialValue);

// const counter = ref(props.initialValue ?? 1);
// const squareCounter = computed(() => counter.value * counter.value);
</script>
