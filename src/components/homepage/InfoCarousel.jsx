import { useEffect , useState } from 'react';
import '../../styles/pages/homepage.css';

const infoCards = [
    {
        colorSet: '1',
        title: "Lived Experience",
        description: "Built by and for ADHD students who understand the daily challenges of executive function and focus management"
    },
    {
        colorSet: '2',
        title: "Research-Backed",
        description: "Grounded in cognitive science and executive function research to provide evidence-based solutions"
    },
    {
        colorSet: '3',
        title: "Global Collaboration ",
        description: "Designed with input from ADHD students worldwide to ensure universal accessibility and effectivness "
    },
]

export default function InfoCarousel () {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % infoCards.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel-container">
            <div
            className="carousel-slider"
            style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {infoCards.map((card, i) => (
                    <div className="carousel-slide" key={i}>
                        <div className="card">
                            <div className={`info-color-tab color-${card.colorSet}`} />
                            <div className="card-content">
                                <div className="info-title">{card.title}</div>
                                <div className="info-description">{card.description}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="dot-tracker">
                {infoCards.map((_, i) => (
                    <span
                        key={i}
                        className={`dot ${index === i ? 'active' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
}