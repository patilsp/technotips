
# TechnoTips - A Modern Fullstack Reddit Clone 

Built with the Next.js App Router, TypeScript & Tailwind


## Features

 - Infinite scrolling for dynamically loading posts
 - Authentication using NextAuth & Google
 - Custom feed for authenticated users
 - Advanced caching using [Upstash Redis](https://upstash.com/?utm_source=Josh2)
 - Optimistic updates for a great user experience
 - Modern data fetching using React-Query
 - A beautiful and highly functional post editor
 - Image uploads & link previews
 - Full comment functionality with nested replies
 - ... and much more

![image](https://github.com/patilsp/technotips/assets/35653819/98d0faab-36f9-4fc4-9032-083c5dcb9778)


![image](https://github.com/patilsp/technotips/assets/35653819/56ce77ed-68e8-4fe5-b9cf-6a0500fb4bb1)






## Getting started
copy these .env.example variables into a separate .env file:

```bash
DATABASE_URL=
NEXTAUTH_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

REDIS_URL=
REDIS_SECRET=
```

if you'd like, you can paste this snippet for quick component creation (optional):
```typescript
// vscode settings -> user snippets -> typescriptreact.json
```

```json
"Typescript React Function Component": {
    "prefix": "fc",
    "body": [
      "import { FC } from 'react'",
      "",
      "interface ${TM_FILENAME_BASE}Props {",
      "  $1",
      "}",
      "",
      "const $TM_FILENAME_BASE: FC<${TM_FILENAME_BASE}Props> = ({$2}) => {",
      "  return <div>$TM_FILENAME_BASE</div>",
      "}",
      "",
      "export default $TM_FILENAME_BASE"
    ],
    "description": "Typescript React Function Component"
  },
  ```

and that's all you need to get started!


## Acknowledgements

- [Upstash Redis](https://upstash.com/?utm_source=Josh2) for making this possible
- [Code with Antonio](https://www.youtube.com/@codewithantonio) for thumbnail design inspiration
- Shadcn's [Taxonomy respository](https://github.com/shadcn/taxonomy) for showcasing the post editor
