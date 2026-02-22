import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Rod',
  description: 'Software. Writing. Notes.',
  base: '/',
  cleanUrls: true,
  srcExclude: ['README.md'],
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/rod' },
    ],
  },
})
