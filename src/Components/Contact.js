import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../Styles/Contact.css';

const SocialMediaIcon = ({ icon, name, link }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="social-media-icon">
      <a href={link} target="_blank" rel="noopener noreferrer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {icon}
      </a>

      <span className={`hover-name ${isHovered ? 'active' : ''}`}>{name}</span>
    </div>
  );
};

function Contact() {

  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    email: '',
    message: '',
  });
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f9my0aq', 'template_kvorbzn',
      form.current, 'R8ors7n7JWRk17lWX')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
        setMessageSent(true);
        setFormData({
          user_name: '',
          email: '',
          message: '',
        });
        setTimeout(() => {
          setMessageSent(false);
        }, 5000);
      })
      .catch((error) => {
        console.log(error.text);
      });
    form.current.reset();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <section
        id='contact'
        className='all_section'
        style={{ backgroundColor: '#f5f5f5' }}
      >

        <div className='container'>
          <div className='row'>
            <div className='col-sm-8 mx-auto'>
              <div className='contact-mf'>
                <div id='contact' className='box-shadow-full'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <div className='title-box-2'>
                        <h5 className='title-left'>Send Message Us</h5>
                      </div>
                      <div>
                        <form
                          className='contactForm'
                          ref={form}
                          onSubmit={sendEmail}
                        >
                          <div id='errormessage' />
                          <div className='row'>
                            <div className='col-md-12 mb-3'>
                              <div className='form-group'>
                                <input
                                    type='text'
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className='form_control1'
                                    id='name'
                                    placeholder='Your Name'

                                    required
                                />
                                <div className='validation' />
                              </div>
                            </div>
                            <div className='col-md-12 mb-3'>
                              <div className='form-group'>
                                <input
                                  type='email'
                                  className='form_control1'
                                  name="email"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  id='email'
                                  placeholder='Your Email'
                                  data-rule='email'
                                  data-msg='Please enter a valid email'
                                  required 
                                />
                                <div className='validation' />
                              </div>
                            </div>

                            <div className='col-md-12 mb-3'>
                              <div className='form-group'>
                                <textarea
                                  className='form_control1'
                                  name="message"
                                  value={formData.message}
                                  onChange={handleInputChange}
                                  rows={5}
                                  data-rule='minlen:4'
                                  data-msg='Please write something for us'
                                  placeholder='Message'
                                  required 
                                />
                                <div className='validation' />
                              </div>
                            </div>
                            <div className='col-md-12 text-center'>
                              <button
                                type='submit'
                                className='button button-a button-big button-rounded'
                              >
                                Send Message
                              </button>
                            </div>
                          </div>
                        </form>
                        {messageSent && <div className="success-message">Your message has been sent. Thank you!</div>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="socialMedia">
          <SocialMediaIcon icon={<LinkedInIcon />} name="LinkedIn" link="https://www.linkedin.com/in/saidatoui/" />
          <SocialMediaIcon icon={<GitHubIcon />} name="GitHub" link="https://github.com/saidattoui" />
        </div>
        <footer className='footer_copy'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <div className='copyright-box'>
                  <p className='copyright'>
                    Copyright © 2024
                    <strong> Said Atoui </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Contact;
