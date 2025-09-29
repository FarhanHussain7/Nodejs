import express from 'express';
import nodemailer from 'nodemailer';

const app = express();

// ✅ Only disable TLS checks in development — remove the global override
if (process.env.NODE_ENV !== 'production') {
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
}

app.get('/', (req, res) => {
  res.send('API working');
});

app.get('/sendMail', async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // ✅ Gmail doesn't need host/port
      auth: {
        user: 'farhanhussain81303@gmail.com',
        pass: 'srby tgzx gcot lhvj' // ✅ App password
      },
      tls: {
        rejectUnauthorized: process.env.NODE_ENV === 'production' // ✅ Secure in prod
      }
    });

    const mailInfo = {
      from: 'farhanhussain81303@gmail.com',
      to: ['fh4456200@gmail.com'],
      subject: 'Test Email Using NodeJs',
      html: `
        <h1>This is a Test Email</h1>
        <h3>Congratulations !!!</h3>
        <p>Please follow the below steps to claim your amount</p>
        <pre>
          Hello, World 
          Hiiiiii
          Good Morning
        </pre>
      `,
      attachments: [
        { filename: 'profile.png', path: './profile.png' }
      ]
    };

    await transporter.sendMail(mailInfo);
    res.send('Mail sent successfully');
  } catch (error) {
    console.error('Error sending mail:', error);
    res.status(500).send('Failed to send mail');
  }
});

// ✅ Server starts outside route
app.listen(5000, () => {
  console.log('Server started at http://localhost:5000');
});