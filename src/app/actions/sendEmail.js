"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  try {
    // 1. AAPKO (Admin) Notification aayega
    await resend.emails.send({
      from: "School Portal <onboarding@resend.dev>",
      to: "kashishsingh124356@gmail.com", // Aapka email
      subject: `New Admission/Contact Inquiry: ${subject}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // 2. PARENT ko "Best Auto-Reply" jayega (Futuristic Style)
    await resend.emails.send({
      from: "Late R.K. Vidyamandir <onboarding@resend.dev>",
      to: email, // Parent ka email
      subject: "We Received Your Message - Late R.K. Vidyamandir",
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 15px; overflow: hidden;">
          <div style="background: #1e1b4b; padding: 40px; text-align: center;">
            <h1 style="color: #f59e0b; margin: 0;">R.K. Vidyamandir</h1>
            <p style="color: white; opacity: 0.8;">Empowering Minds Since 2000</p>
          </div>
          <div style="padding: 30px; color: #333;">
            <h3>Dear ${name},</h3>
            <p>Thank you for reaching out to <b>Late R.K. Vidyamandir School</b>. We have successfully received your inquiry regarding <b>"${subject}"</b>.</p>
            <p>Our administration team will review your message and get back to you within 24-48 business hours.</p>
            <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
              <p style="margin: 0; font-size: 0.9rem; color: #666;">"We are committed to providing an environment where every child can discover their potential."</p>
            </div>
            <p>For urgent admission queries, please call: <b>+91 8009337704</b></p>
            <br />
            <p>Best Regards,<br/><b>Principal's Office</b><br/>Late R.K. Vidyamandir</p>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
