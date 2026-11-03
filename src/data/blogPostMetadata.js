import { BLOG_POSTS } from "./blogPosts.js";

export const BLOG_POST_METADATA = BLOG_POSTS.map((post) => ({
  slug: post.slug,
  primaryKeyword: post.primaryKeyword,
  title: post.title,
  description: post.description,
  faqs: Array.isArray(post.faqs) ? post.faqs : [],
}));
