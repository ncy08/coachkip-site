# Analytics Setup - Coach Kip Site

## Overview

Your Vue.js site is now configured with **dual analytics tracking** for comprehensive visitor and engagement monitoring.

## Current Analytics Tags & IDs

### Google Analytics 4 (GA4)

- **Tracking ID**: `G-N3TE67LD2E`
- **Location**: `index.html` (gtag script)
- **Purpose**: Page views, user behavior, conversions, custom events

### Vercel Analytics

- **Auto-configured**: ✅ (No ID needed - uses Vercel deployment)
- **Location**: `src/main.js` (inject import)
- **Purpose**: Real-time page views, performance metrics, unique visitors

### Vercel Speed Insights

- **Auto-configured**: ✅ (No ID needed - uses Vercel deployment)
- **Location**: `src/main.js` (injectSpeedInsights import)
- **Purpose**: Core Web Vitals, page load performance, real user metrics

## What's Being Tracked

### Automatic Tracking

- ✅ **Page Views** (both GA4 and Vercel)
- ✅ **SPA Route Changes** (Google Analytics enhanced)
- ✅ **User Sessions**
- ✅ **Geographic Data**
- ✅ **Device/Browser Information**
- ✅ **Performance Metrics** (Vercel Analytics)
- ✅ **Core Web Vitals** (Vercel Speed Insights)
- ✅ **Real User Monitoring** (Speed Insights)

### Custom Event Tracking

- ✅ **Join Waitlist Button** (`waitlist/join_waitlist_typeform`)
- ✅ **Workout Buddy Footer Links** (`navigation/workout_buddy_footer_link`)

## Analytics Dashboard Access

### Google Analytics

- **URL**: https://analytics.google.com
- **Property**: Coach Kip (G-N3TE67LD2E)
- **Key Reports**:
  - Realtime → Overview
  - Reports → Engagement → Pages and screens
  - Reports → Acquisition → Traffic acquisition

### Vercel Analytics

- **URL**: https://vercel.com/dashboard/analytics
- **Access**: Your Vercel dashboard → kip.coach project → Analytics tab
- **Key Metrics**:
  - Unique visitors
  - Page views
  - Top pages
  - Top referrers

### Vercel Speed Insights

- **URL**: https://vercel.com/dashboard/speed-insights
- **Access**: Your Vercel dashboard → kip.coach project → Speed Insights tab
- **Key Metrics**:
  - First Contentful Paint (FCP)
  - Largest Contentful Paint (LCP)
  - First Input Delay (FID)
  - Cumulative Layout Shift (CLS)
  - Time to First Byte (TTFB)

## Files Modified

### `src/main.js`

```javascript
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";

inject(); // Vercel Analytics initialization
injectSpeedInsights(); // Vercel Speed Insights initialization

// Enhanced GA4 SPA tracking in router.afterEach
gtag("config", "G-N3TE67LD2E", {
  page_title: to.meta.title || document.title,
  page_location: window.location.href,
});
```

### `src/views/HomeView.vue`

```javascript
// Join Waitlist tracking
openTypeform() {
  gtag('event', 'click', {
    event_category: 'waitlist',
    event_label: 'join_waitlist_typeform',
    value: 1
  });
  window.open("https://form.typeform.com/to/ABgYil78", "_blank");
}

// Workout Buddy navigation tracking
trackWorkoutBuddyClick() {
  gtag('event', 'click', {
    event_category: 'navigation',
    event_label: 'workout_buddy_footer_link',
    value: 1
  });
}
```

### `index.html`

- Google Analytics gtag script properly configured
- No changes needed for Vercel (auto-configured)

## Deployment Notes

- ✅ **Vercel Analytics**: Auto-enabled on Vercel deployment
- ✅ **Vercel Speed Insights**: Auto-enabled on Vercel deployment
- ✅ **Google Analytics**: Working across all pages including `/workout-buddy`
- ✅ **SPA Routing**: Properly tracks route changes
- ✅ **Custom Events**: Tracking key user interactions
- ✅ **Core Web Vitals**: Real user performance monitoring

## Testing Your Analytics

### 1. Real-time Testing

```bash
# Visit your site and check real-time reports
open https://kip.coach
# Then check: GA4 → Realtime → Overview (should show 1 active user)
```

### 2. Event Testing

- Click "Join Waitlist" button → Check GA4 Events
- Click "Workout Buddy" footer link → Check GA4 Events
- Navigate between pages → Check page view tracking

### 3. Vercel Analytics

- Visit Vercel dashboard → Project → Analytics
- Should show page views within 24 hours

### 4. Vercel Speed Insights

- Visit Vercel dashboard → Project → Speed Insights
- Should show Core Web Vitals data within 24 hours
- Test page performance with multiple visits

## Future Analytics Enhancements

### Additional Events to Consider

```javascript
// Email signup tracking
gtag("event", "generate_lead", {
  currency: "USD",
  value: 10.0,
});

// Social media clicks
gtag("event", "click", {
  event_category: "social",
  event_label: "instagram_click",
});

// Contact form submissions
gtag("event", "form_submit", {
  event_category: "contact",
  event_label: "contact_form",
});
```

## Troubleshooting

### Analytics Not Showing Data

1. Check browser console for errors
2. Verify gtag is loaded: `console.log(typeof gtag)`
3. Test with GA4 DebugView (add `?debug_mode=1` to URL)
4. Check ad blockers aren't blocking tracking

### Vercel Analytics Issues

1. Ensure you're on Vercel Pro plan (required for analytics)
2. Check Vercel project settings → Analytics tab
3. Analytics data appears with ~24 hour delay

---

**Status**: ✅ Fully Configured & Deployed
**Last Updated**: June 18, 2025
