import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <form id="send-message">
        <input type="text" id="name" name="Name" placeholder="Your name" />
        <input type="text" id="email" name="Email Address" placeholder="Your email address" />
          <textarea type="text" id="message" name="Message" for="message" placeholder="Your message"></textarea>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}
