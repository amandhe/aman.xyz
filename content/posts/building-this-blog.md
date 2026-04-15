---
title: "building this blog"
date: "2026-03-30"
description: "how i set up a markdown blog with next.js and vercel"
tags: ["nextjs", "webdev"]
---

## Why markdown?

I wanted the simplest possible writing workflow:

1. Create a `.md` file in `content/posts/`
2. Add frontmatter (title, date, tags)
3. Write in markdown
4. Deploy

No CMS, no database, no admin panel. Just files and git.

## The stack

- **Next.js** with the App Router for static generation
- **Tailwind CSS** for styling
- **gray-matter** for parsing frontmatter
- **remark** for converting markdown to HTML
- **Vercel** for deployment

## How it works

Each markdown file in `content/posts/` becomes a page. The frontmatter at the top of the file provides metadata:

```yaml
---
title: "my post title"
date: "2026-03-30"
description: "a short description"
tags: ["tag1", "tag2"]
---
```

The rest is just markdown. Simple.
