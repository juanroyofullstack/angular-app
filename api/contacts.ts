import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env['MAIL_USER'],
        pass: process.env['MAIL_PASS'], // contraseña de app de Gmail
      },
    });

    await transporter.sendMail({
      from: `"Portfolio" <${process.env['MAIL_USER']}>`,
      to: process.env['MAIL_TO'], // tu correo real
      subject: `Contacto: ${subject}`,
      text: `De: ${name} <${email}>\n\n${message}`,
    });

    res.status(200).json({ message: 'Mensaje enviado correctamente' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Email failed' });
  }
}
