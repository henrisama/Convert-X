import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="android-chrome-192x192.png" alt="" width="40" height="40" className="d-inline-block align-text-top" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
