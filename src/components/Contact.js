import React from "react"
import Title from "./Title"

const Contacts = ({ title }) => {
    return <section id="contact" className="contact-page">
      <Title title={title} />
      <article className="contact-form">
        <h3>get in touch</h3>
        <form action="https://formspree.io/f/mgepzdwk" method="POST">
          <div className="form-group">
            <input 
              type="text"
              name="name" 
              placeholder="name" 
              className="form-control" 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="email" 
              className="form-control" 
            />
            <input 
              type="text" 
              name="_gotcha" 
              className="gotcha"
            />
            <textarea 
              name="message" 
              id="" 
              rows="5"
              placeholder="message"
              className="form-control"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn btn">
            submit
          </button>
        </form>
      </article>
    </section>
  }
  
export default Contacts