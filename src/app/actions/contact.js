"use server";
import { Resend } from "resend";

// Apni Resend API Key yahan daalein ya .env file se lein
const resend = new Resend(process.env.RESEND_API_KEY);

export async function handleContactForm(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  try {
    // 1. School Admin ko notification bhejna
    await resend.emails.send({
      from: "School Portal <onboarding@resend.dev>",
      to: "kashishsingh124356@gmail.com",
      subject: `New Inquiry from ${name}: ${subject}`,
      html: `<h3>New Message Details:</h3>
             <p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Subject:</b> ${subject}</p>
             <p><b>Message:</b> ${message}</p>`,
    });

    await resend.emails.send({
      from: "Late R.K. Vidyamandir <onboarding@resend.dev>",
      to: email,
      subject: "Thank You for Contacting Late R.K. Vidyamandir",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
          <div style="background: #1e1b4b; padding: 30px; text-align: center;">
            <h1 style="color: #f59e0b; margin: 0;">R.K. Vidyamandir</h1>
            <p style="color: #fff; opacity: 0.8;">Nurturing Excellence Since 2000</p>
          </div>
          <div style="padding: 30px; color: #333;">
            <h2>Dear ${name},</h2>
            <p>Thank you for reaching out to us. We have successfully received your inquiry regarding <b>"${subject}"</b>.</p>
            <p>Our administration team is reviewing your message and will get back to you within <b>24 to 48 hours</b>.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 0.9rem; color: #666;"><b>Your message summary:</b><br/>${message}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p>For urgent matters, please call our office at <b>+91 8009337704</b>.</p>
            <p>Best Regards,<br/><b>Principal Office</b><br/>Late R.K. Vidyamandir</p>
          </div>
          <div style="background: #f8fafc; padding: 15px; text-align: center; font-size: 0.8rem; color: #999;">
            Ruhellapur, Khaga, Fatehpur, UP 212655
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
