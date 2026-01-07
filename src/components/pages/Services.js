import '../style.css'
import serveic from '../assets/other_images/serveic.jpg'
import { useState } from 'react'
import ForSMEs from './subsections/ForSMEs'
import ForAspiringEntreprenuers from './subsections/ForAspiringEntreprenuers'
import EstablishedCorp from './subsections/EstablishedCorp'
import GovetAgencies from './subsections/GovetAgencies'
import InvestorsPartners from './subsections/InvestorsPartners'

function Services() {
      const [activeSelection, setActiveSelection] = useState('selection1')

    return (
        <div className='centralContainer'>
            <div>
                <img src={serveic} alt='servicebanner' className='servicebanner' />
                <div className='upperservicelayer'>
                    <div className='serviceLayer'>
                        <div className='servicesections'>

                            <div className='servicebuttons'>
                                <button onClick={() => setActiveSelection('selection1')} className={`${activeSelection === 'selection1' ? 'boddy' : 'baskin'}`}>
                                    For SMEs
                                </button>
                                <div>|</div>

                                <button onClick={() => setActiveSelection('selection2')} className={`${activeSelection === 'selection2' ? 'boddy' : 'baskin'}`}>
                                    For Aspiring Entrepreneurs 
                                </button>
                                <div>|</div>

                                <button onClick={() => setActiveSelection('selection3')} className={`${activeSelection === 'selection3' ? 'boddy' : 'baskin'}`}>
                                    For Extablished Corporations
                                </button>
                                <div>|</div>

                                <button onClick={() => setActiveSelection('selection4')} className={`${activeSelection === 'selection4' ? 'boddy' : 'baskin'}`}>
                                    For Government Agencies and NGOs
                                </button>
                                <div>|</div>

                                <button onClick={() => setActiveSelection('selection5')} className={`${activeSelection === 'selection5' ? 'boddy' : 'baskin'}`}>
                                    For Investors and Foreign Partners
                                </button>
                            </div>


                                <div className=''>
                                    {activeSelection === 'selection1' && <div><ForSMEs /></div>}
                                    {activeSelection === 'selection2' && <div><ForAspiringEntreprenuers/></div>}
                                    {activeSelection === 'selection3' && <div><EstablishedCorp/> </div>}
                                    {activeSelection === 'selection4' && <div><GovetAgencies/></div>}
                                    {activeSelection === 'selection5' && <div><InvestorsPartners/></div>}
                                </div>
                        </div>

                </div>
                </div>


                <div >
                </div>
            </div>
        </div>
    )
}

export default Services
