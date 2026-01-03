import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import instagram from './assets/icons/instagram.png'
import linkedin from './assets/icons/linkedin.png'
import facebook from './assets/icons/facebook.png'
import twitter from './assets/icons/twitter.png'
import youtube from './assets/icons/youtube.png'
import catchlogo from './assets/icons/catchlogo.png'


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
            <div className='logoandmainnav'>
                <img src={catchlogo} alt='catchlogo' className='catchlogo' />

                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About Catchline</li></Link>
                    <Link to='/services'><li>Our Services</li></Link>
                    <Link to='/programmes'><li>Programmes</li></Link>
                    <Link to='/business_school'><li>Business School</li></Link>
                    <Link to='communities'><li>Communities</li></Link>
                    <Link to='insights'><li>Insights</li></Link>
                </ul>
            </div>

        </div>
    )
}

export default Navigation
