<!-- About page -->
<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <NuxtLink to="/" class="text-xl font-semibold text-indigo-600">Nuxt-app</NuxtLink>
            </div>
            <nav class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <NuxtLink to="/" class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">Home</NuxtLink>
              <NuxtLink to="/about" class="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium text-indigo-700">About</NuxtLink>
            </nav>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <NuxtLink to="#" class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700">Get started</NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <main class="max-w-4xl mx-auto p-6">
      <h1 class="text-3xl font-extrabold mb-4">About Nuxt-app</h1>
      <p class="text-gray-600 mb-4">This is a small demo Nuxt 3 project set up with TypeScript, Vitest, ESLint, Prettier and Tailwind CSS.</p>
      <p class="text-gray-600">You can use this page to describe your project, add links to docs, licensing, or contributor instructions.</p>
    </main>
  </div>
</template>

<script setup lang="ts">
/* simple static about page */
</script>
