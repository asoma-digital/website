import '../../styles/components/footer.css'
import { Divider, Icon } from '.'
import { Link } from 'react-router-dom'
import { Twitter, Instagram, Linkedin, ChevronUp, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
    const [isMobile, setIsMobile] = useState(false);
    const [openSections, setOpenSections] = useState({
        product: false,
        company: false,
        support: false
    });

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1000);
        handleResize(); // Set on load
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSection = (section) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

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

                {/* Product Section */}
                <div className="footer-column">
                    <ul>
                        <li onClick={() => toggleSection('product')}>
                            Product {isMobile && <span>{openSections.product ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</span>}
                        </li>
                        {(!isMobile || openSections.product) && (
                            <>
                                <li><Link to="/product#features">Features</Link></li>
                                <li><Link to="/product#adaptive-pomodoro">Adaptive Pomodoro</Link></li>
                                <li><Link to="/product#task-management">Task Management</Link></li>
                                <li><Link to="/product#insights-dashboard">Insights Dashboard</Link></li>
                                <li><Link to="/product#beta-program">Beta Program</Link></li>
                            </>
                        )}
                    </ul>
                </div>

                {/* Company Section */}
                <div className="footer-column">
                    <ul>
                        <li onClick={() => toggleSection('company')}>
                            Company {isMobile && <span>{openSections.company ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</span>}
                        </li>
                        {(!isMobile || openSections.company) && (
                            <>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/about#mission">Our Mission</Link></li>
                                <li><Link to="/investors">Investors</Link></li>
                            </>
                        )}
                    </ul>
                </div>

                {/* Support Section */}
                <div className="footer-column">
                    <ul>
                        <li onClick={() => toggleSection('support')}>
                            Support {isMobile && <span>{openSections.support ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</span>}
                        </li>
                        {(!isMobile || openSections.support) && (
                            <>
                                <li><Link to="/support#help-center">Help Center</Link></li>
                                <li><Link to="/support#contact">Contact Us</Link></li>
                                <li><Link to="/support#community">Community</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>

            <Divider />

            <div className='footer-lower'>
                <div className="footer-legal">
                    <div>
                        <p>&copy; 2025 asoma. All rights reserved.</p>
                    </div>
                    <div className="footer-legal-links">
                        <p><Link to="/legal#privacy-policy">Privacy Policy</Link></p>
                        <p><Link to="/legal#terms-of-service">Terms of Service</Link></p>
                        <p><Link to="/legal#cookie-policy">Cookie Policy</Link></p>
                    </div>
                </div>
                <div>
                    <p>Made with 💙 for ADHD students</p>
                </div>
            </div>
        </footer>
    )
}