import '../../styles/components/footer.css'
import { Divider } from '.'

export default function Footer() {
    return (
        <footer className="footer">
            <div className='footer-upper'>
                <div className="footer-column">
                    <p>asoma</p>
                    <p>Empowering ADHD students with science-backed tools for focus, time management, and self advocacy.</p>
                </div>
                <div className="footer-column">
                    <p>Product</p>
                    <ul>
                        <li>Features</li>
                        <li>Adaptive Pomodoro</li>
                        <li>Task Management</li>
                        <li>Insights Dashboard</li>
                        <li>Beta Program</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <p>Company</p>
                    <ul>
                        <li>About Us</li>
                        <li>Our Mission</li>
                        <li>Careers</li>
                        <li>Investors</li>
                        <li>Press Kit</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <p>Support</p>
                    <ul>
                        <li>Help Center</li>
                        <li>Contact Us</li>
                        <li>Community</li>
                    </ul>
                </div>
            </div>
            <Divider />
            <div className='footer-lower'>
                <div className="footer-legal">
                    <p>&copy; 2025 asoma. All rights reserved.</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookie Policy</p>
                </div>
                <div>
                    <p>Made with 💙 for ADHD students</p>
                </div>
            </div>
        </footer>
    )
}