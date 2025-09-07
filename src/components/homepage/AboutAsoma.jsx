import { Heading1 } from "../shared/typography"

export default function AboutAsoma () {
    return (
        <div className='about-asoma' style={{ display:'none'}}>
            <Heading1 text="about asoma" />
            <div>
                <div>
                    <p>Lived Experience</p>
                    <p>Built by and for ADHD students who understand the daily challenges of executive function and focus management</p>
                </div>
                <div>
                    <p>Research-Backed</p>
                    <p>Grounded in cognitive science and executive function research to provide evidence-based solutions</p>
                </div>
                <div>
                    <p>Global Collaboration</p>
                    <p>Designed with input from ADHD students worldwide to ensure universal accessibility and effectiveness</p>
                </div>
            </div>
            <div>
                <div>
                    <p>Purpose-Built Platform</p>
                    <p>Empowering Neurodivergent Learners </p>
                    <p>Technology as a powerful ally in building sustainable focus habits and managing executive function challenges</p>
                    <ul>
                        <li>Intuitive Design</li>
                        <li>Science-Backed</li>
                        <li>Student-Centered</li>
                    </ul>
                </div>
            </div>
            <div>
                <p>
                    asoma digital LTD is the company behind clarifi, a purpose-built platform to support college students with ADHD. We believe technology can be a powerful ally in building sustainable focus habits, managing executive function challenges, and empowering neurodivergent learners to thrive.
                </p>
                <p>
                clarifi was designed through lived experience, research, and collaboration with ADHD students across the globe. Our goal is to create intuitive, science-backed tools that help students take back control of their time, energy, and goals.
                </p>
            </div>
        </div>
    )
}