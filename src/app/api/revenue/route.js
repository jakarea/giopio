import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { url, month, primary, email } = await req.json();

        // Create a transporter with your email service credentials
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Email message configuration
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.TO_EMAIL,
            subject: 'New Revenue Form Application',
            text: `
New Revenue Application Received

Store URL: ${url}
Monthly Revenue: ${month}
Primary Technical Blocker: ${primary}
Work Email: ${email}

---
This application was submitted from the revenue form on giopio.vercel.app
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return Response.json({ message: 'Application submitted successfully!' }, { status: 200 });
    } catch (error) {
        // Detailed error logging
        console.error('=== EMAIL SENDING ERROR ===');
        console.error('Error Code:', error.code);
        console.error('Error Message:', error.message);

        if (error.response) {
            console.error('Server Response:', error.response);
        }

        if (error.responseCode) {
            console.error('Response Code:', error.responseCode);
        }

        if (error.command) {
            console.error('Failed Command:', error.command);
        }

        // Nodemailer specific errors
        if (error.code === 'EAUTH') {
            console.error('AUTHENTICATION FAILED - Check EMAIL_USER and EMAIL_PASS in .env.local');
            console.error('Make sure 2FA is enabled and you are using an App Password');
        } else if (error.code === 'ECONNECTION') {
            console.error('CONNECTION FAILED - Check network connectivity');
        } else if (error.code === 'EMESSAGE') {
            console.error('MESSAGE ERROR - Invalid email format or content');
        } else if (error.code === 'ESOCKET') {
            console.error('SOCKET ERROR - Port or connection issue');
        }

        console.error('Full Error Object:', JSON.stringify(error, null, 2));
        console.error('========================');

        return Response.json({
            message: 'Error submitting application',
            error: error.message,
            code: error.code
        }, { status: 500 });
    }
}
