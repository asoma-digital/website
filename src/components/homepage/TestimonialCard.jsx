export default function TestimonialCard({ testimony }) {
    return (
        <div className="testimonial-card">
            <div className="testimonial-header">
                <img src={testimony.image} alt={testimony.name} />
                <div className="testimonial-info">
                    <p className="name">{testimony.name}</p>
                    <p className="role">{testimony.role}</p>
                </div>
            </div>
            <div>
                <p className="review">{testimony.review}</p>
            </div>
            <div className="rating-container">
                <div className="stars">
                    {'⭐'.repeat(testimony.rating)}
                </div>
            </div>
        </div>
    )
}
