import { ref } from 'vue';
import type { Post } from '~/types/post';
import { getPosts } from '~/services/postsService';

export function usePosts() {
  const posts = ref<Post[] | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const load = async () => {
    loading.value = true;
    error.value = null;
    try {
      posts.value = await getPosts();
    } catch (e: any) {
      error.value = e?.message ?? 'Failed to load posts';
      posts.value = [];
    } finally {
      loading.value = false;
    }
  };

  return { posts, loading, error, load };
}
