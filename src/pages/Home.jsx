// src/pages/Home.jsx

import { PrimaryButton, SecondaryButton } from '../components/shared';
import BackgroundBlobs from '../components/shared/BackgroundBlobs';
import { Heading1, PageTitle } from '../components/shared/typography';
import '../styles/pages/homepage.css';

import { Clock4, ClipboardCheck, TrendingUp } from 'lucide-react';
import { FeaturesTitle, FeaturesDescription, FeaturesLearnMore } from '../components/shared/typography'

export default function Home() {
  return (
    <main className="main">
      <BackgroundBlobs />
      <div className='hero'>
        <div className='hero-text'>
          <PageTitle text="stay connected. stay focused." />
          <p>clarifi by asoma digital LTD empowers ADHD students with science-backed tools for focus, time management, and self advocacy, </p>
        </div>
        <div className='hero-buttons'>
          <PrimaryButton buttonText="Join the beta" />
          <SecondaryButton buttonText="Learn more" />
        </div>
      </div>
      <div className='core-features'>
        <Heading1 text="core features" />
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
      <div className='about-asoma' style={{ display:'none'}}>
        <Heading1 text="about asoma" />
        <p>asoma digital LTD is the company behind clarifi, a purpose-built platform to support college students with ADHD. We believe technology can be a powerful ally in building sustainable focus habits, managing executive function challenges, and empowering neurodivergent learners to thrive.</p>
        <p>
          clarifi was designed through lived experience, research, and collaboration with ADHD students across the globe. Our goal is to create intuitive, science-backed tools that help students take back control of their time, energy, and goals.
        </p>
      </div>
    </main>
  );
}