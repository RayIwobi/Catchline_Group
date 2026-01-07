import './blog.css'
import leadership from './assets/leadership.jpg'

function LeaderShip() {
  return (
    <div className='mainblogcontainer'>
      <img src={leadership} alt='business' className='blogbanner' />
      <div>
        <h3>Leadership Beyond Authority: The Power of Influence and Accountability</h3>
        True leadership is not defined by position or title—it is defined by influence, 
        responsibility, and accountability. In an era where organisations are increasingly 
        complex, leaders must move beyond command-and-control approaches and embrace 
        collaboration, trust, and purpose-driven decision-making.<br/><br/>

        Effective leaders create clarity in uncertainty, empower others to perform, and 
        model the values they expect from their teams. They understand that leadership is 
        both strategic and human—balancing results with empathy, discipline with inspiration.
        At Catchline, we believe leadership development is a continuous journey. Leaders who 
        invest in self-awareness, learning, and ethical practice not only drive performance, 
        but also build organisations that endure beyond individual tenure.
      </div>

    </div>
  )
}

export default LeaderShip
