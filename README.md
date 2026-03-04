# RecConnect

Professional recruitment community platform built with Astro and Contentful.

## Tech Stack

- **Framework**: [Astro](https://astro.build) v4
- **CMS**: [Contentful](https://contentful.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Components**: [React](https://react.dev) (for interactive components)
- **Deployment**: Vercel/Netlify (your choice)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git
- Contentful account

### 1. Clone the Repository

```bash
git clone https://github.com/kimble-digital/recconnect.git
cd recconnect
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Contentful

1. Log in to [Contentful](https://app.contentful.com)
2. Create a new space called `recconnect`
3. Go to Settings → API Keys → Add API Key
4. Note down:
   - Space ID
   - Content Delivery API access token
   - Content Preview API access token

### 4. Configure Environment Variables

```bash
cp .env.example .env
```

Edit `.env` with your Contentful credentials:

```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_delivery_token
CONTENTFUL_PREVIEW_TOKEN=your_preview_token
```

### 5. Import Content Models

See `contentful/README.md` for instructions on importing the content models.

### 6. Run Development Server

```bash
npm run dev
```

Site will be available at `http://localhost:4321`

## Project Structure

```
recconnect/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── ...
│   ├── layouts/          # Page layouts
│   │   └── BaseLayout.astro
│   ├── lib/              # Utilities and integrations
│   │   └── contentful/   # Contentful client and types
│   ├── pages/            # File-based routing
│   │   ├── index.astro
│   │   ├── suppliers.astro
│   │   ├── events/
│   │   ├── insights/
│   │   └── contact.astro
│   └── styles/           # Global styles
│       └── global.css
├── public/               # Static assets
├── contentful/           # Content model definitions
├── astro.config.mjs      # Astro configuration
├── tailwind.config.mjs   # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## Git Workflow

This is the workflow that will save your arse when things go wrong.

### Daily Development

```bash
# 1. Before starting work, pull latest changes
git pull origin main

# 2. Create a branch for your feature/fix
git checkout -b feature/add-supplier-filtering

# 3. Make your changes, then stage them
git add .

# 4. Commit with a meaningful message
git commit -m "Add category filtering to supplier directory"

# 5. Push your branch
git push origin feature/add-supplier-filtering

# 6. When ready, merge to main (via GitHub PR or locally)
git checkout main
git merge feature/add-supplier-filtering
git push origin main
```

### When You Fuck Up

**Scenario 1: You made changes that broke everything and haven't committed**

```bash
# Discard all uncommitted changes
git checkout .

# Or discard changes to a specific file
git checkout src/pages/index.astro
```

**Scenario 2: You committed something broken**

```bash
# See recent commits
git log --oneline -10

# Revert the last commit (keeps changes as uncommitted)
git reset --soft HEAD~1

# Or completely undo the last commit (discards changes)
git reset --hard HEAD~1
```

**Scenario 3: You pushed something broken to main**

```bash
# Revert a specific commit (creates a new commit that undoes it)
git revert <commit-hash>
git push origin main
```

**Scenario 4: You want to see what the site looked like yesterday**

```bash
# Find the commit from yesterday
git log --oneline --since="2 days ago"

# Temporarily check out that commit
git checkout <commit-hash>

# Run the site to see how it was
npm run dev

# Go back to latest
git checkout main
```

### Branch Naming Convention

- `feature/` - New features (e.g., `feature/event-registration`)
- `fix/` - Bug fixes (e.g., `fix/mobile-nav-overlap`)
- `content/` - Content updates (e.g., `content/update-pricing`)
- `refactor/` - Code improvements (e.g., `refactor/contentful-client`)

## Content Management

### What Simon Can Edit (in Contentful)

- **Suppliers**: Add new suppliers, update details, feature/unfeature
- **Simple Events**: Create standard workshop/event pages
- **Articles**: Write Salt Reports and Rec Matters content
- **Speakers/Authors**: Add new speakers for events, new authors for articles

### What You Control (in code)

- Cornerstone events (custom designed event pages)
- Site navigation and structure
- Homepage layout and sections
- Membership tier configuration
- New features and functionality

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Netlify

1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables in Netlify dashboard

## Common Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build locally
npm run astro      # Run Astro CLI commands
```

## Troubleshooting

### "Module not found" errors

```bash
rm -rf node_modules
npm install
```

### Contentful not loading

1. Check `.env` file exists and has correct values
2. Ensure API keys are valid in Contentful dashboard
3. Check you've published content (not just saved as draft)

### Styles not applying

```bash
# Clear Astro cache
rm -rf .astro
npm run dev
```

## License

Private - Kimble Digital
