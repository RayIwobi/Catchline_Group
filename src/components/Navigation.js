import { NavLink, Link} from 'react-router-dom'
import './style.css'
import linkedin from './assets/socials/linkedin.png'
import facebook from './assets/socials/facebook.png'
import instagram from './assets/socials/instagram.png'
import twitter from './assets/socials/twitter.png'
import youtube from './assets/socials/youtube.png'
import tiktok from './assets/socials/tiktok.png'



function Navigation() { 
    return (
        <div className='centralContainer'>
            <div className='topbeforenav'>
                <div className='firstnav'>
                    <div className='insidenav'>
                        <ul>
                            <NavLink to='/programmes'><li>Events</li></NavLink>
                            <NavLink to='/faq'><li>FAQs</li></NavLink>
                            <NavLink to='/contact'><li>Contact</li></NavLink>
                        </ul>
                    </div>
                </div>
                <div className='topsocials'>
                    <div className='socialstop'>
                        <Link to='https://linkedin.con/in/meetjudeobiekwe'><img src={linkedin} alt='socials' /></Link>
                        <Link to='https://www.facebook.com/share/1By9soE2zv'><img src={facebook} alt='socials' /></Link>
                        <Link to='https://instagram.com/meetjudeobiekwe'><img src={instagram} alt='socials' /></Link>
                        <Link to='https://x.com/meetjudeobiekwe'><img src={twitter} alt='socials' /></Link>
                        <Link to='https://youtube.com/@meetjudeobiekwe'><img src={youtube} alt='socials' /></Link>
                        <Link to='https://tiktok.com/@meetjudeobiekwe'><img src={tiktok} alt='socials' /></Link>
                    </div>
                </div>
            </div>
            <div className='mobilespacing'></div>


        </div>
    )
}

export default Navigation
