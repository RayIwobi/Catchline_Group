import '../style.css'
import Slideshow from '../Slideshow'
import next1 from '../assets/other_images/next1.jpg'
import am1 from '../assets/other_images/am1.jpg'
import am2 from '../assets/other_images/am2.jpg'
import am8 from '../assets/other_images/am8.jpg'
import am4 from '../assets/other_images/am4.jpg'
import am5 from '../assets/other_images/am5.jpg'
import am6 from '../assets/other_images/am6.jpg'
import imb from '../assets/other_images/imb.jpg'

function Communities() {
    return (
        <div className='centralContainer'>
            
            <div >
            </div>
            <div>
                <Slideshow />
                <div className='backgroundimage'>
                    <div className='belowslides'>
                        {/* <div className='insidecontent'> */}
                        <div className='openspace-content'>
                            <h3>Business Consulting</h3>
                            <p>
                                We provide strategic business consulting services designed
                                to help organizations grow, adapt, and remain competitive.
                                Our approach combines deep industry insight with practical
                                solutions to improve operations, strengthen governance,
                                optimize financial performance, and support sustainable growth.
                                Whether you are scaling, restructuring, or entering new markets,
                                we work closely with your leadership team to...
                            </p>
                            <button>Learn More</button>
                        </div>
                        <div className='openspace-content'>
                            <h3>Training & Development</h3>
                            <p>
                                Our training and development programs are tailored to build capacity
                                at both individual and organizational levels. We design and deliver
                                practical, results-oriented training that enhances leadership skills,
                                operational efficiency, technical competence, and workforce productivity.
                                Through workshops, seminars, and customized learning sessions, we empower
                                teams with the knowledge and skills needed to perform...
                            </p>
                            <button>Learn More</button>
                        </div>
                        <div className='openspace-content'>
                            <h3>Coaching & Mentorship</h3>
                            <p>
                                We offer personalized coaching and mentorship services to support executives,
                                entrepreneurs, and emerging leaders. Our coaching focuses on leadership development,
                                decision-making, performance improvement, and long-term career growth. By combining
                                experience-based guidance with structured mentorship, we help individuals unlock their
                                potential, navigate challenges, and achieve...
                            </p>
                            <button>Learn More</button>
                        </div>
                    </div>
                    {/* </div> */}

                </div>
                <div className='nextsection'>
                    <img src={next1} alt='nextsection' />
                    <div className='nextsectiontext'>
                        <h3>the heading</h3>
                        We provide market entry and investment advisory services for
                        businesses and investors seeking new opportunities. Our
                        expertise includes market research, feasibility studies,
                        regulatory guidance, risk assessment, and partner identification.<br/>

                        <button className='sectionbutton' id='shim'>Learn More</button>
                    </div>

                </div>
                <div className='imagelinkdesign'>
                    <div className='imagecard-container'>
                        <div className='image-card'>
                            <img src={am1} alt='frontline' />
                            <div className='overlay'></div>

                            <div className='text-box'>
                                <h3>image title</h3>
                                <p>
                                    This is the content
                                </p>
                            </div>
                        </div>
                        <div className='image-card'>
                            <img src={am2} alt='frontline' />
                            <div className='overlay'></div>

                            <div className='text-box'>
                                <h3>image title</h3>
                                <p>
                                    This is the content
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='imagecard-container'>
                        <div className='image-card'>
                            <img src={am6} alt='frontline' />
                            <div className='overlay'></div>

                            <div className='text-box'>
                                <h3>image title</h3>
                                <p>
                                    This is the content
                                </p>
                            </div>
                        </div>
                        <div className='image-card'>
                            <img src={am4} alt='frontline' />
                            <div className='overlay'></div>

                            <div className='text-box'>
                                <h3>image title</h3>
                                <p>
                                    This is the content
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='imagecard-container'>
                        <div className='image-card'>
                            <img src={am5} alt='frontline' />
                            <div className='overlay'></div>

                            <div className='text-box'>
                                <h3>image title</h3>
                                <p>
                                    This is the content
                                </p>
                            </div>
                        </div>
                        <div className='image-card'>
                            <img src={am8} alt='frontline' />
                            <div className='overlay'></div>

                            <div className='text-box'>
                                <h3>image title</h3>
                                <p>
                                    This is the content
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='whweare'>
                    <div className='whereinner'>
                        <h3>Who we are</h3>
                        <p>
                            We provide market entry and investment advisory services for
                            businesses and investors seeking new opportunities. Our
                            expertise includes market research, feasibility studies,
                            regulatory guidance, risk assessment, and partner identification.
                        </p>
                    </div>
                </div>
                <div className='closesection'>
                    <div className='closetext'>
                        <h3>the heading</h3>
                        We provide market entry and investment advisory services for
                        businesses and investors seeking new opportunities. Our
                        expertise includes market research, feasibility studies,
                        regulatory guidance, risk assessment, and partner identification.

                        <button className='sectionbutton'>Learn More</button>
                    </div>
                    <img src={imb} alt='nextsection' />

                </div>

                

                <div >

                </div>

            </div>
        </div>
    )
}

export default Communities
