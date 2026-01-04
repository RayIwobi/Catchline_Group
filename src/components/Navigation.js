import './style.css'
import instagram from './assets/icons/instagram.png'
import linkedin from './assets/icons/linkedin.png'
import facebook from './assets/icons/facebook.png'
import twitter from './assets/icons/twitter.png'
import youtube from './assets/icons/youtube.png'


function Navigation() {
    return (
        <div className='centralContainer'>
            <div className='topbeforenav'>
                <div className='firstnav'>
                    <div className='insidenav'>
                    <ul>
                        <li>Events</li>
                        <li>FAQs</li>
                        <li>Contact</li>
                    </ul>
                </div>
                </div>
                <div className='topsocials'>
                    <div className='innertopsocials'>
                        <img src={instagram} alt='topsocial' className='topsocial' />
                        <img src={linkedin} alt='topsocial' className='topsocial' />
                        <img src={facebook} alt='topsocial' className='topsocial' />
                        <img src={twitter} alt='topsocial' className='topsocial' />
                        <img src={youtube} alt='topsocial' className='topsocial' />
                    </div>
                </div>
            </div>
            <div className='mobilespacing'></div>
            

        </div>
    )
}

export default Navigation
