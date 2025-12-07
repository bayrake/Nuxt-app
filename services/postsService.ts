import type { Post } from '~/types/post';

export async function getPosts(): Promise<Post[]> {
  // Use global fetch (Nuxt exposes $fetch in components; using fetch works in both server and client)
  const res = await fetch('/api/posts');
  if (!res.ok) return [];
  return (await res.json()) as Post[];
}

export async function getPost(id: number): Promise<Post | null> {
  const posts = await getPosts();
  return posts.find((p) => p.id === id) ?? null;
}
