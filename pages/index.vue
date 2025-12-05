<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
    <h1>Welcome to Nuxt-app</h1>
    <p>This is a minimal Nuxt 3 starter.</p>
    <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment">Increment</button>
    <button @click="counter.reset">Reset</button>
  </main>
</template>

<script setup lang="ts">
/* eslint-disable vue/multi-word-component-names */
import { useCounterStore } from '~/stores/counter';

const counter = useCounterStore();
</script>
