import { Link } from 'react-router'

const values = [
  { mark: '01', title: 'Clarity over complexity', text: 'Good learning makes the hard things feel approachable. We keep each step focused and explain the why behind the code.' },
  { mark: '02', title: 'Practice with purpose', text: 'The best way to learn is to make things. Every concept should help you create something useful and yours.' },
  { mark: '03', title: 'Progress at your pace', text: 'There is no one timeline for learning. Show up, stay curious, and let your confidence grow with every project.' },
]

function About() {
  return (
    <main className="page inner-page about-page">
      <section className="inner-hero"><div className="container inner-hero-content"><span className="eyebrow"><span className="eyebrow-dot" /> A LITTLE ABOUT US</span><h1>Good things happen<br />when you <span>keep building.</span></h1><p>Route2 is a space for learning the craft of the web: making ideas tangible, solving problems, and getting a little better with every line of code.</p><div className="inner-hero-meta"><span>CURIOUS MINDS WELCOME</span><span className="meta-divider" /><span>MADE FOR THE JOURNEY</span></div></div></section>
      <section className="about-story"><div className="container story-grid"><div className="story-label"><span className="eyebrow">WHY ROUTE2</span><div className="story-stamp">R<span>2</span></div></div><div className="story-copy"><h2>The web is built by people who started exactly where you are.</h2><p>It can feel like there is a lot to learn. We believe the way through is simple: make the next step clear, give yourself room to experiment, and keep turning what you learn into something you can see.</p><p>Whether this is your first page or your next big idea, you belong here. Let’s make the web a little more yours.</p><Link className="inline-link" to="/contact">Get in touch <span aria-hidden="true">↗</span></Link></div></div></section>
      <section className="values-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">WHAT GUIDES US</span><h2>Learn with intention.</h2></div><p>A few simple principles shape everything we make and teach.</p></div><div className="values-grid">{values.map((item) => <article className="value-card" key={item.mark}><span className="value-mark">{item.mark}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>
      <section className="about-cta"><div className="container about-cta-inner"><span className="eyebrow">YOUR STORY STARTS WITH A STEP</span><h2>What will you make?</h2><Link className="button-primary" to="/contact">Let’s talk <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  )
}

export default About
