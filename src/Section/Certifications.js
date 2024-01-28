import React from 'react'
import '../Styles/Certifications.css'
import { CertificationList } from '../Helpers/CertificationList';
import CertifacationItem from '../Components/CertificationItem';

function Certifications() {
  return (
    <>
      <section id="certifications" >
        {/* For title  */}
        <div className="container_cert">
          <div className="title"><span>My Certifications</span></div>
          <p className='txt_desc'>Check out some of my certifications</p>
          <div className="work-box">
            {CertificationList.map((certItem, key) => {
              return (
                <CertifacationItem
                  Key={key}
                  image={certItem.image}
                  name={certItem.name}
                  link={certItem.link}
                />
              );
            })}

          </div>
        </div>
      </section>

    </>
  )
}

export default Certifications;
