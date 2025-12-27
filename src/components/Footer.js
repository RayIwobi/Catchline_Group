import React from 'react'
import './style.css'
import catchline from './assets/icons/catchline.png'

function Footer() {
    return (
        <div className='footersection'>
            <div className='innercontainer'>
                <div className='catchlinestar'>
                    <img src={catchline} alt='catchline-icon'/>
                    <h3>Catchline Group</h3>
                    <h5>Transforming African Businesses for Global Relevance</h5>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Footer
