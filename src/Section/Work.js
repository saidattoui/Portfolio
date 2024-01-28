import React from 'react'
import { WorkList } from '../Helpers/WorkList';
import WorkItem from '../Components/WorkItem';
import '../Styles/Work.css'

function Work() {
  return (
    <>
    <section id="work" >
      <div className="container_work">
        <div className="title"><span>My Works</span></div>
        <p className='txt_desc'>Check out some of my works</p>
            <div className="work1-box">
              {WorkList.map((workItem, key) => {
                return (
                  <WorkItem
                    Key={key}
                    image={workItem.image}
                    title={workItem.title}
                    name={workItem.name}
                    link={workItem.link}
                  />
                );
              })}

            </div>
      </div>
    </section>

  </>
  )
}

export default Work
