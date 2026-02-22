---
title: Rod
layout: page
---

# Rod.

Software. Writing. Notes.

---

## Recent Posts

<script setup>
import { data as posts } from './blog/posts.data.ts'
import { withBase } from 'vitepress'
const recent = posts.slice(0, 3)
</script>

<ul class="recent-posts" role="list">
  <li v-for="post in recent" :key="post.url" class="recent-posts__item">
    <a :href="withBase(post.url)">{{ post.title }}</a>
    <time :datetime="new Date(post.date.time).toISOString()"> — {{ post.date.string }}</time>
  </li>
</ul>

<style scoped>
.recent-posts {
  list-style: none;
  margin-top: 0;
}
.recent-posts__item {
  padding: 0.5rem 0;
  border-top: 1px solid #e0e0e0;
  font-size: 0.9375rem;
}
.recent-posts__item:last-child {
  border-bottom: 1px solid #e0e0e0;
}
.recent-posts__item a {
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-decoration: none;
  font-size: 0.875rem;
}
.recent-posts__item a:hover {
  color: #cc0000;
}
.recent-posts__item time {
  font-size: 0.75rem;
  color: #555;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 600;
}
</style>
