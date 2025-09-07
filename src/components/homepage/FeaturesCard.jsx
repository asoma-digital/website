import '../../styles/pages/homepage.css'
import Icon from '../shared/Icon'
import { FeaturesTitle, FeaturesDescription, FeaturesLearnMore } from '../shared/typography'

export default function FeaturesCard ({ icon, title, description, color}) {
    return (
        <div className="features-card">
            {/* <Icon/> */}
            <div 
                className="icon" 
                style={{background: 'linear-gradient(90deg, #0486BE 0%, #04BDE7 100%)',}}
            >
                <Mail size={28} color="#FFFFFF" strokeWidth={2}/>
            </div>
            <FeaturesTitle text={title} />
            <FeaturesDescription text={description} />
            <FeaturesLearnMore color={color}/>
        </div>
    )
}