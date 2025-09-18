import '../../styles/pages/homepage.css'
import { FeaturesTitle, FeaturesDescription } from '../shared/typography'
import Emoji from '../shared/Emoji';

export default function FeaturesCard ({ emoji, color1, color2, title, description}) {
    return (
        <div className="features-card">
            <Emoji color1={color1} color2={color2} emoji={emoji} fontsize="24px"/>
            <FeaturesTitle text={title} />
            <FeaturesDescription text={description} />
        </div>
    )
}