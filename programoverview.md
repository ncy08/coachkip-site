# CURRENT PROJECT STATUS

## Current Stage (As of January 2025)

**STATUS**: Project is fully functional and deployed on Vercel with comprehensive SEO and analytics setup.

**RECENT CHANGE**: Successfully migrated from Google Cloud Run to Vercel deployment with automatic www→non-www redirects configured.

### What We're Trying to Achieve

- Deploy a new `/workout-buddy` Vue.js page that works both:
  1. **Client-side navigation** (clicking links from homepage) ✅ Works
  2. **Direct URL access** (typing URL in browser) ❌ Returns 404

### Root Cause of Issues

The fundamental problem is **SPA routing misconfiguration** on the production server:

1. **Local Development**: Works perfectly with Vite dev server (localhost:5173)
2. **Production Build**: `npm run build` succeeds without errors
3. **Production Deployment**: Server doesn't properly handle SPA routes

### Technical Details of the Problem

**What happens when you visit a direct URL in an SPA:**

1. Browser requests `https://kip.coach/workout-buddy` from server
2. Server looks for a file at `/workout-buddy` (doesn't exist)
3. Server returns 404 instead of serving `index.html`
4. Vue Router never gets a chance to handle the route

**What SHOULD happen:**

1. Browser requests `https://kip.coach/workout-buddy`
2. Server serves `index.html` for ALL routes (SPA configuration)
3. Vue Router loads and handles `/workout-buddy` client-side
4. Page renders correctly

### Changes Made During Troubleshooting

**Deployment Configuration Changes:**

1. **programoverview.md** - Updated to reflect Cloud Run deployment (not Firebase Hosting)
2. **Dockerfile** - Modified to use `http-server` with `--spa` flag for proper SPA routing
3. **Attempted Express.js server** - Added then removed server.js (overcomplicated the solution)

**Vue Component Status:**

- ✅ **WorkoutBuddyView.vue** - Exists and compiles successfully
- ✅ **Router configuration** - `/workout-buddy` route properly defined
- ✅ **Sitemap generation** - Includes workout-buddy URL
- ✅ **SEO metadata** - Proper meta tags and structured data

### Current Dockerfile Configuration (FIXED)

```dockerfile
# Build stage
FROM node:20 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
# Nginx config with proper SPA routing
RUN echo 'server { \
    listen 8080; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
```

**ISSUE RESOLVED**: The problem was that `http-server` doesn't actually support the `--spa` flag. The solution is using nginx with proper `try_files` configuration that serves `index.html` for all unmatched routes.

### Deployment Method: Google Cloud Run

- **Build Process**: Cloud Build compiles Vue.js app into static files
- **Container**: Node.js 20 with http-server serving `/dist` folder
- **Problem**: Despite `--spa` flag, direct URLs still return 404

### Immediate Next Steps Required

1. **Deploy the fixed Dockerfile** to Cloud Run with nginx configuration
2. **Test direct URL access** to https://kip.coach/workout-buddy after deployment
3. **Verify all routes work**: Test /, /about, and /workout-buddy with direct URL access
4. **Monitor Cloud Run logs** to ensure nginx is serving requests properly

### What Was NOT Broken

- ✅ Vue.js application code (components, routing, build process)
- ✅ Home page functionality
- ✅ Client-side navigation between pages
- ✅ SEO configuration and meta tags
- ✅ Git history (all previous work preserved)

### Current Git Status

- All original user changes preserved in git history
- Recent commits only modified deployment infrastructure
- WorkoutBuddyView.vue component unchanged and functional
- No data or code loss occurred

---

# ORIGINAL PROJECT OVERVIEW

High-level view
• Single-page web app built with Vue 3 + Vite
• Vuetify 3 provides the UI component library and theming
• Pinia (with pinia-plugin-persistedstate) stores client data in localStorage
• Vue Router exposes two public routes: "/" (Home) and "/about"
• @vueuse/head is used for per-route <title>/<meta> management and SEO
• Firebase (analytics only) is initialised on page load
• **DEPLOYMENT NOTE**: The project uses **Vercel** for deployment with automatic Git integration
• CI/CD handled by Vercel's automatic deployments
• vercel.json configures www→non-www redirects and SPA routing
• Legacy deployment configs (Cloud Run, Firebase) maintained for reference

Entry point
src/main.js

1. Creates the Vue app
2. Installs router, Pinia, Vuetify, and @vueuse/head
3. Mounts at #app
4. Watches every navigation and updates the document title / description via router.afterEach

Routing
src/router/index.js
– createRouter(createWebHistory)
– Each route object contains meta.title & meta.description for SEO
– **IMPORTANT**: Uses router.beforeEach (not afterEach as documented) to update meta tags
– router.afterEach in main.js is a defensive fallback

State management
src/stores/mainStore.js
state: { userInformation: {} }
getters / actions – mostly stubs with some leftover counter logic
persist: true so userInformation survives page reloads via pinia-plugin-persistedstate

UI layer
• src/App.vue is just a <router-view>, keeping the rest of the UI per-page
• src/views/HomeView.vue is **3,431 lines** – an extremely large Vuetify layout that contains:
– dark / light mode toggle (uses localStorage theme key)
– responsive toolbar + right-side drawer menu with slide-in animation
– hero "COACH KIP" headline with animated text effects, parallax background
– Lottie animations from public/lotte/ directory (12 animation files)
– email wait-list form (v-text-field + "Join Waitlist" button calling sendEmail)
– social links with hover labels and floating text effects
– several named sections (#home, #whatwedo, #kip, #milesran, #contact) with smooth scrolling
– fixed footer with copyright + privacy link
• AboutView.vue is currently empty – placeholder for future content
• src/components/Sitemap.vue generates an XML sitemap in the browser (supplemented by build-time sitemap from vite-plugin-sitemap)

Assets
– **Extensive font collection** in src/assets/font including:

- Aeonik family (Air, Black, Bold, Light, Medium, Regular, Thin)
- SF Pro Display variants
- Chalet Book family
- Poppins variants
  – fonts.css in src/assets/fonts/
  – Images consolidated in src/assets/image (includes team photos, tech stack icons, platform logos)
  – 12 Lottie JSON animations in public/lotte/ (Animation1.json through Animation13.json, missing Animation5.json)
  – **Comprehensive SEO setup** in index.html with extensive meta/OG/Twitter tags and JSON-LD structured data

Dependencies (key additions from package.json review)
• **axios**: ^1.7.9 (HTTP client)
• **sass-embedded**: ^1.83.1 (Sass preprocessing)
• **vue-meta**: ^2.4.0 (additional head management)
• **@mdi/font**: ^7.4.47 (Material Design Icons)

Build & tooling
vite.config.js
• @vitejs/plugin-vue + vite-plugin-sitemap (no vite-plugin-vuetify found)
• Output to dist/, vendor chunk splitting for ['vue', 'vue-router'], esbuild minification
• **Source maps enabled** (sourcemap: true)
• **CSS code splitting** enabled
• **Console/debugger removal** in production via terserOptions
• assetsInclude allows .lottie/.json/.xml

Dockerfile (production image)
FROM node:20
WORKDIR /usr/src/app
COPY package\*.json && npm install
COPY . . && npm run build
CMD npx http-server dist

**Deployment Options**

**Primary: Vercel (Current)**
vercel.json

1. Automatic Git-based deployment on push to main branch
2. Automatic www→non-www redirects (301 permanent redirects)
3. SPA routing configuration for proper Vue Router functionality
4. Security headers included

**Legacy: Google Cloud Run (Cloud Build)**
cloudbuild.yaml & Dockerfile - maintained for reference

1. npm install && npm run build (Node 20 image)
2. docker build - creates containerized application
3. deploy to Cloud Run service

**Alternative: Google App Engine (Cloud Build)**
app.yaml

1. npm install && npm run build (Node 20 image)
2. gcloud app deploy (uses app.yaml)
   app.yaml: Node.js 20 runtime serving dist/index.html for all routes

**Legacy: Firebase Hosting (GitHub Actions - Not Currently Used)**
.github/workflows/firebase-hosting-deploy.yml - Available but not the primary deployment method

Other noteworthy files
• **.eslintrc.cjs**: ESLint configuration with Vue plugin
• **.vscode/extensions.json**: Recommended VS Code extensions
• **public/\_headers**: Sets X-Robots-Tag: noindex (useful for staging)
• **robots.txt and sitemap.xml**: Both in /public and root for crawlers
• **CoachKip.jpg, Privacy.html**: Static assets
• **firebase-debug.log**: Firebase CLI debug output (should be gitignored)

**Key Configuration Details**
• **Firebase config** in firebase-config.js contains hardcoded API keys (acceptable for client-only analytics)
• **Vuetify theme** configured with localStorage persistence, Material Design Icons default
• **Custom font loading** via extensive font collection in src/assets/font
• **SEO optimization** with comprehensive meta tags, Open Graph, Twitter Cards, and JSON-LD structured data

In practice
When you run npm run dev Vite serves the SPA on localhost:5173.
The SPA loads Firebase analytics, attaches Vuetify + dark-mode, and shows the landing page.
Pressing "Join Waitlist" calls sendEmail() inside HomeView (emailjs-com dependency).
Build (npm run build) outputs a static /dist folder ready for Docker and Cloud Run deployment.

**Major Architecture Concerns**
• **HomeView.vue is 3,431 lines** - desperately needs component breakdown
• ✅ **Image assets consolidated** - all moved to src/assets/image
• **Large bundle size** due to extensive font collection and animations
• **No testing infrastructure** (no Vitest, Cypress, or Jest configuration found)

Extending the site
• Add real content to AboutView.vue or create new views and register them in router/index.js
• **CRITICAL**: Break down HomeView.vue into smaller components for maintainability
• Store authenticated user data or plan configurations in Pinia's state.userInformation
• Connect to Firestore/Auth if you need more than analytics – firebase-config.js is ready for extension
• Ensure Cloud Run service configuration is optimized for performance and cost
• Consider consolidating image assets and optimizing font loading
• Replace hardcoded social links (currently pointing to generic x.com, linkedin.com, etc.)
• Add environment variables for EmailJS configuration
• Implement testing framework (Vitest recommended for Vue 3)
• Consider lazy loading for large font collection

**Development Workflow**
• **Local dev**: npm install → npm run dev (Vite serves localhost:5173)
• **Production build**: npm run build (outputs to /dist)
• **Linting**: npm run lint (ESLint with Vue plugin)
• **Preview**: npm run preview (preview production build locally)

**Performance & SEO Notes**
• Comprehensive SEO setup with proper meta tags, structured data
• Google Analytics 4 integration via gtag
• Firebase Analytics SDK integration
• **Remove public/\_headers noindex** when deploying to production
• Consider lazy loading for Lottie animations and large images
• **Hero animations + parallax** can be performance-heavy on mobile

That's the comprehensive overview: a feature-rich Vue 3 + Vuetify landing page with dual deployment options (Firebase Hosting preferred), extensive SEO optimization, but requiring significant refactoring for maintainability, particularly the massive HomeView.vue component.

────────────────────────────────

    1. Tech stack & high-level design
       ────────────────────────────────
       • Front-end framework: Vue 3 (Composition API)
       • Component / design system: Vuetify 3
       • Routing: Vue-Router 4 (HTML5 history mode)
       • State: Pinia + pinia-plugin-persistedstate (writes selected state slices to

localStorage)
• Head management / SEO: @vueuse/head (adds <title>, meta, etc.)
• Analytics: Firebase (only the Analytics service is initialised for now) +
Google Analytics snippet in index.html
• Misc. client libs:
– emailjs-com (wait-list form)
– lottie-web (JSON animations)
– sweetalert2, vue3-toastify (pop-ups/toasts)
• Build tool: Vite 5 + esbuild (vite.config.js)
• Static site generation: vite-plugin-sitemap (creates dist/sitemap.xml at build
time)
• Docker image: Node 20 + http-server serving the /dist folder
• CI/CD: Google Cloud Build → Google App Engine (standard, Node 20 runtime)

Everything lives client-side; there is no custom server code or database.
Data flow is thus: user action → Vue component → Pinia store / emailjs / Analytics →
DOM.

──────────────────────────────── 2. Repository layout (top level)
────────────────────────────────
app.yaml App Engine runtime descriptor (Node 20, serve
dist/index.html)
cloudbuild.yaml Cloud Build steps: npm ci, npm run build, gcloud app
deploy
Dockerfile Docker recipe matching the above (useful for local
container runs)
index.html "root" HTML; includes SEO meta, GA, JSON-LD schema markup
firebase-config.js Initialises Firebase + Analytics
vite.config.js Vite build/serve settings, plugin registration
package\*.json / yarn.lock Dependency manifests & scripts
README.md Quickstart (needs updating for current pipeline)
robots.txt, sitemap.xml Crawling hints for production
public/\_headers Netlify-style header file forcing "X-Robots-Tag: noindex"
(often used on preview deploys)
CoachKip.jpg, Privacy.html Extra static assets delivered verbatim

──────────────────────────────── 3. src/ – application source
────────────────────────────────
src/main.js
• Entry point executed by Vite.
• Sets up Pinia, registers persisted-state plugin, Vuetify, router, @vueuse/head,
then mounts #app.
• Includes a router.afterEach fallback that manually updates document.title & meta
description (defensive code in case a component doesn't call useHead).

src/App.vue
Minimal shell → just <router-view>. All real UI sits inside pages.

src/router/index.js
• Declare route array:
/ → HomeView.vue
/about → AboutView.vue
• meta fields hold title/description strings used by beforeEach hook for SEO.
• createWebHistory is configured with BASE_URL from Vite env so the SPA works behind
sub-paths.

src/stores/mainStore.js
• Single Pinia store ("store"). Only userInformation is persisted to localStorage.
• Other getters/actions are stubbed; ready to add authentication or training-plan
state later.

src/plugins/vuetify.js
• Wraps Vuetify createVuetify with default theme & component defaults.
• Reads preferred theme out of localStorage (key: "theme").
• Sets Material Design Icons as default icon set.

src/views/
HomeView.vue 1,600+ LOC heavy landing page with:
– responsive hero headline, parallax background, dark/light
switch
– Vuetify toolbar + slide-in drawer menu
– "Join waitlist" email capture (emailjs-com)
– social icon row with hover-floating labels
– section anchors (#whatwedo, #kip, #contact…) for smooth
scrolling
– Copyright & Privacy links in fixed footer
AboutView.vue Empty placeholder.
AppCustomLogo.vue Small internal component (blue banner with "Vue 3 template").

src/components/
Sitemap.vue Client-side generator that builds an XML sitemap string (mainly
for debugging; production sitemap is built by vite-plugin-sitemap).

src/assets/ Fonts, images, SVG logo
✅ **CONSOLIDATED** All images moved to src/assets/image (team photos, tech stack icons, platform logos)

──────────────────────────────── 4. Build / dev workflow
────────────────────────────────
• Local dev: npm install → npm run dev
– Vite serves localhost:5173 with hot-module-reload.
– Environment variables can be injected via Vite .env\* files (none currently).

• Production build: npm run build
– vite.config.js outputs to /dist; splits vendor chunk, strips console/debugger,
inlines small assets.
– vite-plugin-sitemap writes dist/sitemap.xml using the routes ['/','/about'] and
hostname https://kip.coach.

• Docker: docker build -t kip-site . → docker run -p 8080:8080 kip-site
– Runs npx http-server dist inside Node 20 container.

• Cloud Build: push to the configured branch, Cloud Build installs deps, runs build,
then gcloud app deploy which consumes app.yaml.
– App Engine (standard) hosts the static files; every request gets dist/index.html,
so Vue-Router client-side handles routing.

──────────────────────────────── 5. Operations / maintenance notes
────────────────────────────────

    1. Secrets
       • Firebase API key is hard-coded (fine for client-only Analytics).
       • EmailJS public key / service ID will likely need .env injection; look for

these in HomeView.vue. 2. Dark-/light-mode
• toggle writes localStorage.theme, Vuetify reads it on init.
• Consider using "prefers-color-scheme" to set default. 3. Accessibility & performance
• Hero animation + parallax can be heavy on mobile.
• Many inline styles; you may want to move them to scoped <style>. 4. SEO
• @vueuse/head plus router meta is the canonical path. The manual afterEach in
main.js is a safety net; maintain both or remove duplication.
• Remember to remove public/\_headers `X-Robots-Tag: noindex` when promoting to
production. 5. Source duplication
• ✅ **Consolidated** - All images moved to src/assets/image. 6. Testing / linting
• ESLint is configured (`npm run lint`) but pre-commit hooks are not installed.

       • There is no automated test suite; Cypress or Vitest could be added.
    7. Future backend integration
       • Firebase SDK is already initialised; adding Auth, Firestore or Functions is a

natural next step.
• Pinia store is the place to sync that data.

──────────────────────────────── 6. How everything ties together when the site loads
────────────────────────────────

    1. index.html is served → loads /src/main.js (Vite injects correct path).
    2. main.js initialises Firebase Analytics, loads plugins, mounts #app.
    3. Router navigates to "/" → HomeView.vue.
    4. HomeView renders Vuetify layout; theme is chosen, fonts load from

/src/assets/font, Lottie JSON pulled from /public/lotte. 5. User clicks "Join Waitlist" → sendEmail() uses emailjs-com REST call →
SweetAlert/Toast confirms. 6. Navigation to /about will lazy-load AboutView (empty for now). 7. GA / Firebase Analytics track page_view events automatically.

──────────────────────────────── 7. Quick wins / onboarding checklist
────────────────────────────────
□ Install Node 20, run npm ci && npm run dev
□ Verify EmailJS environment variables are present (check for .env files)
□ Verify Cloud Run deployment configuration is properly set up
□ Remove noindex header (\_headers) on production deploy
□ Fill out AboutView.vue and update vite-plugin-sitemap initialRoutes
□ Replace hard-coded social links placeholders (x.com, linkedin.com, etc.)
□ Audit duplicate images / fonts to shrink bundle size
□ **PRIORITY**: Convert long HomeView.vue (3,431 lines) into smaller child components for maintainability
□ Add .env file for EmailJS configuration
□ Set up testing framework (Vitest recommended)
□ Check Chrome Lighthouse for performance/accessibility regressions after changes
□ Consider implementing lazy loading for animations and images
