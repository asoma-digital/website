export default function Connect() {
    return (
        <section className="connect">
            <div className="connect-container get-in-touch">
                <p className="connect-container-title">get in touch</p>
                <p className="connect-container-description">Have questions, feedback, or want to collaborate? Reach out — we'd love to hear from you.</p>
                <div className="connect-container-email">
                    <p>Email us at:</p>
                </div>
                <div className="email-holder"><p>hello@asoma.app</p></div>
            </div>
            <div className="newsletter-wrapper">
                <div className="newsletter-background-blur"></div>
                <div className="connect-container newsletter">
                    {/* content inside newsletter (title, description, form, list) */}
                    <p className="connect-container-title">clarifi newsletter</p>
                    <p className="connect-container-description">Join our email list to get monthly updates on clarifi's progress, milestones, and what's next.</p>
                    <form>
                        <input type="email" placeholder="Enter your email address" />
                        <button type="submit"><p>Join Newsletter</p></button>
                    </form>
                    <ul>
                        <li>No spam ever</li>
                        <li>Unsubscribe anytime</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}