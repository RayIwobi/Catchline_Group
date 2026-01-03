import '../style.css'
import abt1 from '../assets/other_images/abt1.jpg'
import ceo1 from '../assets/other_images/ceo1.jpg'

function About() {
    return (
        <div className='centralContainer'>

            <div>
                <div className='aboutTop'>
                    <div className='aboutTopInner'>
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
                </div>

                <div className='abtsecondlayer'>
                    <div className='innerbbtContainer'>
                        <div className='dipo'>
                            <h3>Vision</h3>
                            <div className='aboutcontent'>
                                Transforming the African Business Environment Through Training for Standardization, advocating for Best Practices towards Achieving Global Economic Relevance
                            </div>
                            <h3>Mission</h3>
                            <div className='aboutcontent'>
                                To galvanize business individuals, organizations, institutions, and nations towards the evolution of the economy of the African continent
                            </div><br/>
                            <h3>Core Values</h3><br/>
                            <div className='aboutcontent'>
                                <strong>Responsibility</strong> : We take ownership of our work and its impact, acting in the best interests of our clients and stakeholders. <br /><br />
                                <strong>Excellence</strong> : We strive for the highest standards in everything we do, delivering quality, consistency, and value. <br /><br />
                                <strong>Diligence</strong> : We approach every task with care, focus, and attention to detail to ensure reliable outcomes. <br /><br />
                                <strong>Knowledge</strong> : We value continuous learning and apply informed insight to deliver practical, effective solutions. <br /><br />
                                <strong>Integrity</strong> : We act honestly and ethically, building trust through transparency and professionalism. <br /><br />
                                <strong>Partnership</strong> : We work collaboratively with our clients, building strong relationships based on mutual respect and shared goals. <br /><br />
                                <strong>Accountability</strong> : We stand by our commitments, measure our performance, and take responsibility for results.<br />
                            </div>

                        </div><br/><br/>
                        <div className='dipo'>
                            <h3>Challenges we solve</h3><br/>
                           <div className='aboutcontent'>
                                <strong>Poverty and unemployment</strong> : Limited access to skills development, enterprise support, and sustainable business opportunities continues to drive poverty and unemployment.<br /><br />
                                <strong>Poor business standards </strong>: Inadequate processes, governance, and quality practices undermine business performance and long-term sustainability.<br /><br />
                                <strong>Lack of global competitiveness</strong> : Many businesses struggle to meet international standards, limiting their ability to compete in regional and global markets.<br /><br />
                                <strong>Economic sabotage and unethical practices</strong> : Unethical conduct, fraud, and non-compliance erode trust, damage economies, and weaken business environments.<br /><br />
                                <strong>Low productivity</strong> : Inefficient processes, skills gaps, and weak performance management result in low productivity and reduced profitability.<br /><br />
                               <strong>Weak business systems</strong>  : Poorly structured systems and controls hinder efficiency, consistency, and informed decision-making.

                            </div><br/><br/>
                            <h3>The Catchline Framework</h3><br/>
                            <div className='aboutcontent'>
                                <strong>C - Consult</strong> : We engage with clients to understand their goals, challenges, and priorities.<br /><br />
                                <strong>A - Assess</strong> : We evaluate current processes, capabilities, and performance to identify gaps and opportunities.<br /><br />
                                <strong>T - Train</strong> : We build skills and knowledge through targeted, practical training solutions.<br /><br />
                                <strong>C - Coach</strong> : We provide ongoing guidance and support to strengthen leadership and decision-making.<br /><br />
                                <strong>H - Harness</strong> : We harness existing strengths, resources, and insights to drive effective change.<br /><br />
                                <strong>L - Leverage</strong> : We leverage tools, systems, and opportunities to maximise impact and efficiency.<br /><br />
                               <strong>I - Improve</strong>  : We implement improvements that enhance performance, quality, and sustainability.<br /><br />
                               <strong>N - Network</strong>   : We connect clients to relevant expertise, partnerships, and opportunities.<br /><br />
                                <strong>E - Evaluate</strong>: We review outcomes, measure progress, and refine strategies for continuous improvement.
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div className='catchlineceo'>
                <div className='innerceo'>
                    <div className='imagetitle'>
                        <img src={ceo1} alt='' className='ceoimage' />
                        <h3>Dr. Jude Ibekwe</h3>
                        <h4>CEO Catchline Group</h4>
                    </div>
                    <div className='ceospeech'>
                        <h3>CEO's Message</h3>
                        At Catchline Group, we believe that progress is intentional. 
                        It is built through clarity of purpose, disciplined execution, 
                        and an unwavering commitment to ethical leadership. Our journey 
                        has been shaped by a simple but powerful conviction: that businesses, 
                        institutions, and individuals thrive when they are equipped with the 
                        right knowledge, systems, and values.<br/><br/>
                        Across markets and sectors, we continue to witness immense potential — often 
                        constrained not by lack of ideas, but by gaps in leadership, standards, 
                        and strategic direction. Catchline was established to bridge those gaps. 
                        We exist to support transformation that is practical, sustainable, and 
                        impactful — whether through strengthening enterprises, shaping policy, 
                        developing leaders, or preparing organisations to compete globally.
                    </div>
                    <div className='overlay1'></div>
                </div>
            </div>

        </div>
    )
}

export default About
