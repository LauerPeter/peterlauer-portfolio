

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path'); 

dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/api/sendEmail', async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  const emailUser = process.env.EMAIL_USER;       
  const emailPassword = process.env.EMAIL_PASSWORD; 

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: 'Gmail', 
    auth: {
      user: emailUser,       
      pass: emailPassword,   
    },
  });

  const mailOptions = {
    from: email,                 
    to: emailUser,
    subject: 'Contact Form Submission',
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully'); 
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ error: 'Email sending failed' });
  }
});




app.use(express.static(path.join(__dirname, '..', 'client/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client/build/index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
