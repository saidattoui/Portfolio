import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';
import '../Styles/Navbar.css';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <nav
          className={`navbar navbar-b navbar-trans navbar-expand-md .navbar-reduce fixed-top ${scrolling ? 'navbar-scroll' : ''
            }`}
          id="mainNav"
        >
          <div className="container">
            <Link className="navbar-brand js-scroll" to="#home">
              <img className="mysd"  />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarDefault"
              aria-controls="navbarDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleMobileMenuToggle}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className={`collapse navbar-collapse justify-content-end ${isMobileMenuOpen ? 'show' : ''
                }`}
              id="navbarDefault"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link js-scroll" to='#home' activeClassName="active" exact>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll" to='#about' activeClassName="active" >About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll" to='#skills'>Skills</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll" to='#certifications'>Certifications</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll" to='#work'>Works</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll" to='#contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </BrowserRouter>
    </>
  );
}

export default Navbar;
