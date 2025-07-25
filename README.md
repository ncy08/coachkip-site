# Coach Kip Website

Coach Kip is an AGI-powered running coach platform built as a Vue 3 single-page application. This repository contains the frontend website with comprehensive SEO optimization, deployed on Vercel, and a modern tech stack.

## 🚀 Live Site

- **Production**: [https://kip.coach](https://kip.coach)
- **Platform**: Vercel (with automatic www→non-www redirects)

## 🏗️ Tech Stack

### Core Framework

- **Vue 3** (Composition API)
- **Vuetify 3** (Material Design components & theming)
- **Vite 5** (Build tool with hot reload)
- **Vue Router 4** (SPA routing with HTML5 history mode)

### State & Data Management

- **Pinia** (State management with persistence)
- **@vueuse/head** (SEO & meta tag management)
- **Firebase Analytics** (User tracking)

### UI & UX Libraries

- **Lottie Web** (JSON animations)
- **EmailJS** (Contact form handling)
- **SweetAlert2** & **Vue3-Toastify** (User notifications)
- **Material Design Icons** (@mdi/font)

### Build & Development

- **ESBuild** (Fast minification)
- **Sass** (CSS preprocessing)
- **ESLint** (Code linting)

## 📋 Prerequisites

- **Node.js 20** or higher
- **npm** or **yarn**
- **Vercel CLI** (optional, for local deployments)

## 🛠️ Local Development

### Initial Setup

```bash
# Clone the repository
git clone [repository-url]
cd coachkip-site

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173` with hot module replacement.

### Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint with auto-fix
```

## 🚀 Deployment

### Primary: Vercel (Current)

Automated deployment via Vercel Git integration on push to `main` branch.

**Configuration:**

- `vercel.json` handles www→non-www redirects (301 redirects)
- SPA routing configured for proper Vue Router functionality
- Security headers included for production

**Manual deployment:**

```bash
npm run build
vercel --prod
```

### Legacy: Firebase Hosting & Google Cloud Run

Previous deployment configurations maintained for reference:

- `firebase.json` - Firebase Hosting setup
- `cloudbuild.yaml` & `Dockerfile` - Google Cloud Run setup

## 📁 Project Structure

```
coachkip-site/
├── src/
│   ├── App.vue                 # Root component
│   ├── main.js                # Application entry point
│   ├── assets/
│   │   ├── font/              # Extensive font collection (Aeonik, SF Pro, etc.)
│   │   ├── fonts/fonts.css    # Font definitions
│   │   └── image/             # Images (consolidation needed)
│   ├── components/
│   │   └── Sitemap.vue        # XML sitemap generator
│   ├── plugins/
│   │   └── vuetify.js         # Vuetify configuration & theming
│   ├── router/
│   │   └── index.js           # Route definitions
│   ├── stores/
│   │   └── mainStore.js       # Pinia store with persistence
│   └── views/
│       ├── HomeView.vue       # Main landing page (⚠️ 3,431 lines)
│       └── AboutView.vue      # About page (empty placeholder)
├── public/
│   ├── lotte/                 # Lottie animation files (12 animations)
│   ├── _headers               # Netlify-style headers (noindex for staging)
│   └── sitemap.xml            # Static sitemap
├── vercel.json               # Vercel deployment configuration
├── .github/workflows/         # GitHub Actions (legacy)
├── firebase.json              # Firebase Hosting configuration (legacy)
├── cloudbuild.yaml           # Google Cloud Build configuration (legacy)
├── app.yaml                  # App Engine configuration (legacy)
└── Dockerfile                # Container configuration (legacy)
```

## ⚠️ Known Issues & Technical Debt

### Critical

- **HomeView.vue is 3,431 lines** - Needs immediate component breakdown
- ✅ **Image assets consolidated** in `src/assets/image`
- **No testing infrastructure** - Vitest recommended for Vue 3
- **Large bundle size** due to extensive font collection

### Moderate

- **Hardcoded social links** pointing to generic domains
- **EmailJS configuration** should use environment variables
- **Missing lazy loading** for animations and large images

## 🔧 Configuration

### Environment Variables

Create `.env` files for environment-specific configuration:

```bash
# .env.local (not committed)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Firebase Configuration

Firebase configuration is in `firebase-config.js` with hardcoded keys (acceptable for client-only analytics).

### Vuetify Theming

Theme configuration in `src/plugins/vuetify.js` with localStorage persistence for dark/light mode.

### Vercel Configuration (vercel.json)

The `vercel.json` file handles important production configurations:

**WWW Redirect Fix:**

- Resolves Google Search Console "Alternate page with proper canonical tag" issues
- Automatically redirects `https://www.kip.coach/*` to `https://kip.coach/*` with 301 redirects
- Maintains SEO consistency with canonical tags in `index.html`

**SPA Routing:**

- All routes rewrite to `/index.html` for proper Vue Router functionality
- Enables direct URL access to routes like `/about` and `/workout-buddy`

**Security Headers:**

- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff

## 📊 SEO & Analytics

### Comprehensive SEO Setup

- **Meta tags**: Open Graph, Twitter Cards, robots directives
- **Structured data**: JSON-LD for Organization, WebSite, and Person
- **Sitemap**: Auto-generated via vite-plugin-sitemap
- **Analytics**: Google Analytics 4 + Firebase Analytics

### Important SEO Notes

- Remove `public/_headers` noindex directive for production
- Update meta descriptions for new pages
- Maintain router meta fields for title/description

## 🔄 Development Workflow

### Adding New Pages

1. Create component in `src/views/`
2. Add route to `src/router/index.js` with meta tags
3. Update sitemap configuration in `vite.config.js`

### Theming & Styling

- Dark/light mode toggle via localStorage
- Vuetify component defaults in `src/plugins/vuetify.js`
- Custom fonts loaded from `src/assets/font/`

### State Management

- User data persisted in `userInformation` via Pinia
- Ready for authentication/user preferences expansion

## 📈 Performance Optimization

### Recommendations

- [ ] Implement lazy loading for Lottie animations
- [ ] Optimize font loading (subset fonts)
- [ ] Consolidate duplicate image assets
- [ ] Add image optimization pipeline
- [ ] Implement code splitting for large components

### Current Optimizations

- Vendor chunk splitting for Vue/Vue Router
- CSS code splitting enabled
- Console/debugger removal in production
- ESBuild minification
- Asset inlining for small files

## 🤝 Contributing

### Quick Start Checklist

- [ ] Install Node.js 20+
- [ ] Run `npm ci && npm run dev`
- [ ] Choose deployment method (Firebase Hosting recommended)
- [ ] Set up EmailJS environment variables
- [ ] **Priority**: Refactor HomeView.vue into smaller components

### Code Standards

- ESLint configuration with Vue plugin
- Use Composition API for new components
- Follow Vuetify design system patterns
- Maintain SEO meta tags for new routes

## 📝 License

© 2025 McCarren Labs, LLC

---

**Need Help?** Check the comprehensive `programoverview.md` for detailed architecture documentation.
