import type { Post } from '~/types/post';

/**
 * Resolve the API base from runtime config and fetch posts.
 * You can set NUXT_PUBLIC_API_BASE to a real API like https://jsonplaceholder.typicode.com
 */
export async function getPosts(): Promise<Post[]> {
  const config = useRuntimeConfig();
  const base = config.public.apiBase || '/api';
  const url = `${base.replace(/\/$/, '')}/posts`;
  try {
    const res = await fetch(url);
    if (!res.ok) return [];
    return (await res.json()) as Post[];
  } catch (e) {
    // Return empty array on errors so callers can handle an empty state
    return [];
  }
}

export async function getPost(id: number): Promise<Post | null> {
  const posts = await getPosts();
  return posts.find((p) => p.id === id) ?? null;
}
