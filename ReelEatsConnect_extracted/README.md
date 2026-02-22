# ReelEats Creator Portal

A B2B marketplace platform connecting food content creators with restaurants, cafes, and bars.

## Project Status

### ✅ Completed
- Next.js 16 project setup with TypeScript and Tailwind CSS v4
- ReelEats branding and theme configuration (Poppins + Inter fonts, #fd7158 primary color)
- Supabase integration (client, server, middleware)
- Core UI components (Button, Input, Card, Badge, Avatar)
- Beautiful landing page with hero, how it works, and CTA sections
- Authentication pages:
  - Creator login/signup
  - Restaurant login/signup
  - Google OAuth integration ready
- Project folder structure
- Type definitions for database models

### 🚧 In Progress
- Awaiting Supabase credentials to connect database
- Once Supabase is configured, will implement:
  - Database schema
  - Creator & Restaurant profile pages
  - Browse functionality
  - Interest form system
  - Admin dashboard

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Next Steps

1. **Set up Supabase** (when credentials are ready):
   - Create project at supabase.com
   - Run database schema from IMPLEMENTATION_GUIDE.md
   - Add credentials to `.env.local`
   - Configure Google/Apple OAuth

2. **Build Core Features**:
   - Profile creation/editing (creators & restaurants)
   - Browse pages with filtering
   - Interest form system
   - Admin dashboard

3. **Deploy**:
   - Push to GitHub
   - Deploy to Vercel
   - Configure custom domain

## Documentation

- `CLAUDE.md` - Technical architecture and specifications
- `PRD.md` - Product requirements document
- `IMPLEMENTATION_GUIDE.md` - Step-by-step build instructions

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS v4
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **UI**: shadcn/ui components
- **Deployment**: Vercel

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your Supabase credentials:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

Built with ❤️ by the ReelEats Team
