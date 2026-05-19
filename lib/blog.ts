import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  project: string
  tags: string[]
  summary: string
  readingTime: string
}

export interface BlogPost extends BlogPostMeta {
  content: string
}

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

function getFilePath(slug: string): string | null {
  const projectDirs = fs.readdirSync(BLOG_DIR)
  for (const dir of projectDirs) {
    const candidate = path.join(BLOG_DIR, dir, `${slug}.mdx`)
    if (fs.existsSync(candidate)) return candidate
  }
  return null
}

export function getAllPosts(): BlogPostMeta[] {
  const posts: BlogPostMeta[] = []
  const projectDirs = fs.readdirSync(BLOG_DIR)

  for (const dir of projectDirs) {
    const dirPath = path.join(BLOG_DIR, dir)
    if (!fs.statSync(dirPath).isDirectory()) continue

    const files = fs.readdirSync(dirPath).filter((f) => f.endsWith('.mdx'))

    for (const file of files) {
      const slug = file.replace('.mdx', '')
      const raw = fs.readFileSync(path.join(dirPath, file), 'utf-8')
      const { data, content } = matter(raw)

      posts.push({
        slug,
        title: data.title as string,
        date: data.date as string,
        project: data.project as string,
        tags: (data.tags as string[]) ?? [],
        summary: data.summary as string,
        readingTime: readingTime(content).text,
      })
    }
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPostsByProject(projectSlug: string): BlogPostMeta[] {
  return getAllPosts().filter((p) => p.project === projectSlug)
}

export function getPost(slug: string): BlogPost | null {
  const filePath = getFilePath(slug)
  if (!filePath) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    project: data.project as string,
    tags: (data.tags as string[]) ?? [],
    summary: data.summary as string,
    readingTime: readingTime(content).text,
    content,
  }
}

export function getAllPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug)
}
