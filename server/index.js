import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const DB_FILE = path.resolve('leads.json');

// Middleware
app.use(cors());
app.use(express.json());

// Init DB
const initDB = async () => {
  try {
    await fs.access(DB_FILE);
  } catch {
    await fs.writeFile(DB_FILE, JSON.stringify({ contacts: [], estimates: [] }));
  }
};
initDB();

const saveLead = async (type, data) => {
  try {
    const fileContent = await fs.readFile(DB_FILE, 'utf-8');
    const db = JSON.parse(fileContent);
    const newEntry = { id: Date.now().toString(), date: new Date().toISOString(), ...data };
    if (type === 'contact') db.contacts.push(newEntry);
    if (type === 'estimate') db.estimates.push(newEntry);
    await fs.writeFile(DB_FILE, JSON.stringify(db, null, 2));
  } catch (error) {
    console.error('Error saving lead:', error);
  }
};

// Nodemailer setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.ethereal.email',
  port: process.env.SMTP_PORT || 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify email configuration on startup (optional but good practice)
if (process.env.SMTP_USER && process.env.SMTP_PASS) {
  transporter.verify((error, success) => {
    if (error) {
      console.error('SMTP Connection Error:', error);
    } else {
      console.log('Server is ready to take our messages');
    }
  });
}

// Helper to send beautiful HTML emails
const sendMail = async (to, subject, html) => {
  if (!process.env.SMTP_USER) {
    console.log(`[Development Mode] Email not sent. Configure SMTP in .env.`);
    console.log(`Subject: ${subject} | To: ${to}`);
    return;
  }
  return transporter.sendMail({
    from: process.env.SMTP_FROM || 'Blazincode Agency <no-reply@blazincode.com>',
    to,
    subject,
    html,
  });
};

// --- AUTH & ADMIN INTERFACE ---
const ADMIN_PASS = process.env.ADMIN_PASSWORD || 'admin123';

app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASS) {
    res.status(200).json({ success: true, token: 'blazincode-secure-token-2026' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.get('/api/admin/leads', async (req, res) => {
  const token = req.headers['authorization'];
  if (token !== 'Bearer blazincode-secure-token-2026') {
    return res.status(403).json({ success: false, message: 'Forbidden' });
  }
  try {
    const fileContent = await fs.readFile(DB_FILE, 'utf-8');
    res.status(200).json({ success: true, data: JSON.parse(fileContent) });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Database error' });
  }
});

// Routes
app.get('/', (req, res) => {
  res.send('Blazincode API is running smoothly.');
});

// Contact/Inquiry Endpoint
app.post('/api/connect', async (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing fields' });
  }

  try {
    // Save locally
    await saveLead('contact', { name, email, message });

    const adminEmail = process.env.RECEIVER_EMAIL;
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eaeaea;">
        <h2 style="color: #000;">New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
          ${message}
        </div>
      </div>
    `;

    // Send to admin
    await sendMail(adminEmail || email, `New Lead from ${name}`, htmlBody);
    
    // Auto-reply to user
    const userReply = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px;">
        <h2 style="color: #000;">Thank you, ${name}!</h2>
        <p>We have received your message and our team will get back to you shortly.</p>
        <p>- Blazincode Agency</p>
      </div>
    `;
    await sendMail(email, `We received your inquiry - Blazincode`, userReply);

    res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Connect Error:', error);
    res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
});

// Estimate Endpoint
app.post('/api/estimate', async (req, res) => {
  const { email, selections, total } = req.body;
  
  if (!email) {
    return res.status(400).json({ success: false, message: 'Email required' });
  }

  try {
    // Save locally
    await saveLead('estimate', { email, selections, total });

    const adminEmail = process.env.RECEIVER_EMAIL;
    
    let featuresList = selections.features && selections.features.length ? selections.features.join(', ') : 'None';
    
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eaeaea;">
        <h2 style="color: #000; text-transform: uppercase;">Estimate Locked</h2>
        <p><strong>Client Email:</strong> ${email}</p>
        <hr />
        <h3>Scope:</h3>
        <ul>
          <li><strong>Type:</strong> ${selections.type || 'N/A'}</li>
          <li><strong>Scale:</strong> ${selections.pages || 'N/A'}</li>
          <li><strong>Features:</strong> ${featuresList}</li>
        </ul>
        <h2 style="color: #000;">Total Estimate: $${total}</h2>
      </div>
    `;

    // Send to admin
    await sendMail(adminEmail || email, `New Estimate Lead!`, htmlBody);
    
    // Send copy to client
    const clientCopy = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px;">
        <h2>Your Blazincode Project Estimate</h2>
        <p>Hi there,</p>
        <p>You recently locked in an estimate with us. Here is a copy of your scope:</p>
        <ul>
          <li><strong>Type:</strong> ${selections.type}</li>
          <li><strong>Scale:</strong> ${selections.pages}</li>
          <li><strong>Features:</strong> ${featuresList}</li>
        </ul>
        <h3>Estimated Investment: $${total}</h3>
        <p>Our strategy team will be in touch shortly to refine this scope.</p>
        <p>- Blazincode</p>
      </div>
    `;
    await sendMail(email, `Your Blazincode Project Estimate`, clientCopy);

    res.status(200).json({ success: true, message: 'Estimate locked.' });
  } catch (error) {
    console.error('Estimate Error:', error);
    res.status(500).json({ success: false, message: 'Failed to lock estimate.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
