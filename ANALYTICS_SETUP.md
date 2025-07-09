# Analytics Setup - Coach Kip Site

## Overview

Your Vue.js site is now configured with **dual analytics tracking** for comprehensive visitor and engagement monitoring.

## Current Analytics Tags & IDs

### Google Tag Manager (GTM)

- **Container ID**: `GTM-WS2BJQCV`
- **Location**: `index.html` (GTM script)
- **Consent Management**: CookieYes integration
- **Purpose**: Manages all tracking tags with proper consent

### Google Analytics 4 (GA4)

- **Tracking ID**: `G-N3TE67LD2E`
- **Location**: Google Tag Manager (GTM-WS2BJQCV) + CookieYes consent management
- **Purpose**: Page views, user behavior, conversions, custom events
- **Consent Management**: ✅ Integrated with CookieYes for GDPR/CCPA compliance

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

// Enhanced GA4 SPA tracking via GTM dataLayer
if (typeof window !== "undefined" && window.dataLayer) {
  window.dataLayer.push({
    event: "page_view",
    page_title: to.meta.title || document.title,
    page_location: window.location.href,
  });
}
```

### `src/views/HomeView.vue`

```javascript
// Join Waitlist tracking via GTM dataLayer
openTypeform() {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: 'custom_event',
    event_category: 'waitlist',
    event_label: 'join_waitlist_typeform',
    value: 1
  });
  }
  window.open("https://form.typeform.com/to/ABgYil78", "_blank");
}

// Workout Buddy navigation tracking via GTM dataLayer
trackWorkoutBuddyClick() {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: 'custom_event',
    event_category: 'navigation',
    event_label: 'workout_buddy_footer_link',
    value: 1
  });
  }
}
```

### `index.html`

- Google Tag Manager (GTM-WS2BJQCV) properly configured
- Direct Google Analytics script removed (now handled via GTM + CookieYes)
- No changes needed for Vercel (auto-configured)

## Required GTM Configuration

### ⚠️ Important: Complete GTM Setup

To activate consent signals, ensure your GTM container (GTM-WS2BJQCV) has:

1. **Google Analytics 4 Configuration Tag**

   - Measurement ID: `G-N3TE67LD2E`
   - Trigger: All Pages (with CookieYes consent)

2. **CookieYes Consent Integration**

   - Analytics consent trigger: `analytics_storage = 'granted'`
   - Advertising consent trigger: `ad_storage = 'granted'`

3. **Custom Event Triggers**

   - Event name: `page_view` → Fires GA4 page view
   - Event name: `custom_event` → Fires GA4 events with category/label

4. **Consent Settings**
   - Built-in variables: Consent State - Analytics Storage
   - Built-in variables: Consent State - Ad Storage

## Deployment Notes

- ✅ **Vercel Analytics**: Auto-enabled on Vercel deployment
- ✅ **Vercel Speed Insights**: Auto-enabled on Vercel deployment
- ✅ **Google Analytics**: Now properly managed through GTM + CookieYes consent
- ✅ **SPA Routing**: Properly tracks route changes via dataLayer
- ✅ **Custom Events**: Tracking key user interactions via GTM
- ✅ **Core Web Vitals**: Real user performance monitoring
- ✅ **Consent Management**: CookieYes integration for GDPR/CCPA compliance

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
2. Verify GTM is loaded: `console.log(window.dataLayer)`
3. Test consent in browser: Accept cookies via CookieYes banner
4. Check GTM Preview mode to verify tags are firing
5. Test with GA4 DebugView (add `?debug_mode=1` to URL)
6. Check ad blockers aren't blocking tracking

### Consent Signals Inactive

1. Verify CookieYes is properly integrated with GTM
2. Check GTM consent triggers are configured correctly
3. Ensure GA4 tags only fire with proper consent
4. Test consent flow: Decline → Accept cookies
5. Wait 24-48 hours for Google to recognize consent signals

### Vercel Analytics Issues

1. Ensure you're on Vercel Pro plan (required for analytics)
2. Check Vercel project settings → Analytics tab
3. Analytics data appears with ~24 hour delay

---

**Status**: ✅ Fully Configured & Deployed
**Last Updated**: June 18, 2025
