import '../style.css'
import abt1 from '../assets/other_images/abt1.jpg'

function About() {
    return (
        <div className='centralContainer'>

            <div>
                <div className='aboutTop'>
                    <img src={abt1} alt='aboutImage' />
                    <div className='abouttoptext'>
                        <h3>Who We Are</h3>
                        <p>
                            Catchline Group is a dynamic consulting, training, and business
                            development company focused on raising the standards of African
                            businesses. We help entrepreneurs, SMEs, corporations, government
                            agencies, NGOs, and investors navigate Africa’s unique business
                            landscape with clarity, strategy, and world-class practices.

                        </p>

                        <h3>Our Strategic Pillars</h3>
                        <p>

                            1.	Values (Leadership development)<br />
                            2.	Global Excellence (Service delivery)<br />
                            3.	Impact & Revenue Generation (Results)<br />

                        </p>
                    </div>
                </div>

                <div className='abtsecondlayer'>
                    <div className='innerbbtContainer'>
                        <div className='dipo'>
                            <h3>Vision</h3>
                            <p>
                                Transforming the African Business Environment Through Training for Standardization, advocating for Best Practices towards Achieving Global Economic Relevance
                            </p>
                            <h3>Mission</h3>
                            <p>
                                To galvanize business individuals, organizations, institutions, and nations towards the evolution of the economy of the African continent
                            </p>
                            <h3>Core Values</h3>
                            <p>
                                Responsibility : We take ownership of our work and its impact, acting in the best interests of our clients and stakeholders. <br /><br />
                                Excellence : We strive for the highest standards in everything we do, delivering quality, consistency, and value. <br /><br />
                                Diligence : We approach every task with care, focus, and attention to detail to ensure reliable outcomes. <br /><br />
                                Knowledge : We value continuous learning and apply informed insight to deliver practical, effective solutions. <br /><br />
                                Integrity : We act honestly and ethically, building trust through transparency and professionalism. <br /><br />
                                Partnership : We work collaboratively with our clients, building strong relationships based on mutual respect and shared goals. <br /><br />
                                Accountability : We stand by our commitments, measure our performance, and take responsibility for results.<br />
                            </p>

                        </div>
                        <div className='dipo'>
                            <h3>Challenges we solve</h3>
                            <p>
                                Poverty and unemployment : Limited access to skills development, enterprise support, and sustainable business opportunities continues to drive poverty and unemployment.<br /><br />
                                Poor business standards : Inadequate processes, governance, and quality practices undermine business performance and long-term sustainability.<br /><br />
                                Lack of global competitiveness : Many businesses struggle to meet international standards, limiting their ability to compete in regional and global markets.<br /><br />
                                Economic sabotage and unethical practices : Unethical conduct, fraud, and non-compliance erode trust, damage economies, and weaken business environments.<br /><br />
                                Low productivity : Inefficient processes, skills gaps, and weak performance management result in low productivity and reduced profitability.<br /><br />
                                Weak business systems : Poorly structured systems and controls hinder efficiency, consistency, and informed decision-making.

                            </p>
                            <h3>The Catchline Framework</h3>
                            <p>
                                C - Consult : We engage with clients to understand their goals, challenges, and priorities.<br /><br />
                                A - Assess : We evaluate current processes, capabilities, and performance to identify gaps and opportunities.<br /><br />
                                T - Train : We build skills and knowledge through targeted, practical training solutions.<br /><br />
                                C - Coach : We provide ongoing guidance and support to strengthen leadership and decision-making.<br /><br />
                                H - Harness : We harness existing strengths, resources, and insights to drive effective change.<br /><br />
                                L - Leverage : We leverage tools, systems, and opportunities to maximise impact and efficiency.<br /><br />
                                I - Improve : We implement improvements that enhance performance, quality, and sustainability.<br /><br />
                                N - Network  : We connect clients to relevant expertise, partnerships, and opportunities.<br /><br />
                                E - Evaluate: We review outcomes, measure progress, and refine strategies for continuous improvement.
                            </p>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
