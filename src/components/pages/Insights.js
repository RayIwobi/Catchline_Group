import '../style.css'
import amd1 from '../assets/other_images/amd1.jpg'
import { useState } from 'react'
import BusinessArticles from './InsightBlogs/BusinessArticles'
import LeaderShip from './InsightBlogs/LeaderShip'
import PolicyBriefs from './InsightBlogs/PolicyBriefs'
import MarketTrends from './InsightBlogs/MarketTrends'
import CaseStudies from './InsightBlogs/CaseStudies'
import ReportsWhitepaper from './InsightBlogs/ReportsWhitepaper'

function Insights() {
    const [activeSelection, setActiveSelection] = useState('selection1')
    return (
        <div className='centralContainer'>
            <div>
                <img src={amd1} alt='imagephoto' className='bannerimgi' />
                <div className='insightlayer'>
                    <div className='insoghtcontainer'>
                        <h3>Insight</h3>
                        <p>
                            Insight is the foundation of effective decision-making, meaningful 
                            leadership, and sustainable growth. At Catchline Consulting, insight 
                            goes beyond information or data—it is the ability to interpret context, 
                            understand systems, and translate knowledge into action. In complex and 
                            fast-changing environments, insight provides clarity where uncertainty 
                            exists and direction where ambiguity prevails.<br/><br/>

                            True insight is developed through careful observation, critical analysis, 
                            and experience. It requires asking the right questions, challenging 
                            assumptions, and understanding the interconnectedness of markets, institutions, 
                            people, and policy. Businesses and organisations that rely solely on surface-level 
                            data often react too late; those guided by insight anticipate change, manage risk 
                            proactively, and position themselves strategically.<br/><br/>

                            Our approach to insight is grounded in evidence and enriched by perspective. We 
                            combine research, market intelligence, policy analysis, and on-the-ground experience 
                            to develop a deep understanding of the environments in which our clients operate. 
                            This allows us to identify not only what is happening, but why it is happening—and what 
                            it means for the future.<br/><br/>

                            Insight also demands context. Global best practices are valuable, but they must be 
                            adapted to local realities. At Catchline, we place strong emphasis on contextual 
                            intelligence—recognising cultural, regulatory, economic, and institutional factors 
                            that influence outcomes. This ensures that strategies are realistic, relevant, and 
                            implementable.<br/><br/>

                            Most importantly, insight must lead to action. Knowledge without application has 
                            limited value. We translate insight into practical strategies, policies, and programs 
                            that drive performance, strengthen systems, and create measurable impact. Whether 
                            advising a business, guiding a government agency, or supporting an investor, our 
                            insights are designed to inform decisions that are timely, ethical, and sustainable.
                            In a world defined by constant change, insight is a strategic advantage. It enables 
                            organisations to move with purpose, lead with confidence, and transform potential into 
                            lasting performance.
                        </p>
                    </div>
                </div>
                <div className='insightcorner'>
                    <div className='centralContainer'>
                        <div>
                            <div className='upperservicelayer'>
                                <div className='serviceLayer'>
                                    <div className='servicesections'>

                                        <div className='servicebuttons'>
                                            <button onClick={() => setActiveSelection('selection1')} className={`${activeSelection === 'selection1' ? 'boddy' : 'baskin'}`}>
                                                Business Articles
                                            </button>
                                            <div>|</div>

                                            <button onClick={() => setActiveSelection('selection2')} className={`${activeSelection === 'selection2' ? 'boddy' : 'baskin'}`}>
                                                Leadership Insights
                                            </button>
                                            <div>|</div>

                                            <button onClick={() => setActiveSelection('selection3')} className={`${activeSelection === 'selection3' ? 'boddy' : 'baskin'}`}>
                                                Policy Briefs
                                            </button>
                                            <div>|</div>

                                            <button onClick={() => setActiveSelection('selection4')} className={`${activeSelection === 'selection4' ? 'boddy' : 'baskin'}`}>
                                                Market Trends
                                            </button>
                                            <div>|</div>

                                            <button onClick={() => setActiveSelection('selection5')} className={`${activeSelection === 'selection5' ? 'boddy' : 'baskin'}`}>
                                                Case Studies
                                            </button>

                                            <button onClick={() => setActiveSelection('selection6')} className={`${activeSelection === 'selection6' ? 'boddy' : 'baskin'}`}>
                                                Reports & Whitepapers
                                            </button>
                                        </div>


                                        <div className=''>
                                            {activeSelection === 'selection1' && <div><BusinessArticles /></div>}
                                            {activeSelection === 'selection2' && <div><LeaderShip /></div>}
                                            {activeSelection === 'selection3' && <div><PolicyBriefs /> </div>}
                                            {activeSelection === 'selection4' && <div><MarketTrends /></div>}
                                            {activeSelection === 'selection5' && <div><CaseStudies /></div>}
                                            {activeSelection === 'selection6' && <div><ReportsWhitepaper /></div>}
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                this is the insight page
            </div>
        </div>
    )
}

export default Insights
