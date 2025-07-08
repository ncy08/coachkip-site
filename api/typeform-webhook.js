export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { form_response } = req.body;

    // Validate that it's from your Typeform
    if (!form_response || form_response.form_id !== "ABgYil78") {
      return res.status(400).json({ error: "Invalid form data" });
    }

    // Extract email from the form response
    const emailAnswer = form_response.answers.find(
      (answer) => answer.type === "email"
    );
    const email = emailAnswer ? emailAnswer.email : null;

    if (!email) {
      return res.status(400).json({ error: "No email found in response" });
    }

    console.log("New waitlist signup:", {
      email,
      submitted_at: form_response.submitted_at,
      form_id: form_response.form_id,
    });

    // Send welcome email via EmailJS (same as your current setup)
    try {
      const emailjsResponse = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "service_tkswldt",
            template_id: "template_6b1b21r",
            user_id: "Z1rlaTLQEjhrWQFY8",
            template_params: {
              email: email,
            },
          }),
        }
      );

      if (emailjsResponse.ok) {
        console.log("Welcome email sent successfully");

        // Send confirmation email
        await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "service_tkswldt",
            template_id: "template_axf817f",
            user_id: "Z1rlaTLQEjhrWQFY8",
            template_params: {
              email: email,
            },
          }),
        });
      }
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Continue processing even if email fails
    }

    // Track in analytics (you can customize this based on your GTM setup)
    const analyticsData = {
      email: email,
      source: "typeform_webhook",
      timestamp: form_response.submitted_at,
      form_id: form_response.form_id,
      event: "waitlist_signup_completed",
    };

    // Return success response
    res.status(200).json({
      message: "Webhook processed successfully",
      email: email,
      timestamp: new Date().toISOString(),
      analytics: analyticsData,
    });
  } catch (error) {
    console.error("Webhook error:", error);
    res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
}
