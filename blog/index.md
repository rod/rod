---
title: Blog
layout: page
---

# Blog.

<script setup>
import { data as posts } from './posts.data.ts'
</script>

<BlogIndex :posts="posts" />
