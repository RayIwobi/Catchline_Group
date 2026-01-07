import { Link } from 'react-router-dom'
import '../style.css'
import catchline from '../assets/icons/catchline.png'
import email from '../assets/icons/email.png'
import address from '../assets/icons/location.png'
import phone from '../assets/icons/phone.png'
import linkedin from '../assets/socials/linkedin.png'
import facebook from '../assets/socials/facebook.png'
import instagram from '../assets/socials/instagram.png'
import twitter from '../assets/socials/twitter.png'
import youtube from '../assets/socials/youtube.png'
import tiktok from '../assets/socials/tiktok.png'


function Footer() {
    return (
        <>
            <div className='consultcenter'>
                <div className='theFormSection'>
                    <div className='infoclass'>
                        <h3>Find out more. Book an appointment</h3>
                        <div className='contactdetails'>
                            <div className='firstinfo'>
                                <img src={email} alt='emailicon' />
                                catchline@gmail.com
                            </div>
                            <div className='firstinfo'>
                                <img src={address} alt='emailicon' />
                                No. 2 catchline street Port harcourt
                            </div>
                            <div className='firstinfo'>
                                <img src={phone} alt='emailicon' />
                                +234 607943378, +234 449955053, 0706 111 8684
                            </div>
                        </div>
                    </div>
                    <div className='Formarea'>
                        <div className='innerform'>
                            <div className='theform'>
                                <input
                                    type='text'
                                    placeholder='First Name*'
                                />
                                <input
                                    type='text'
                                    placeholder='Last Name*'
                                />
                            </div>
                            <div className='theform'>
                                <input
                                    type='text'
                                    placeholder='Email*'
                                />
                                <input
                                    type='text'
                                    placeholder='Phone Number*'
                                />
                            </div>
                            <textarea
                                typeof='text'
                                placeholder='Message*'
                            />
                            <button className='submitbtn'>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footersection'>
                <div className='innercontainer'>
                    <div className='catchlinestar'>
                        <img src={catchline} alt='catchline-icon' />
                        <h3>Catchline Group</h3>
                        <h5>Transforming African Businesses for Global Relevance</h5>
                    </div>
                    <div className='footerlinknav'>
                        <div className='inlinlnav'>
                            <div className='tam'>
                                <h3>Catchline Group</h3>
                                <Link to='/contact'><h4>Consultation</h4></Link>
                                <Link to='/insights'><h4>Business Articles</h4></Link>
                                <Link to='/services'><h4>Training & Development</h4></Link>
                                <Link to='/services'><h4>Coaching & Mentorship</h4></Link>

                            </div>
                            <div className='tam'>
                                <h3>Quick Links</h3>
                                <Link to='/'><h4>Home</h4></Link>
                                <Link to='/about'><h4>About Catchline</h4></Link>
                                <Link to='/services'><h4>Our Services</h4></Link>
                                <Link to='/business-school'><h4>Business School</h4></Link>
                                <Link to='/programmes'><h4>Programmes</h4></Link>
                                <Link to='/communities'><h4>Communities</h4></Link>
                                <Link to='/insights'><h4>Insights</h4></Link>
                            </div>
                            <div className='tam'>
                                <h3>Copyright & Legal</h3>
                                <Link to='/privacy'><h4>Privacy Policy</h4></Link>
                                <Link to='/legal'><h4>Legal</h4></Link>
                                <h3>Socials</h3>
                                <div className='socials'>
                                    <Link to='https://linkedin.con/in/meetjudeobiekwe'><img src={linkedin} alt='socials' /></Link>
                                    <Link to='https://www.facebook.com/share/1By9soE2zv'><img src={facebook} alt='socials' /></Link>
                                    <Link to='https://instagram.com/meetjudeobiekwe'><img src={instagram} alt='socials' /></Link>
                                    <Link to='https://x.com/meetjudeobiekwe'><img src={twitter} alt='socials' /></Link>
                                    <Link to='https://youtube.com/@meetjudeobiekwe'><img src={youtube} alt='socials' /></Link>
                                    <Link to='https://tiktok.com/@meetjudeobiekwe'><img src={tiktok} alt='socials' /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
