import { ColorfulDivider } from "../shared"
import { Heading1 } from "../shared/typography"
import '../../styles/pages/homepage.css'
import InfoCarousel from "./InfoCarousel"

export default function AboutAsoma () {
    return (
        <div className='about-asoma' id="about">
            <Heading1 text="about asoma" />
            <ColorfulDivider />
            <InfoCarousel />
            <div className="empower">
                <p className="empower-title">Empowering Neurodivergent Learners</p>
                <p className="empower-description">Technology as a powerful ally in building sustainable focus habits and managing executive function challenges</p>
                <ul className="color-bullets">
                    <li className="bullet-blue">Intuitive Design</li>
                    <li className="bullet-cyan">Science-Backed</li>
                    <li className="bullet-yellow">Student-Centered</li>
                </ul>
            </div>
            <div className="about-asoma-text-border" />
            <div className="about-asoma-text">
                <p>asoma is a purpose-built platform to support college students with ADHD. We believe tehcnology can be a powerful ally in building sustainable focus habits, managing executive function challenges, and empowering neurodivergent learners to thrive</p>
                <div className="about-asoma-text-divider" />
                <p>asoma was designed through lived experience, reserach, and collaboration with ADHD students across the globe. Our goal is to create intutive, science-backed tools that help students take back control of their time, energy, and goals.</p>
            </div>
        </div>
    )
}