import '../../styles/pages/homepage.css';
import FeatureTabs from './FeaturesTab';


export default function ActionAsoma() {
    return (
        <section className="action-asoma">
            <p className='action-title'>see asoma in action</p>
            <p className='action-subtitle'>Explore our key features designed specifically for ADHD students to enhance focus and productivity</p>
            <FeatureTabs />
        </section>
    )
}