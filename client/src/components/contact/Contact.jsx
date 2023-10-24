

import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const IsSent = useState(false); // Track if the email has been sent

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'firstName') {
      setErrors({
        ...errors,
        firstName: value.trim() === '' ? 'Invalid First Name' : '',
      });
    } else if (name === 'lastName') {
      setErrors({
        ...errors,
        lastName: value.trim() === '' ? 'Invalid Last Name' : '',
      });
    } else if (name === 'email') {
      setErrors({
        ...errors,
        email: !validateEmail(value) ? 'Invalid Email Address' : '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.firstName || errors.lastName || errors.email) {
      alert('Please fix the validation errors before sending the email.');
      return;
    }
    axios({
      method: 'POST',
      url: 'https://peterlauer-portfolio-e7f9019d6d53.herokuapp.com/api/sendEmail',
      data: formData,
    })
    .then((response) => {
      if (response.data.message === 'Email sent successfully') {
        alert('Message Sent.');
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          message: '',
        });
      } else {
        alert('Message failed to send.');
      }
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      alert('Message failed to send.');
    });
};

  return (
    <div className="contact">
      <h2>Contact me:</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="company">Company (Optional):</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;