import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Nav: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showHeader, setShowHeader] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down - hide header
                setShowHeader(false);
            } else {
                // Scrolling up - show header
                setShowHeader(true);
            }

            setScrolled(currentScrollY > 20);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    };

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            {/* Logo and Vision Section */}
            <div className={`vision-section ${scrolled ? 'scrolled' : ''} ${!showHeader ? 'hidden' : ''}`}>
                <div className="container vision-container">
                    <div className="college-logo">
                        <span className="logo-icon">🎓</span>
                    </div>

                    <div className="vision-text">
                        <h1 className="institution-name">
                            JEPPIAAR INSTITUTE OF TECHNOLOGY
                        </h1>
                    </div>

                    <div className="naac-badge">
                        <div className="badge-circle">
                            <span className="badge-grade">A+</span>
                            <span className="badge-text">NAAC</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className={`main-nav ${!showHeader ? 'hidden' : ''}`}>
                <div className="container nav-container">
                    <button
                        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        {isLoggedIn ? (
                            <>
                                <Link
                                    to="/dashboard"
                                    className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}
                                    onClick={closeMenu}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/profile"
                                    className={`nav-link ${isActive('/profile') ? 'active' : ''}`}
                                    onClick={closeMenu}
                                >
                                    Profile
                                </Link>
                                <Link
                                    to="/subjects"
                                    className={`nav-link ${isActive('/subjects') ? 'active' : ''}`}
                                    onClick={closeMenu}
                                >
                                    Subjects
                                </Link>
                                <Link
                                    to="/staffs"
                                    className={`nav-link ${isActive('/staffs') ? 'active' : ''}`}
                                    onClick={closeMenu}
                                >
                                    Staffs
                                </Link>
                                <button onClick={handleLogout} className="nav-link logout-link">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="nav-link" onClick={closeMenu}>Login</Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            <style>{`
                /* Vision Section */
                .vision-section {
                    background: white;
                    padding: 30px 0;
                    border-bottom: 1px solid #e0e0e0;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1001;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                    transform: translateY(0);
                }

                .vision-section.scrolled {
                    padding: 15px 0;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                .vision-section.hidden {
                    transform: translateY(-100%);
                }

                .vision-container {
                    display: grid;
                    grid-template-columns: auto 1fr auto;
                    gap: 30px;
                    align-items: center;
                }

                .college-logo {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #0A2FB6, #2CC7FF);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 12px rgba(10, 47, 182, 0.2);
                }

                .logo-icon {
                    font-size: 40px;
                }

                .vision-text {
                    text-align: center;
                }

                .institution-name {
                    font-family: 'Arial', 'Helvetica', sans-serif;
                    font-size: 32px;
                    font-weight: 700;
                    color: #0A2FB6;
                    line-height: 1.2;
                    margin: 0;
                    letter-spacing: 1px;
                    animation: fadeInSlide 1.5s ease-out;
                }

                @keyframes fadeInSlide {
                    0% {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .naac-badge {
                    width: 80px;
                    height: 80px;
                }

                .badge-circle {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #FFD700, #FFA500);
                    border-radius: 50%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
                    border: 3px solid #8B4513;
                }

                .badge-grade {
                    font-size: 28px;
                    font-weight: 800;
                    color: #8B4513;
                    line-height: 1;
                }

                .badge-text {
                    font-size: 12px;
                    font-weight: 700;
                    color: #8B4513;
                }

                /* Main Navigation */
                .main-nav {
                    background: linear-gradient(135deg, #082A9E, #0A2FB6);
                    position: fixed;
                    top: 140px;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    transform: translateY(0);
                }

                .main-nav.hidden {
                    transform: translateY(-250px);
                }

                .nav-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0;
                }

                .nav-menu {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .nav-link {
                    padding: 15px 20px;
                    color: white;
                    font-weight: 500;
                    font-size: 14px;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    cursor: pointer;
                    border-bottom: 3px solid transparent;
                }

                .nav-link:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-bottom-color: #2CC7FF;
                }

                .nav-link.active {
                    background: rgba(255, 255, 255, 0.15);
                    border-bottom-color: #2CC7FF;
                    font-weight: 600;
                }

                .logout-link {
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: 4px;
                    margin-left: 10px;
                }

                .logout-link:hover {
                    background: rgba(255, 255, 255, 0.2);
                    border-color: rgba(255, 255, 255, 0.5);
                }

                .menu-toggle {
                    display: none;
                    flex-direction: column;
                    gap: 5px;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 10px;
                }

                .menu-toggle span {
                    width: 28px;
                    height: 3px;
                    background: white;
                    transition: 0.3s;
                    border-radius: 2px;
                }

                .menu-toggle.active span:nth-child(1) { 
                    transform: rotate(45deg) translate(7px, 7px); 
                }
                .menu-toggle.active span:nth-child(2) { 
                    opacity: 0; 
                }
                .menu-toggle.active span:nth-child(3) { 
                    transform: rotate(-45deg) translate(7px, -7px); 
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .contact-info {
                        flex-direction: column;
                        gap: 5px;
                        font-size: 11px;
                    }

                    .vision-container {
                        grid-template-columns: 1fr;
                        gap: 15px;
                        text-align: center;
                    }

                    .college-logo, .naac-badge {
                        margin: 0 auto;
                    }

                    .vision-statement {
                        font-size: 14px;
                    }

                    .vision-section {
                        top: 63px;
                    }

                    .main-nav {
                        top: auto;
                        bottom: 0;
                    }

                    .menu-toggle {
                        display: flex;
                        position: absolute;
                        right: 20px;
                    }

                    .nav-menu {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background: #082A9E;
                        flex-direction: column;
                        padding: 0;
                        gap: 0;
                        max-height: 0;
                        overflow: hidden;
                        transition: max-height 0.3s ease;
                    }

                    .nav-menu.active {
                        max-height: 500px;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                    }

                    .nav-link {
                        width: 100%;
                        text-align: center;
                        padding: 15px;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    }
                }
            `}</style>
        </>
    );
};

export default Nav;
