
import React, { useState } from 'react'
import { profile } from '../data'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">

        <a className="navbar-brand fw-bold" href="#home">
          {profile.name}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${
            open ? 'show' : ''
          }`}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={close}>
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#work" onClick={close}>
                Work
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={close}>
                Contact
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Header
