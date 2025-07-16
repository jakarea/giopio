import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();

        // Create a transporter with your email service credentials
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Change to your email provider
            auth: {
                user: process.env.EMAIL_USER,  // Use environment variables
                pass: process.env.EMAIL_PASS
            }
        });

        // Email message configuration
        const mailOptions = {
            from: email,
            to: process.env.TO_EMAIL, // Replace with your email
            subject: `New Contact Form Submission: ${subject}`,
            text: `
                Name: ${name}
                Email: ${email}
                Subject: ${subject}
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
