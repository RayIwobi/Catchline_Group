import './blog.css'
import policy from './assets/policy.jpg'

function PolicyBriefs() {
  return (
    <div className='mainblogcontainer'>
      <img src={policy} alt='business' className='blogbanner' />
      <div>
        <h3>Why Policy Reform Is Critical for Sustainable Economic Development</h3>
        Public policy plays a defining role in shaping economic outcomes. Sound 
        policies create enabling environments for businesses, attract investment, 
        and support innovation, while weak or inconsistent policies can stifle 
        growth and discourage enterprise.<br/><br/>
        Effective policy reform requires evidence-based decision-making, stakeholder 
        engagement, and long-term thinking. Governments and institutions must align 
        regulatory frameworks with economic realities, ensuring that policies support 
        productivity, transparency, and inclusion.<br/><br/>
        Catchline Consulting engages in policy advocacy to support reforms that promote 
        good governance, economic resilience, and ethical practice. Policy is not merely 
        a government concern—it is a shared responsibility that affects businesses, 
        investors, and communities alike.
      </div>

    </div>
  )
}

export default PolicyBriefs
