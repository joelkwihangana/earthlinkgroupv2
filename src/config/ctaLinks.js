// src/config/ctaLinks.js
// Centralized CTA links - easy to update!

export const ctaLinks = {
  // Google Form for applications
  application: "https://forms.google.com/your-actual-form-id",

  // WhatsApp contact (replace with your number)
  whatsapp: "", // remember to add whatsapp link later

  // Calendly or booking link
  consultation: "https://calendly.com/earthlink/consultation",

  // Brochure download (Google Drive link or email capture)
  brochure:
    "https://drive.google.com/file/d/1aU7IpLZT9ZNh-ARuG6eEXV5N455wnLwJ/view?usp=drive_link",

  // Social media
  linkedin: "https://linkedin.com/company/earthlink",
  twitter: "https://twitter.com/earthlink",

  // Contact email (mailto link)
  email: "mailto:info@earthlink.rw",

  // Phone (tel link for mobile)
  phone: "tel:+250788447599",
};

// Status of each CTA (helps you track what's ready)
export const ctaStatus = {
  application: "ready", // ✅ Google Form exists
  whatsapp: "ready", // ✅ Always works
  consultation: "pending", // ⚠️ Need to set up Calendly
  brochure: "pending", // ⚠️ Need to create PDF
  alumni_chat: "disabled", // ❌ Not implemented yet
};

// Why this approach?

// ✅ All links in ONE place
// ✅ Easy to update when ready
// ✅ Team members can see what's done
// ✅ Can add comments for future work
