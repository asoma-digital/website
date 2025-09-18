import { Heading1 } from '../shared/typography';
import { Clock4, ClipboardCheck, TrendingUp } from 'lucide-react';
import { FeaturesTitle, FeaturesDescription, FeaturesLearnMore } from '../../components/shared/typography'

export default function CoreFeatures () {
    return (
      <div className='core-features'>
        <Heading1 text="complete ADHD support system" />
        <div className="features-cards">
          <div className="features-card">
              {/* <Icon/> */}
              <div 
                  className="icon" 
                  style={{background: 'linear-gradient(90deg, #0486BE 0%, #04BDE7 100%)',}}
              >
                  <Clock4 size={28} color="#FFFFFF" strokeWidth={2}/>
              </div>
              <FeaturesTitle text="Adaptive Pomodoro" />
              <FeaturesDescription text="Customizable focus sprints that learn from your rhythm" />
              <FeaturesLearnMore color="#0486BE"/>
          </div>
          <div className="features-card">
              {/* <Icon/> */}
              <div 
                  className="icon" 
                  style={{background: 'linear-gradient(90deg, #04BDE7 0%, #6AEAFB 100%)',}}
              >
                  <ClipboardCheck size={28} color="#FFFFFF" strokeWidth={2}/>
              </div>
              <FeaturesTitle text="Top-3 Task Flow" />
              <FeaturesDescription text="Night-before planning, morning review, and evening check-off reminders" />
              <FeaturesLearnMore color="#04BDE7"/>
          </div>
          <div className="features-card">
              {/* <Icon/> */}
              <div 
                  className="icon" 
                  style={{background: 'linear-gradient(90deg, #6AEAFB 0%, #FFFD71 100%)',}}
              >
                  <TrendingUp size={28} color="#FFFFFF" strokeWidth={2}/>
              </div>
              <FeaturesTitle text="Insight Dashboard" />
              <FeaturesDescription text="Visual focus patterns, streaks, and productivity insights" />
              <FeaturesLearnMore color="#6AEAFB"/>
          </div>
        </div>
      </div>
    )
}