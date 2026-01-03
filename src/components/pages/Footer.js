import '../style.css'
import catchline from '../assets/icons/catchline.png'
import email from '../assets/icons/email.png'
import address from '../assets/icons/location.png'
import phone from '../assets/icons/phone.png'


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
                                +234 607943378, +234 449955053
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
                        <div>ccccccccccc</div>
                        <div>cccccccccccccccccccc</div>
                        <div>cccccccccccccccccccccccccc</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
