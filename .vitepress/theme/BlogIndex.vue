<script setup lang="ts">
import { withBase } from 'vitepress'

defineProps<{
  posts: {
    title: string
    url: string
    date: { string: string; time: number }
    description: string | undefined
  }[]
}>()
</script>

<template>
  <section class="blog-index" aria-label="Blog posts">
    <ul class="post-list" role="list">
      <li v-for="post in posts" :key="post.url" class="post-list__item">
        <article class="post-card">
          <time class="post-card__date" :datetime="new Date(post.date.time).toISOString()">
            {{ post.date.string }}
          </time>
          <h2 class="post-card__title">
            <a class="post-card__link" :href="withBase(post.url)">{{ post.title }}</a>
          </h2>
          <p v-if="post.description" class="post-card__excerpt">{{ post.description }}</p>
        </article>
      </li>
    </ul>
  </section>
</template>
