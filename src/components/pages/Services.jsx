import '../style.css'
import serveic from '../assets/other_images/serveic.jpg'
import { useState } from 'react'
import ForSMEs from './subsections/ForSMEs'
import ForAspiringEntreprenuers from './subsections/ForAspiringEntreprenuers'
import EstablishedCorp from './subsections/EstablishedCorp'
import GovetAgencies from './subsections/GovetAgencies'
import InvestorsPartners from './subsections/InvestorsPartners'


function Services() {
  const [activeSelection, setActiveSelection] = useState('selection1');

  return (
    <div className="centralContainer">
      <img src={serveic} alt="servicebanner" className="servicebanner" />

      <div className="upperservicelayer">
        <div className="serviceLayer">
          <div className="servicesections">

            {/* ✅ DESKTOP BUTTONS */}
            <div className="servicebuttons desktop-only">
              <button
                onClick={() => setActiveSelection('selection1')}
                className={activeSelection === 'selection1' ? 'boddy' : 'baskin'}
              >
                For SMEs
              </button>
              <div>|</div>

              <button
                onClick={() => setActiveSelection('selection2')}
                className={activeSelection === 'selection2' ? 'boddy' : 'baskin'}
              >
                For Aspiring Entrepreneurs
              </button>
              <div>|</div>

              <button
                onClick={() => setActiveSelection('selection3')}
                className={activeSelection === 'selection3' ? 'boddy' : 'baskin'}
              >
                For Established Corporations
              </button>
              <div>|</div>

              <button
                onClick={() => setActiveSelection('selection4')}
                className={activeSelection === 'selection4' ? 'boddy' : 'baskin'}
              >
                For Government Agencies and NGOs
              </button>
              <div>|</div>

              <button
                onClick={() => setActiveSelection('selection5')}
                className={activeSelection === 'selection5' ? 'boddy' : 'baskin'}
              >
                For Investors and Foreign Partners
              </button>
            </div>

            {/* MOBILE & TABLET DROPDOWN */}
            <div className="mobile-only service-dropdown">
              <select
                value={activeSelection}
                onChange={(e) => setActiveSelection(e.target.value)}
              >
                <option value="selection1">For SMEs</option>
                <option value="selection2">For Aspiring Entrepreneurs</option>
                <option value="selection3">For Established Corporations</option>
                <option value="selection4">For Government Agencies and NGOs</option>
                <option value="selection5">For Investors and Foreign Partners</option>
              </select>
            </div>

            {/* CONTENT */}
            <div>
              {activeSelection === 'selection1' && <ForSMEs />}
              {activeSelection === 'selection2' && <ForAspiringEntreprenuers />}
              {activeSelection === 'selection3' && <EstablishedCorp />}
              {activeSelection === 'selection4' && <GovetAgencies />}
              {activeSelection === 'selection5' && <InvestorsPartners />}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
