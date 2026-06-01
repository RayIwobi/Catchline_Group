import '../../style.css'
import aspirin from '../../assets/other_images/aspirin.jpg'

function ForSMEs() {
    return (
        <div className='centralContainer'>
            <div>
                <div className='upperservicelayer'>
                    <div className='serviceLayer'>


                        <h3>For Aspiring Entreprenuers</h3>
                        <div className='sections'>
                            Starting a business requires more than a good idea—it demands the
                            right skills, guidance, networks, and preparation. At Catchline
                            Consulting, we support aspiring entrepreneurs at the earliest stages
                            of their journey by helping them turn ideas into viable, sustainable
                            ventures. Our services focus on building entrepreneurial capability,
                            providing practical startup support, and creating access to valuable
                            networks and opportunities. Whether you are exploring a business idea,
                            preparing to launch, or seeking market and investor readiness, we offer
                            structured support designed to reduce risk and increase your chances of
                            long-term success.
                        </div>
                        <div className='serviceContaind'>
                            <div className='dipo'>
                                <h4>Entrepreneurial Training</h4>
                                <div className='sections'>
                                    We provide structured entrepreneurial training designed to equip aspiring
                                    entrepreneurs with the knowledge and practical skills needed to start and
                                    manage a successful business. Our training covers essential areas such as
                                    business planning, financial fundamentals, marketing, operations, and
                                    compliance, helping participants build a strong foundation from idea to
                                    execution.
                                </div>

                                <h4>Startup Coaching</h4>
                                <div className='sections'>
                                    Our startup coaching offers personalised guidance to support entrepreneurs
                                    through the early stages of building a business. We help clarify ideas,
                                    refine business models, overcome startup challenges, and make informed
                                    decisions. Through one-to-one or group coaching, entrepreneurs gain
                                    confidence, accountability, and practical insights to move forward with purpose.
                                </div>

                                <h4>Networking & Partnerships</h4>
                                <div className='sections'>
                                    We facilitate meaningful networking opportunities and strategic partnerships
                                    that connect aspiring entrepreneurs with industry professionals, mentors, and
                                    potential collaborators. These connections help expand visibility, share knowledge,
                                    and unlock opportunities that support growth and long-term success.
                                </div>


                            </div>

                            <div className='dipo'>
                                <h4>Market Entry & Investor Readiness</h4>
                                <div className='sections'>
                                    We support entrepreneurs in preparing for market entry and engaging potential
                                    investors with confidence. This includes refining value propositions, validating
                                    target markets, developing go-to-market strategies, and preparing investor-ready
                                    documentation. Our approach ensures startups are positioned clearly, professionally,
                                    and competitively.
                                </div>

                                <img src={aspirin} alt='aspiring_Entreprenuers' className='aspirinImage' />
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

export default ForSMEs
