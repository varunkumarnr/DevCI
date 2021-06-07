import React from "react";
import "../Contact/Contact.css";
export const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <div className='contactTitle'>
        <h1>Message Us</h1>
        <p>
          Got some suggestions/ issues? We would like <span>here from you</span>
        </p>
      </div>
      <div className='contactBlock'>
        <form
          action='https://formsubmit.co/a9517a6aaa05d7a47d17530576ed6a1e '
          method='POST'
        >
          <input
            type='text'
            name='name'
            id='nameInput'
            className='nameInput'
            placeholder='Your Name *'
            required
          />
          <input
            type='email'
            name='email'
            id='emailInput'
            className='emailInput'
            placeholder='Email *'
            required
          />
          <textarea
            name='message'
            id='msgInput'
            className='msgInput'
            placeholder='Your Message *'
            required
          />
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  );
};
