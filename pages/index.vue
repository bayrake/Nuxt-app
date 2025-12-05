<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <!-- Responsive nav -->
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <NuxtLink to="/" class="text-xl font-semibold text-indigo-600">Nuxt-app</NuxtLink>
            </div>
            <nav class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <NuxtLink to="#" class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">Home</NuxtLink>
              <NuxtLink to="#" class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">About</NuxtLink>
              <NuxtLink to="#" class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">Docs</NuxtLink>
            </nav>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <NuxtLink to="#" class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700">Get started</NuxtLink>
          </div>
          <!-- Mobile menu button -->
          <div class="-mr-2 flex items-center sm:hidden">
            <button @click="menuOpen = !menuOpen" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg v-if="!menuOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menuOpen state. -->
      <div v-if="menuOpen" class="sm:hidden">
        <div class="pt-2 pb-3 space-y-1">
          <NuxtLink to="#" class="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 bg-indigo-50 text-indigo-700 text-base font-medium">Home</NuxtLink>
          <NuxtLink to="#" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 text-base font-medium">About</NuxtLink>
          <NuxtLink to="#" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 text-base font-medium">Docs</NuxtLink>
          <NuxtLink to="#" class="block w-full text-center mt-2 px-4 py-2 bg-indigo-600 text-white rounded">Get started</NuxtLink>
        </div>
      </div>
    </header>

    <main class="max-w-4xl mx-auto p-6">
      <h1 class="text-3xl font-extrabold mb-4">Welcome to Nuxt-app</h1>
      <p class="text-gray-600 mb-4">This is a minimal Nuxt 3 starter.</p>

      <div class="bg-white shadow rounded p-4">
        <p class="mb-2">Count: <span class="font-medium">{{ counter.count }}</span></p>
        <div class="flex gap-2">
          <button @click="counter.increment" class="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">Increment</button>
          <button @click="counter.reset" class="px-3 py-1 border rounded hover:bg-gray-50">Reset</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
/* eslint-disable vue/multi-word-component-names */
import { ref } from 'vue';
import { useCounterStore } from '~/stores/counter';

const counter = useCounterStore();
const menuOpen = ref(false);
</script>
