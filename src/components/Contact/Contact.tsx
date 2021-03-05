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
    <div className="contactContainer" name="contact">
      <div className="App-project-list-title contactTitle">
        Contact me
      </div>
      <form 
        className="contactForm" 
        onSubmit={submitForm} 
        method="post" 
        action="https://formspree.io/f/xzbkllzq"
      >
        <label className="formLabel">
          <input className="formInput" type="text" name="name" id="name" placeholder="Full Name" required/>
        </label>
        <label className="formLabel">
          <input className="formInput" type="email" name="email" id="email" placeholder="Email" required/>
        </label>
        <label className="formLabel">
          <textarea name="message" id="message" rows="5" placeholder="Message" required/>
        </label>
        {status === "SUCCESS" ? <button>Thanks !</button> : <button type="submit">Send</button>}
        {status === "ERROR" && <p>There was an error.</p>}
      </form>
    </div>
  )
}

export default Contact