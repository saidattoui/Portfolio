import React from 'react'
import '../Styles/Skills.css'
import Html from '../images/Languages/html.png'
import css from '../images/Languages/css3.png'
import js from '../images/Languages/javascript.png'
import reactjs from '../images/Languages/Reactjs.png'
import tailwindcss from '../images/Languages/tailwindcss.png'
import bootstrap from '../images/Languages/bootstrap.png'
import mysql from '../images/Languages/mysql.png'
import aspNet from '../images/Languages/aspNet.png'
import java from '../images/Languages/java.png'
import angular from '../images/Languages/angular.jpg'
import Spring from '../images/Languages/Spring.png'
import sass from '../images/Languages/sass.jpeg'
import mongodb from '../images/Languages/mongodb.jpg'
import docker from '../images/Languages/docker.png'



function Skills() {
  return (
    <>
      <section className="services" id="skills">
        <div className="content">
          <div className="title"><span>My Skills</span></div>
          <p className='txt_desc'>These are the technologies I have worked with</p>
          <div className="boxes">

            <div className="box">
              <div className="img_lang">
                <img src={Html} className='languages_p' alt="" />
              </div>
              <div className="topic">HTML</div>
            </div>

            <div className="box">
              <div className="img_lang">
                <img src={css} className='languages_p' alt="" />
              </div>
              <div className="topic">CSS</div>

            </div>

            <div className="box">
              <div className="img_lang">
                <img src={js} className='languages_p' alt="" />
              </div>
              <div className="topic">JavaScript</div>
            </div>

            <div className="box">
              <div className="img_lang">
                <img src={reactjs} className='languages_p' alt="" />
              </div>
              <div className="topic">ReactJs</div>
            </div>

            <div className="box">
              <div className="img_lang">
                <img src={tailwindcss} className='languages_p' alt="" />
              </div>
              <div className="topic">Tailwindcss</div>
            </div>

            <div className="box">
              <div className="img_lang">
                <img src={bootstrap} className='languages_p' alt="" />
              </div>
              <div className="topic">Bootstrap</div>
            </div>
            <div className="box">
              <div className="img_lang">
                <img src={sass} className='languages_p' alt="" />
              </div>
              <div className="topic">Sass</div>
            </div>


            <div className="box">
              <div className="img_lang">
                <img src={mysql} className='languages_p' alt="" />
              </div>
              <div className="topic">Mysql</div>
            </div>
            <div className="box">
              <div className="img_lang">
                <img src={mongodb} className='languages_p' alt="" />
              </div>
              <div className="topic">Mongodb</div>
            </div>
            <div className="box">
              <div className="img_lang">
                <img src={aspNet} className='languages_p' alt="" />
              </div>
              <div className="topic">.Net</div>

            </div>
            <div className="box">
              <div className="img_lang">
                <img src={docker} className='languages_p' alt="" />
              </div>
              <div className="topic">Docker</div>

            </div>
            <div className="box">
              <div className="img_lang">
                <img src={angular} className='languages_p' alt="" />
              </div>
              <div className="topic">Angular</div>

            </div>

            <div className="box">
              <div className="img_lang">
                <img src={Spring} className='languages_p' alt="" />
              </div>
              <div className="topic">SpringBoot</div>
            </div>
            <div className="box">
              <div className="img_lang">
                <img src={java} className='languages_p' alt="" />
              </div>
              <div className="topic">Java</div>
            </div>


          </div>
        </div>
      </section>

    </>
  )
}

export default Skills;
