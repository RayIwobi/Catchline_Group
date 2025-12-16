import React from 'react'
import './sections.css'

function HomeSection() {
  return (
    <div className='homesectioncontainer'>
      <div>
        <div className='portfolio-title'>
          <div>FULL-STACK</div>
          <div id='devcolor'>DEVELOPER</div>
          <div className='longline'></div>
        </div>
        <div className='textIntro'>
          <p>I’m a Full-Stack Developer crafting fast, dynamic, and 
            user-focused web applications. I turn ideas into scalable 
            products with clean architecture, intuitive interfaces, and 
            seamless performance—from polished frontends to powerful 
            backend systems. My goal is simple: build experiences that 
            feel effortless and deliver real impact.</p>
        </div>
      </div>
    </div>
  )
}

export default HomeSection
