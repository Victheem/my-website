import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or custom SMTP
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1️⃣ Send email to admin
    await transporter.sendMail({
      from: `"Jawosh Tech Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL, // your email
      subject: `New Contact Form Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}

        Message:
        ${message}
      `,
    });

    // 2️⃣ Send confirmation email to user
    await transporter.sendMail({
      from: `"Jawosh Tech" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting Jawosh Tech!",
      html: `
        <div style="font-family:sans-serif; color:#333;">
          <h2 style="color:#800000;">Hi ${name},</h2>
          <p>Thank you for reaching out to <strong>Jawosh Tech</strong>. We've received your message and will get back to you shortly.</p>
          <p>Here's what you sent:</p>
          <blockquote style="border-left:4px solid #800000; padding-left:10px; color:#555;">
            ${message}
          </blockquote>
          <p>Best regards,<br/>The Jawosh Tech Team</p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Emails sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, message: "Email sending failed" },
      { status: 500 },
    );
  }
}
