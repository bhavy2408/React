import { useState } from 'react'
import { Link, Outlet } from 'react-router'

function Navbar() {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark site-navbar py-3">
        <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/" onClick={() => setExpanded(false)}>
          Route<span className="text-info">2</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="main-navigation"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
          onClick={() => setExpanded((isExpanded) => !isExpanded)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse${expanded ? ' show' : ''}`} id="main-navigation">
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <Link className="nav-link" to="/" onClick={() => setExpanded(false)}>Home</Link>
            <Link className="nav-link" to="/about" onClick={() => setExpanded(false)}>About</Link>
            <Link className="nav-link" to="/contact" onClick={() => setExpanded(false)}>Contact</Link>
            <Link className="nav-link" to="/Product" onClick={() => setExpanded(false)}>Product</Link>
            <Link className="nav-link" to="/Errorpage" onClick={() => setExpanded(false)}>ErrorPage</Link>
          </div>
        </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar
