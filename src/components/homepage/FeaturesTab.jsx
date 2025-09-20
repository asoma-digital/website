import { useState } from 'react';
import '../../styles/pages/homepage.css';
import { useNavigate } from 'react-router-dom';


const features = [
    {
        id: 'focus',
        title: 'Focus Timer',
        subtitle: 'Pomodoro-style timer with ADHD-friendly customizations',
        details: [
            'Customizable work/break intervals',
            'Visual and audio cues',
            'Progress tracking',
            'Distraction blocking'
        ],
        demoText: 'Focus Timer Demo',
        button: 'Try This Feature'
    },
    {
        id: 'tasks',
        title: 'Task Management',
        subtitle: 'Break down overwhelming projects into manageable steps',
        details: [
            'Create subtasks and milestones',
            'Use templates for recurring work',
            'Tag by priority and pillar',
            'Progress tracking'
        ],
        demoText: 'Task Management Demo',
        button: 'Try This Feature'
    },
    {
        id: 'analytics',
        title: 'Study Analytics',
        subtitle: 'Understand your focus patterns and optimize your schedule',
        details: [
            'Visual summaries of focus time',
            'Top focus hours chart',
            'Insightful suggestions',
            'Progress tracking'
        ],
        demoText: 'Study Analytics Demo',
        button: 'Try This Feature'
    },
];

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState('focus');
  const current = features.find(f => f.id === activeTab);
  const navigate = useNavigate();

  return (
    <div className="feature-tabs-container">
      {/* Tabs */}
      <div className="tabs">
        {features.map(feature => (
          <div
            key={feature.id}
            className={`tab ${activeTab === feature.id ? 'active' : ''}`}
            onClick={() => setActiveTab(feature.id)}
          >
            <p className="tab-title">{feature.title}</p>
            <p className="tab-subtitle">{feature.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Active Feature Content */}
      <div className="feature-content">
        <div className="feature-demo">
          <div className="demo-box">{current.demoText}</div>
        </div>
        <div className="feature-details">
          <h3>{current.title}</h3>
          <p className="feature-subtitle">{current.subtitle}</p>
          <ul className="feature-list">
            {current.details.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <button className="feature-button" onClick={() => navigate('/beta')}>{current.button}</button>
        </div>
      </div>
    </div>
  );
}