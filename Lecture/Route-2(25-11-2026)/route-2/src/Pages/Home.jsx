import { Link } from 'react-router'
import heroArt from '../assets/hero.png'

const learningPaths = [
  { number: '01', title: 'Build your foundation', text: 'Get comfortable with HTML, CSS and the ideas behind the web.' },
  { number: '02', title: 'Make it interactive', text: 'Use JavaScript and React to turn your ideas into real experiences.' },
  { number: '03', title: 'Ship something real', text: 'Practice with projects that bring your new skills together.' },
]

function Home() {
  return (
    <main className="page home-page">
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> YOUR NEXT CHAPTER STARTS HERE</span>
            <h1>Make the web<br /> <span>your playground.</span></h1>
            <p className="hero-lede">Learn to build thoughtful, modern websites one small win at a time. A clear path from curious beginner to confident creator.</p>
            <div className="hero-actions">
              <Link className="button-primary" to="/about">Explore the journey <span aria-hidden="true">↗</span></Link>
              <a className="text-link" href="#learning-path">See how it works <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-note"><span className="note-line" /> Learn by doing. Grow by building.</div>
          </div>
          <div className="hero-art-wrap" aria-hidden="true">
            <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
            <div className="hero-art-card"><img src={heroArt} alt="" /></div>
            <div className="floating-tag"><span className="tag-spark">✳</span><span><strong>Ideas → reality</strong><small>One project at a time</small></span></div>
            <div className="floating-code"><span>01</span> &lt;hello world /&gt;</div>
          </div>
        </div>
      </section>

      <section className="path-section" id="learning-path">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">A SIMPLE, PRACTICAL PATH</span><h2>Start small. Build boldly.</h2></div><p>No overwhelm, no magic shortcuts. Just useful skills, steady practice, and projects you can be proud of.</p></div>
          <div className="path-grid">{learningPaths.map((item) => <article className="path-card" key={item.number}><span className="path-number">{item.number}</span><div className="path-arrow" aria-hidden="true">↗</div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </div>
      </section>
      <section className="home-bottom"><div className="container bottom-inner"><div><span className="eyebrow">READY WHEN YOU ARE</span><h2>Curiosity is a great place to start.</h2></div><Link className="button-light" to="/contact">Say hello <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  )
}

export default Home
