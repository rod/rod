import Layout from './Layout.vue'
import BlogIndex from './BlogIndex.vue'
import './style.css'

export default {
  Layout,
  enhanceApp({ app }: { app: import('vue').App }) {
    app.component('BlogIndex', BlogIndex)
  },
}
