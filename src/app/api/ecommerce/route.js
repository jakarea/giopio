import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, phone, message } = await req.json();

        // Create a transporter with your email service credentials
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Change if needed
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Email message configuration
        const mailOptions = {
            from: process.env.EMAIL_USER, // Use your email as sender
            to: process.env.TO_EMAIL, // Your email to receive the message
            subject: 'New Contact Form Submission',
            text: `
                Name: ${name}
                Phone: ${phone}
                Message: ${message}
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return Response.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Email send error:', error);
        return Response.json({ message: 'Error sending email' }, { status: 500 });
    }
}