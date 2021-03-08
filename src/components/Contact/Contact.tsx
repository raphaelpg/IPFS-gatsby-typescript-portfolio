import React, { useState } from 'react'

interface FormValues {
  name: {value: string}
  email: {value: string}
  message: {value: string}
}

const Contact: React.FC = () => {
  const [status, setStatus] = useState<string>('')

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = (e.target as HTMLFormElement);

    const target: FormValues = e.target as typeof e.target & {
      name: {value: string}
      email: {value: string}
      message: {value: string}
    }
    
    if(typeof target.name.value === 'string' && typeof target.email.value === 'string' && typeof target.message.value === 'string') {
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
          <textarea name="message" id="message" placeholder="Message" required/>
        </label>
        {status === "SUCCESS" ? <button>Thanks !</button> : <button type="submit">Send</button>}
        {status === "ERROR" && <p>There was an error.</p>}
      </form>
    </div>
  )
}

export default Contact