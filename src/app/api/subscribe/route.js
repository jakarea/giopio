import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { email } = await req.json();

        if (!email) {
            return new Response(
                JSON.stringify({ message: 'Email is required' }),
                { status: 400 }
            );
        }

        // Setup Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',  // You can change this to your preferred email provider
            auth: {
                user: process.env.EMAIL_USER,  // Your email address
                pass: process.env.EMAIL_PASS,  // Your email password or app password
            },
        });

        // Create email content
        const emailContent = `
            <p>New subscription from: ${email}</p>
        `;

        // Send the email
        await transporter.sendMail({
            from: process.env.EMAIL_USER,  // The email you are sending from
            to: process.env.TO_EMAIL,  // The recipient email address
            subject: 'New Subscription',
            html: emailContent,  // HTML content of the email
        });

        return new Response(
            JSON.stringify({ message: 'Subscription successful' }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(
            JSON.stringify({ message: 'Failed to send email' }),
            { status: 500 }
        );
    }
}