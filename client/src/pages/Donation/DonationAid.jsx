import React, { useState } from 'react';
import './DonationAid.css'; // Assume you have some CSS to style the component
import relief from '../../assets/relief.jpg';
const DonationAid = () => {
  const [amount, setAmount] = useState('');
  const [recurring, setRecurring] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your server or API
    setMessage('Thank you for your generous donation!');
    // Reset form fields
    setAmount('');
    setRecurring(false);
    setName('');
    setEmail('');
  };

  return (
    <section className="donation-aid">
      <div className="donation-form">
        <h2> Donate to Support Disaster Recovery </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="amount"> Donation Amount ($):</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={recurring}
                onChange={() => setRecurring(!recurring)}
              />
              Recurring Donation
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit">Donate Now</button>

          {message && <p className="confirmation-message">{message}</p>}
        </form>
      </div>
      <div className="donation-card">
        <img src = {relief} alt="Disaster Relief" />
        <div className="card-text">
          <h3> Support Our Relief Efforts </h3>
          <p>Your donations help provide essential aid to those affected by natural disasters. Every contribution counts in rebuilding lives and communities.</p>
        </div>
      </div>
    </section>
  );
};

export default DonationAid;
