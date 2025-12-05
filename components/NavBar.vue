<template>
  <header class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center gap-6">
          <NuxtLink to="/" class="text-2xl font-extrabold text-indigo-600">Nuxt-app</NuxtLink>
          <nav class="hidden md:flex items-center space-x-4">
            <NuxtLink to="/" class="text-sm text-gray-600 hover:text-gray-900">Home</NuxtLink>
            <NuxtLink to="/about" class="text-sm text-gray-600 hover:text-gray-900">About</NuxtLink>
            <NuxtLink to="#" class="text-sm text-gray-600 hover:text-gray-900">Docs</NuxtLink>
          </nav>
        </div>

        <div class="flex items-center gap-4">
          <NuxtLink to="#" class="hidden md:inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">Get started</NuxtLink>
          <button @click="menuOpen = !menuOpen" type="button" aria-label="Toggle menu" class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:bg-gray-100">
            <svg v-if="!menuOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div v-if="menuOpen" class="md:hidden border-t border-gray-100">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NuxtLink to="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Home</NuxtLink>
        <NuxtLink to="/about" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">About</NuxtLink>
        <NuxtLink to="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Docs</NuxtLink>
        <NuxtLink to="#" class="block w-full text-center mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg">Get started</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const menuOpen = ref(false);
</script>
