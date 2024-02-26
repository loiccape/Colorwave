import React from 'react'

export default function Navbar() {
  return (
    <div className='row'>

    <nav className="navbar navbar-expand-sm navbar-expand-lg mx-auto col-11 col-sm-10 col-lg-8">
    <a className="navbar-brand mr-5" href="/">ColorWave</a>
    <button className="navbar-toggler me-5" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/">Figma Plugin</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Docs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Templates</a>
        </li>
      </ul>
    </div>
  </nav>
        </div>
  )
}
