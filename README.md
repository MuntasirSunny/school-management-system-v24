# School Management Application

This project is a School Management Application built using Next.js. It provides an interface for school administrators, teachers, students, and parents to manage and access various school-related functions such as student data, class schedules, attendance, and grades.

### Features

- Admin Panel: Manage students, teachers, classes, attendance, grades, and school announcements.
- Teacher Portal: Manage class schedules, mark attendance, and enter grades.
- Student Portal: Access to class schedules, attendance, and grades.
- Parent Portal: View their child's attendance and grades.
  Responsive UI: Works on desktops, tablets, and mobile devices.

### Tech Stack

- Frontend: Next.js (React framework)

- Backend: API routes (integrated into Next.js)

- Database: Prisma

- Authentication: NextAuth.js

- Styling: Tailwind CSS

- State Management: Context API

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Environment Variables

Create a .env.local file at the root of your project and add the necessary environment variables. An example .env.local file might look like this:

DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_secret_key

### Project Structure

.
├── src/
│ ├── app/
│ │ ├── page.tsx
│ │ └── ...
├── prisma/
├── public/
├── styles/
├── components/
├── lib/
├── .env.local
├── next.config.js
├── package.json
└── README.md

License
This project is open source and available under the MIT License.
