import '../style.css'
import bs from '../assets/other_images/bs.jpg'
import aspirin from '../assets/other_images/aspirin.jpg'
import ab2 from '../assets/other_images/ab2.jpg'
import ab3 from '../assets/other_images/ab3.jpg'

function BusinessSchool() {
    return (
        <div className='centralContainer'>
            <div>
                <img src={bs} alt='bs' className='bschool' />
                <div className='busi-school'>
                    <div className='businesscontainer'>
                        <h3>THE EDGE BUSINESS SCHOOL</h3>
                        <h4>About the School</h4>
                        <div className='businesstext'>
                            THE EDGE Business School is a leadership and entrepreneurship
                            institution under the Catchline Group, established to develop
                            forward-thinking leaders, resilient entrepreneurs, and
                            high-performing executives. The School is built on the
                            belief that sustainable economic growth depends on capable
                            leadership, ethical business practices, and globally competitive
                            enterprises. Through industry-relevant education and practical
                            engagement, THE EDGE Business School bridges the gap between
                            theory and real-world application, equipping participants with
                            the mindset and skills required to succeed in complex business
                            environments.
                        </div>
                    </div>
                    <div className='businesscont'>
                        <div className='businesssecond-line'>
                            <img src={aspirin} alt='businessimage' />
                            <div className='businesstext'>
                                <h4>Vision</h4>
                                <div>
                                    "Empowering Africa's future leaders and entrepreneurs through
                                    innovative training and development, fostering global competitiveness
                                    and ethical business practices."<br />
                                </div>

                                <h4>Mission</h4>
                                <div>
                                    "To develop and nurture visionary leaders and entrepreneurs by
                                    providing world-class education and practical skills that address
                                    the unique challenges and opportunities in the African business
                                    landscape."<br />
                                </div>

                                <h4>Core Values</h4>
                                <div>
                                    Innovation<br />
                                    Excellence<br />
                                    Integrity<br />
                                    Collaboration<br />
                                    Practicality<br />
                                    Inclusivity
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='numbusiness'>
                        <div className='theprofbusiness'>
                            <h3>Programs and Offerings</h3>
                            <div className='progsides'>
                                <p>
                                    <strong>Accelerated Leadership & Business Program</strong>:
                                    This intensive program is designed to fast-track leadership
                                    capability and business acumen for current and emerging leaders.
                                    It focuses on strategic thinking, decision-making, operational
                                    excellence, and financial management, enabling participants to lead
                                    effectively, drive organisational performance, and manage growth in
                                    competitive markets.
                                </p>
                                <p>
                                    <strong>Globalization of Indigenous Business Content (GIBC)</strong>:
                                    The GIBC program is a unique initiative aimed at positioning indigenous
                                    businesses for global relevance. It supports entrepreneurs in refining
                                    local products, services, and business models to meet international
                                    standards while preserving cultural identity and value. The program
                                    equips participants with the tools needed to scale beyond local markets
                                    and compete globally.
                                </p>
                                <p>
                                    <strong>Executive Education</strong> : Our Executive Education programs
                                    are tailored for senior leaders and executives seeking advanced insight
                                    into leadership, governance, strategy, and innovation. These programs
                                    provide a high-level learning environment that combines global best
                                    practices with regional context, supporting executives in navigating
                                    complexity, managing risk, and driving long-term value creation.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='businndownsec'>
                        <div className='secondbusinndownsec' >
                            <div className='insidebus' id='fort2'>
                                <img src={ab2} alt='show images' />
                                <div className='underimage'>
                                    <h3>Target Audience</h3>
                                    <p>
                                        THE EDGE Business School serves SMEs, aspiring entrepreneurs,
                                        and corporate executives seeking to strengthen leadership capability,
                                        build competitive enterprises, and expand their impact. Our programs
                                        re designed for individuals and organisations committed to growth,
                                        excellence, and sustainable success.
                                    </p>
                                </div>
                            </div>
                            <div className='insidebus' id='fort3'>
                                <div className='underimage'>
                                    <h3>Benefits</h3>
                                    <p>
                                        <strong>Expert Faculty</strong>:
                                        Participants learn from experienced faculty and industry practitioners
                                        who bring deep expertise, practical insight, and real-world perspective
                                        to every program.
                                    </p>
                                    <p>
                                        <strong>Innovative Curriculum</strong>: Our curriculum is continuously
                                        updated to reflect evolving business realities, combining leadership,
                                        entrepreneurship, strategy, technology, and global market insights.
                                    </p>
                                    <p>
                                        <strong>Practical Learning</strong>:
                                        We emphasise experiential learning through case studies, simulations,
                                        projects, and real-world applications that translate knowledge into action.
                                    </p>
                                    <p>
                                        <strong>Certification</strong>:
                                        Participants receive recognised certification that validates their skills,
                                        knowledge, and professional development, enhancing credibility and career
                                        advancement.
                                    </p>
                                    <p>
                                        <strong>Global Competitiveness</strong>
                                        Our programs are designed to prepare participants to operate confidently
                                        in local and international markets, strengthening competitiveness,
                                        adaptability, and global relevance.
                                    </p>
                                </div>
                                <img src={ab3} alt='show images' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessSchool
