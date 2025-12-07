import { defineEventHandler } from 'h3';

export default defineEventHandler(() => {
  // Simple mock posts payload — replace with real data/backend later
  return [
    { id: 1, title: 'Welcome to Nuxt-app', body: 'This is a demo post served from a server route.' },
    { id: 2, title: 'Tailwind setup', body: 'Tailwind CSS is configured and working.' },
    { id: 3, title: 'Pinia store', body: 'Pinia provides reactive state management.' },
  ];
});
