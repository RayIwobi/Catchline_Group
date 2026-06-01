import '../style.css'
import { Link } from 'react-router-dom'
import Slideshow from '../Slideshow'
import next1 from '../assets/other_images/next1.jpg'
import am1 from '../assets/other_images/am1.jpg'
import am2 from '../assets/other_images/am2.jpg'
import am8 from '../assets/other_images/am8.jpg'
import am4 from '../assets/other_images/am4.jpg'
import am5 from '../assets/other_images/am5.jpg'
import am6 from '../assets/other_images/am6.jpg'
import imb from '../assets/other_images/imb.jpg'

function Home() {
    return (
        <div className='centralContainer'>

            <div >
            </div>
            <div>
                <Slideshow />
                <div className='backgroundimage'>
                    <div className='belowslides'>
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
                            <Link to='/services'><button>Learn More</button></Link>
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
                            <Link to='/services'><button >Learn More</button></Link>
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
                            <Link to='/services'><button >Learn More</button></Link>
                        </div>
                    </div>

                </div>
                <div className='nextsection'>
                    <div className='nexsecinner' >
                        <img src={next1} alt='nextsection' id='imagehome' />
                        <div className='nextsectiontext'>
                            <h3>Innovation & Diversification</h3>
                            <div>
                                We help SMEs explore new ideas, markets, and revenue streams, enabling innovation and
                                diversification that strengthens competitiveness and long-term resilience.
                                <br />
                            </div>

                            <Link to='/services'><button className='sectionbutton' id='shim'>Learn More</button></Link>
                        </div>
                    </div>

                </div>
                <div className='imagelinkdesign'>
                    <div className='imagecard-container'>
                        <Link to='/programmes'>
                            <div className='image-card'>
                                <img src={am1} alt='frontline' />
                                <div className='overlay'></div>

                                <div className='text-box'>
                                    <h3>Assessment Programs</h3>
                                    <p>
                                        Our assessment programs provide deep,
                                        structured business diagnostics...
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/programmes'>
                            <div className='image-card'>
                                <img src={am2} alt='frontline' />
                                <div className='overlay'></div>

                                <div className='text-box'>
                                    <h3>Networking Events</h3>
                                    <p>
                                        We organise high-impact networking events,
                                        including industry roundtables...
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='imagecard-container'>
                        <Link to='/services'>
                            <div className='image-card'>
                                <img src={am6} alt='frontline' />
                                <div className='overlay'></div>

                                <div className='text-box'>
                                    <h3>Entrepreneurial Training</h3>
                                    <p>
                                        We provide structured entrepreneurial
                                        training designed to equip aspiring entrepreneurs...
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/programmes'>
                            <div className='image-card'>
                                <img src={am4} alt='frontline' />
                                <div className='overlay'></div>

                                <div className='text-box'>
                                    <h3>Training Programs</h3>
                                    <p>
                                        We deliver comprehensive training programs
                                        focused on leadership development ...
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className='imagecard-container'>
                        <Link to='/programmes'>
                            <div className='image-card'>
                                <img src={am5} alt='frontline' />
                                <div className='overlay'></div>

                                <div className='text-box'>
                                    <h3>Monitoring & Evaluation</h3>
                                    <p>
                                        We provide monitoring and evaluation
                                        services to track program performance...
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/services'>
                            <div className='image-card'>
                                <img src={am8} alt='frontline' />
                                <div className='overlay'></div>

                                <div className='text-box'>
                                    <h3>Strategic Planning</h3>
                                    <p>
                                        We work with leadership teams to develop clear,
                                        forward-looking strategies that align vision...
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='whweare'>
                    <div className='whereinner'>
                        <h3>Who we are</h3>
                        <p>
                            Catchline Consulting is a strategy, leadership, and enterprise
                            development firm committed to strengthening businesses, institutions,
                            and economies. We are built on the belief that sustainable growth is
                            driven by capable leadership, strong systems, ethical practices, and
                            continuous innovation.
                        </p>
                    </div>
                </div>
                <div className='closesection'>
                    <div className='clsesecinner'>
                        <div className='closetext'>
                            <h3>What we do</h3>
                            <div>
                                We design and deliver integrated solutions that support growth,
                                performance improvement, and impact. Our work spans consulting,
                                training, coaching, advocacy, and program implementation...
                            </div>
                            <Link to='/services'><button className='sectionbutton'>Learn More</button></Link>
                        </div>
                        <img src={imb} alt='nextsection' />

                    </div>
                </div>

                <div >

                </div>

            </div>
        </div>
    )
}

export default Home
