export default function Hero() {
  return (
    <div className="hero-content" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
        <section className="hero-section">
        <div className="container mx-auto px-4 py-40 text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Stay connected. Stay focused.
            </h2>
            <p className="text-lg sm:text-xl max-w-xl mx-auto mb-8">
            clarifi by <strong>asoma digital LTD</strong> empowers ADHD students 
            with science-backed tools for focus, time management, and self-advocacy.
            </p>
            <a
            href="#contact"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-md hover:bg-primary-700 transition"
            >
            Join the beta
            </a>
        </div>
        </section>
    </div>
  );
}