import '../../styles/pages/homepage.css';

export default function FactsCard({ emoji, stat, description }) {
    return (
        <div className="facts-card">
            <div className="emoji">{emoji}</div>
            <h3 className='stat'>{stat}</h3>
            <p className='description'>{description}</p>
        </div>
    )
}