import TestimonialCard from "./TestimonialCard"

const testimonies = [
    {
        image: "/testimonial-image/image.png",
        name: "Sarah M.",
        role: "Student",
        review: "asoma has transformed the way I manage my ADHD. The personalized strategies and supportive community have made a significant difference in my daily life.",
        rating: 5
    },
    {
        image: "/testimonial-image/image.png",
        name: "Jamie C.",
        role: "Student",
        review: "asoma has transformed the way I manage my ADHD. The personalized strategies and supportive community have made a significant difference in my daily life.",
        rating: 3
    },
    {
        image: "/testimonial-image/image.png",
        name: "Sarah M.",
        role: "Student",
        review: "asoma has transformed the way I manage my ADHD. The personalized strategies and supportive community have made a significant difference in my daily life.",
        rating: 4
    }
]

export default function Testimonials() {
    return (
        <section className="testimonials">
            <div className="testimonials-container">
                <div>
                    <p className="testimonials-title">what students are saying</p>
                    <p className="testimonials-subtitle">Real feedback from ADHD students about asoma</p>
                </div>
                <div className="testimonials-cards">
                    {testimonies.map((testimony) => (
                        <TestimonialCard testimony={testimony} />
                    ))}
                </div>
            </div>
        </section>
    )
}