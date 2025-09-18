import '../../styles/pages/homepage.css';
import FactsCard from './FactsCard';


export default function Facts() {
    return (
        <section className="facts-section">
            <FactsCard emoji={"📈"} stat="1 Accelerator" description="Techstarts Emory Accelerator Program" />
            <FactsCard emoji={"🌍"} stat="2 User Regions" description="Testing in the UK and US" />
            <FactsCard emoji={"🔧"} stat="3 Core Features" description="Starting with 3 features and still building" />
            <FactsCard emoji={"🧑‍💻"} stat="6 Team Members" description="Multiple teams making our vision come true" />
        </section>
    )
}