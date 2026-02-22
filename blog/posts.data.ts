import { createContentLoader } from 'vitepress'

interface Post {
  title: string
  url: string
  date: { string: string; time: number }
  description: string | undefined
}

export default createContentLoader('blog/posts/*.md', {
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title as string,
        url,
        date: formatDate(frontmatter.date as string),
        description: frontmatter.description as string | undefined,
      }))
      .sort((a, b) => b.date.time - a.date.time)
  },
})

function formatDate(raw: string): { time: number; string: string } {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  }
}
