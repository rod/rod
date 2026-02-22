<script setup lang="ts">
import { useData, useRoute, Content, withBase } from 'vitepress'

const { frontmatter } = useData()
const route = useRoute()

const isPost = route.path.startsWith('/blog/posts/')
</script>

<template>
  <div class="site">
    <a class="skip-link" href="#main">Skip to main content</a>

    <header class="site-header" role="banner">
      <div class="site-header__inner">
        <a class="site-title" :href="withBase('/')" aria-label="Rod — Home">Rod.</a>
        <nav class="site-nav" aria-label="Main navigation">
          <a class="nav-link" :href="withBase('/')">Home</a>
          <a class="nav-link" :href="withBase('/blog/')">Blog</a>
        </nav>
      </div>
    </header>

    <main id="main" class="site-main" tabindex="-1">
      <article v-if="isPost" class="post-layout">
        <header class="post-header">
          <h1 class="post-title">{{ frontmatter.title }}</h1>
          <time v-if="frontmatter.date" class="post-date" :datetime="frontmatter.date">
            {{ new Date(frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
          </time>
        </header>
        <div class="post-body">
          <Content />
        </div>
        <footer class="post-footer">
          <a class="back-link" :href="withBase('/blog/')">&larr; Back to Blog</a>
        </footer>
      </article>

      <div v-else class="page-layout">
        <Content />
      </div>
    </main>

    <footer class="site-footer" role="contentinfo">
      <div class="site-footer__inner">
        <span class="footer-copy">&copy; {{ new Date().getFullYear() }} Rod</span>
        <a class="footer-link" href="https://github.com/rod" rel="noopener noreferrer" target="_blank"
          aria-label="GitHub profile (opens in new tab)">GitHub</a>
      </div>
    </footer>
  </div>
</template>
