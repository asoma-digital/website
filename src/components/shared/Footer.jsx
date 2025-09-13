import '../../styles/components/footer.css'
import { Divider, Icon } from '.'
import { Link } from 'react-router-dom'
import { Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className='footer-upper'>
                <div className="footer-column">
                    <p className='footer-title'>asoma</p>
                    <p>Empowering ADHD students with science-backed tools for focus, time management, and self advocacy.</p>
                    <div className='social-media'>
                        <a href="https://twitter.com/asoma_digital" target="_blank" rel="noopener noreferrer">
                            <Icon color1="var(--color3)" color2="var(--color6)" icon={Twitter}/>
                        </a>
                        <a href="http://linkedin.com/company/asoma-digital-app" target="_blank" rel="noopener noreferrer">
                            <Icon color1="var(--color4)" color2="var(--color3)" icon={Linkedin}/>
                        </a>
                        <a href="https://www.instagram.com/asoma_digital/" target="_blank" rel="noopener noreferrer">
                            <Icon color1="var(--color5)" color2="var(--color4)" icon={Instagram}/>
                        </a>
                    </div>
                </div>
                <div className="footer-column">
                    <ul>
                        <li>Product</li>
                        <li><Link to="/product#features">Features</Link></li>
                        <li><Link to="/product#adaptive-pomodoro">Adaptive Pomodoro</Link></li>
                        <li><Link to="/product#task-management">Task Management</Link></li>
                        <li><Link to="/product#insights-dashboard">Insights Dashboard</Link></li>
                        <li><Link to="/product#beta-program">Beta Program</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                        <li>Company</li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/mission">Our Mission</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/investors">Investors</Link></li>
                        <li><Link to="/press-kit">Press Kit</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                        <li>Support</li>
                        <li><Link to="/help-center">Help Center</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/community">Community</Link></li>
                    </ul>
                </div>
            </div>
            <Divider />
            <div className='footer-lower'>
                <div className="footer-legal">
                    <p>&copy; 2025 asoma. All rights reserved.</p>
                    <p><Link to="/privacy-policy">Privacy Policy</Link></p>
                    <p><Link to="/terms-of-service">Terms of Service</Link></p>
                    <p><Link to="/cookie-policy">Cookie Policy</Link></p>
                </div>
                <div>
                    <p>Made with 💙 for ADHD students</p>
                </div>
            </div>
        </footer>
    )
}