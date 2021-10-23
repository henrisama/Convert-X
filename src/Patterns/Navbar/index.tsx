import React from 'react'
import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">
            <img src="android-chrome-192x192.png" alt="" width="40" height="40" className="d-inline-block align-text-top" />
          </a>
        </Link>
        <div className="d-flex">
            <Link href="/String">
              <a
                className="btn btn-dark btn-lg"
                role="button"
                href="/String"
              >
                String
              </a>
            </Link>
            <Link href="/Weight">
              <a
                className="btn btn-dark btn-lg"
                role="button"
                href="/Weight"
              >
                Weight
              </a>
            </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
