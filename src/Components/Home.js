import React from 'react'
import '../Styles/Home.css'
import said from '../videos/said.jpg'

function Home() {
  return (
    <>
      <div id="home" className="intro route bg-image"  >
        <div className="overlay-itro" />
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">I'm Said Atoui</h1>
              <p className="intro-subtitle">Web Developer</p>
            </div>
          </div>
        </div>
        <img src={said}  />
      </div>

    </>
  )
}

export default Home;
