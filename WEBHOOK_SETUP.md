# Typeform Webhook Setup

This document explains how to set up and use the Typeform webhook integration for the Coach Kip waitlist.

## Overview

The webhook system allows Typeform to automatically send form submissions to your website for processing. This enables:

- Automatic email sending via EmailJS
- Analytics tracking
- Data processing and storage
- Better integration with your existing systems

## Files Created

### `/api/typeform-webhook.js`

The main webhook handler that processes Typeform submissions:

- Validates incoming webhook data
- Extracts email addresses from form responses
- Sends welcome emails via EmailJS
- Tracks analytics data
- Returns proper HTTP responses

## Setup Instructions

### 1. Deploy to Vercel

These serverless functions will automatically deploy when you push to your repository.

### 2. Configure Typeform Webhook

1. Go to your Typeform dashboard
2. Select your form (ID: ABgYil78)
3. Go to Connect → Webhooks
4. Add a new webhook with URL: `https://kip.coach/api/typeform-webhook`
5. Select "When someone submits a response"
6. Test the webhook

### 3. Test the Setup

Test the webhook by submitting your Typeform or using the manual curl command shown in the troubleshooting section.

## Webhook URL

**Production:** `https://kip.coach/api/typeform-webhook`

## Expected Webhook Data

The webhook expects this JSON structure from Typeform:

```json
{
  "event_id": "unique-event-id",
  "event_type": "form_response",
  "form_response": {
    "form_id": "ABgYil78",
    "token": "response-token",
    "submitted_at": "2025-01-08T18:26:30Z",
    "answers": [
      {
        "type": "email",
        "email": "user@example.com",
        "field": {
          "id": "2nj6uAbcXcUu",
          "type": "email"
        }
      }
    ]
  }
}
```

## EmailJS Integration

The webhook uses your existing EmailJS configuration:

- **Service ID:** `service_tkswldt`
- **Template IDs:**
  - `template_6b1b21r` (welcome email)
  - `template_axf817f` (confirmation email)
- **User ID:** `Z1rlaTLQEjhrWQFY8`

## Response Format

### Success Response (200)

```json
{
  "message": "Webhook processed successfully",
  "email": "user@example.com",
  "timestamp": "2025-01-08T18:26:30.123Z",
  "analytics": {
    "email": "user@example.com",
    "source": "typeform_webhook",
    "timestamp": "2025-01-08T18:26:30Z",
    "form_id": "ABgYil78",
    "event": "waitlist_signup_completed"
  }
}
```

### Error Responses

- **405:** Method not allowed (non-POST requests)
- **400:** Invalid form data or missing email
- **500:** Internal server error

## Security Features

- Validates form ID matches your Typeform (ABgYil78)
- Only accepts POST requests
- Extracts email safely from form responses
- Continues processing even if email sending fails

## Monitoring

Check your Vercel function logs to monitor webhook activity:

1. Go to Vercel dashboard
2. Select your project
3. Go to Functions tab
4. View logs for `typeform-webhook`

## Troubleshooting

### Common Issues

1. **Webhook not firing**

   - Check Typeform webhook configuration
   - Verify webhook URL is correct
   - Test using the manual curl command below

2. **Emails not sending**

   - Check EmailJS service configuration
   - Verify template IDs are correct
   - Check function logs for errors

3. **Form ID mismatch**
   - Ensure your Typeform ID is exactly `ABgYil78`
   - Check webhook payload structure

### Testing

1. **Test webhook manually:**

   ```bash
   curl -X POST https://kip.coach/api/typeform-webhook \
     -H "Content-Type: application/json" \
     -d '{
       "form_response": {
         "form_id": "ABgYil78",
         "answers": [{"type": "email", "email": "test@example.com"}]
       }
     }'
   ```

2. **Submit actual form:**
   Fill out your Typeform to test the complete integration

## Future Enhancements

Consider adding:

- Database storage for form responses
- Advanced analytics tracking
- Multiple form support
- Email validation and verification
- Rate limiting for webhook calls
- Webhook signature verification

## Support

If you encounter issues:

1. Check Vercel function logs
2. Submit your actual Typeform
3. Verify Typeform webhook configuration
4. Check EmailJS service status
