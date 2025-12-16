import React from 'react'

function Contact() {
    return (
        <div className='contactContainer'>
            <div>
                <div className='portfolio-title'>
                    <div>LET'S WORK</div>
                    <div id='devcolor'>TOGETHER</div>
                    <div className='longline'></div>
                    <div className='forminput'>
                        <div className='inputsec'>
                            <div className='innercontact'>
                                <label>Name</label>
                                <input
                                    type='name'
                                    placeholder='Your name'
                                />
                            </div>
                            <div>
                                <label>Email</label>
                                <input
                                    type='email'
                                    placeholder='Your email'
                                    id='email'
                                />
                            </div>
                        </div>
                        <label>Message</label>
                        <textarea
                            type='text'
                            placeholder='Message'
                        />
                        <button className='contactSubmit'>Submit</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact
