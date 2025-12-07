<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900">
    <NavBar />

    <main class="max-w-6xl mx-auto p-6 lg:p-12">
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">Build fast with Nuxt & Tailwind</h1>
          <p class="text-lg text-gray-600 mb-6">A minimal starter wired with TypeScript, Pinia, Vitest, ESLint, Prettier and Tailwind CSS. Beautiful defaults and modern tooling so you can focus on features.</p>
          <div class="flex gap-3">
            <NuxtLink to="#" class="inline-flex items-center px-5 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">Get started</NuxtLink>
            <NuxtLink to="/about" class="inline-flex items-center px-5 py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50">Learn more</NuxtLink>
          </div>
        </div>

        <div class="bg-white rounded-2xl p-6 shadow-md">
          <h3 class="text-lg font-semibold mb-3">Interactive demo</h3>
          <p class="text-sm text-gray-500 mb-4">Try the simple counter below — this uses Pinia for state management.</p>
          <div class="flex items-center gap-4">
            <div class="text-3xl font-bold">{{ counter.count }}</div>
            <div class="flex gap-2">
              <button @click="counter.increment" class="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">+</button>
              <button @click="counter.reset" class="px-3 py-2 border rounded-md hover:bg-gray-50">Reset</button>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-xl shadow">
          <h4 class="font-semibold mb-2">Fast DX</h4>
          <p class="text-sm text-gray-600">Vite + Nuxt hot-module replacement and TypeScript support out of the box.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow">
          <h4 class="font-semibold mb-2">Testable</h4>
          <p class="text-sm text-gray-600">Vitest and @vue/test-utils included so you can write component tests easily.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow">
          <h4 class="font-semibold mb-2">Flexible state</h4>
          <p class="text-sm text-gray-600">Pinia integrated via @pinia/nuxt for composable, type-safe stores.</p>
        </div>
      </section>
      
      <!-- Latest posts from service -->
      <section class="mt-12">
        <h2 class="text-2xl font-semibold mb-4">Latest posts</h2>
        <div class="grid gap-4">
          <template v-if="posts && posts.length">
            <div v-for="post in posts" :key="post.id" class="bg-white p-4 rounded-lg shadow">
              <h3 class="font-semibold">{{ post.title }}</h3>
              <p class="text-sm text-gray-600 mt-1">{{ post.body }}</p>
            </div>
          </template>
          <p v-else class="text-sm text-gray-500">No posts found.</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
/* eslint-disable vue/multi-word-component-names */
import { ref, onMounted } from 'vue';
import { useCounterStore } from '~/stores/counter';
import type { Post } from '~/types/post';
import { getPosts } from '~/services/postsService';

const counter = useCounterStore();
const posts = ref<Post[] | null>(null);

onMounted(async () => {
  posts.value = await getPosts();
});
</script>
