import React, { useState } from 'react';
import FlashCardService from '../../api/FlashCardService';
import './ContactPage.css';

function ContactPage() {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const messageData = {
      subject,
      email,
      content
    };
    try {
      await FlashCardService.createMessage(messageData);
      setSubject('');
      setEmail('');
      setContent('');
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Subject</label>
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;
