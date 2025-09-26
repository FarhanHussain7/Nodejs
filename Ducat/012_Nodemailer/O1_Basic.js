import express from 'express';
import nodemailer from 'nodemailer';
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const app = express();

app.get('/', (req, res )=>{
    res.send('api working');
});

app.get('/sendMail', async (req, res)=>{
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_SERVER,
        secure: false,
        port: 587,
        service: "gmail",
        auth: {
            user: "farhanhussain81303@gmail.com",
            pass: ""  // Google App Password 
        },
        tls: {
            rejectUnauthorized: false
        }
    })
});