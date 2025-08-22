import WP from "@/lib/API";
import { Post } from "@/lib/wp/types";

export const fetchPosts = async (query: Record<string, string> = {}) => {
  try {
    const response = await WP.get<Post[]>("/posts", { params: query });
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const getPostBySlug = async (slug: string) => {
  try {
    const response = await WP.get<Post[]>(`/posts?slug=${slug}`);
    return response.data?.[0];
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
};
