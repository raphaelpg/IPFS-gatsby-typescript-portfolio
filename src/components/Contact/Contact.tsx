import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [status, setStatus] = useState<string>('')

  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS")
      } else {
        setStatus("ERROR")
      }
    };
    xhr.send(data);
  }

  return (
    <div className="contactContainer">
      <form 
        className="contactForm" 
        onSubmit={submitForm} 
        method="post" 
        action="https://formspree.io/f/xzbkllzq"
      >
        <label>
          Name
          <input type="text" name="name" id="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" id="email" required />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows="5" required />
        </label>
        {status === "SUCCESS" ? <p>Thanks !</p> : <button type="submit">Send</button>}
        {status === "ERROR" && <p>There was an error.</p>}
      </form>
    </div>
  )
}

export default Contact