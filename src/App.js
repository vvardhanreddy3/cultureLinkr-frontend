import React, { useState } from 'react';
import "./App.css"

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleHome = () => {
    window.location.reload();
  }; 

  return (
    <div className="App">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <h1 className='title'>Welcome Form</h1>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder='Please enter your name here'
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder='Enter your email here'
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder='Your personal message'
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className='success-message'>
          <iframe title="Tick Iframe" src="https://lottie.host/embed/74dac972-b83d-4ea3-8323-cd860fd5da04/vaktgJ2Q4F.json">
          </iframe>
          <h2>Success! Your message has been sent.</h2>
          <p>Thank you, {formData.name}. We will get back to you at {formData.email}.</p>
          <button onClick={handleHome}>Another Response</button>
        </div>
      )}
    </div>
  );
}

export default App;
