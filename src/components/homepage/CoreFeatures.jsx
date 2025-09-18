import { Heading1 } from '../shared/typography';
import { Clock4, ClipboardCheck, TrendingUp, Instagram } from 'lucide-react';
import { FeaturesTitle, FeaturesDescription, FeaturesLearnMore } from '../../components/shared/typography'
import FeaturesCard from './FeaturesCard';

const features = [
    {
        emoji: "⏰",
        color1: "#04BDE7",
        color2: "#0486BE",
        title: "Smart Time Blocking",
        description: "AI-powered scheduling that adapts to your energy levels and attention patterns throughout the day"
    },
    {
        emoji: "🧠",
        color1: "#6AEAFB",
        color2: "#04BDE7",
        title: "Executive Function Tools",
        description: "Break down complex tasks, set reminders, and build sustainable routines that work with your brain"
    },
    {
        emoji: "📊",
        color1: "#FFE571",
        color2: "#6AEAFB",
        title: "Progress Insights",
        description: "Understand your productivity patterns and celebrate wins with detailed but digestible analytics"
    },
    {
        emoji: "🎯",
        color1: "#04BDE7",
        color2: "#6AEAFB",
        title: "Distraction Management",
        description: "Website blocking, notification control, and environmental cues to maintain focus during study sessions"
    },
    { emoji: "🤝",
        color1: "#FFE571",
        color2: "#FF8A65",
        title: "Peer Support Network",
        description: "Connect with other ADHD students, share strategies, and build accountability partnerships"
    },
    { emoji: "🎓",
        color1: "#0486BE",
        color2: "#FFE571",
        title: "Academic Integration",
        description: "Sync with your LMS, track assignments, and get personalized study recommendations for each course"
    },
]

export default function CoreFeatures () {
    return (
      <div className='core-features'>
        <Heading1 text="complete ADHD support system" />
        <p className='subtitle'>Every feature is designed with ADHD students in mind, backed by research and real-world testing</p>
        <div className="features-cards">
            {features.map((feature, index) => (
                <FeaturesCard 
                    key={index}
                    emoji={feature.emoji}
                    color1={feature.color1}
                    color2={feature.color2}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
        </div>
      </div>
    )
}