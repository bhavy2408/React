import { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <main className="page inner-page contact-page">
      <section className="contact-section"><div className="container contact-grid">
        <div className="contact-copy"><span className="eyebrow"><span className="eyebrow-dot" /> LET’S MAKE A CONNECTION</span><h1>Have a thought?<br /><span>We’re listening.</span></h1><p>Questions, ideas, or just want to say hi? Send a note and start a conversation.</p><div className="contact-aside"><span className="aside-icon">✳</span><div><strong>Every good project starts with a conversation.</strong><span>Tell us what’s on your mind.</span></div></div></div>
        <div className="contact-form-card"><div className="form-heading"><span className="eyebrow">DROP US A NOTE</span><h2>Let’s talk.</h2><p>We’ll get back to you as soon as we can.</p></div>
          {submitted && <div className="success-message" role="status">Thanks for reaching out! Your message is ready to send.</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-row"><label>Your name<input name="name" type="text" placeholder="Jane Smith" autoComplete="name" required /></label><label>Email address<input name="email" type="email" placeholder="jane@example.com" autoComplete="email" required /></label></div>
            <label>What’s this about?<select name="topic" defaultValue="" required><option value="" disabled>Choose a topic</option><option>Learning web development</option><option>A project idea</option><option>Something else</option></select></label>
            <label>Your message<textarea name="message" rows="4" placeholder="A few words to get us started…" required /></label>
            <button className="button-primary submit-button" type="submit">Send your message <span aria-hidden="true">↗</span></button>
            <span className="form-footnote">We’ll only use your details to reply to your message.</span>
          </form>
        </div>
      </div></section>
    </main>
  )
}

export default Contact
