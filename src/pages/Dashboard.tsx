import React from 'react';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';
import { SAMPLE_USER, RECENT_DOWNLOADS } from '../data/sampleData';

const Dashboard: React.FC = () => {
    return (
        <div className="page-container dashboard-page">
            <Nav />
            <div className="content-wrapper">
                {/* Hero Section */}
                <div className="dashboard-hero">
                    <div className="hero-welcome">
                        <span className="badge">Welcome Back</span>
                        <h1>Hello, {SAMPLE_USER.name}! 👋</h1>
                        <p className="text-muted">
                            {SAMPLE_USER.year} • {SAMPLE_USER.department}
                        </p>
                    </div>
                </div>

                <div className="dashboard-layout">
                    {/* Main Content */}
                    <div className="main-content">
                        {/* Quick Actions */}
                        <section className="section">
                            <h2 className="section-title">Quick Actions</h2>
                            <div className="quick-links-grid">
                                <Link to="/staffs" className="action-card">
                                    <span className="action-icon">👥</span>
                                    <span className="action-text">Find Staff</span>
                                </Link>
                                <Link to="/subjects" className="action-card">
                                    <span className="action-icon">📚</span>
                                    <span className="action-text">My Subjects</span>
                                </Link>
                                <Link to="/profile" className="action-card">
                                    <span className="action-icon">👤</span>
                                    <span className="action-text">Edit Profile</span>
                                </Link>
                                <div className="action-card disabled">
                                    <span className="action-icon">📅</span>
                                    <span className="action-text">Timetable</span>
                                </div>
                            </div>
                        </section>

                        {/* Department Info */}
                        <section className="section">
                            <div className="card info-card">
                                <div className="card-header">
                                    <h3>Department Info</h3>
                                    <span className="badge">IT Dept</span>
                                </div>
                                <div className="info-grid">
                                    <div className="info-item">
                                        <label>Head of Department</label>
                                        <p>Dr. Selvam</p>
                                    </div>
                                    <div className="info-item">
                                        <label>Class Advisor</label>
                                        <p>Mrs. Ruth Shobitha</p>
                                    </div>
                                    <div className="info-item">
                                        <label>Total Students</label>
                                        <p>120</p>
                                    </div>
                                    <div className="info-item">
                                        <label>Semester</label>
                                        <p>7th</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Vision & Mission */}
                        <section className="section">
                            <div className="card vision-card">
                                <div className="card-header">
                                    <h3>Vision & Mission</h3>
                                </div>
                                <div className="vision-content">
                                    <div className="vision-block">
                                        <h4>Vision</h4>
                                        <p>Jeppiaar Institute of Technology aspires to provide technical education in futuristic technologies with the perspective of innovative, industrial, and social applications for the betterment of humanity.</p>
                                    </div>
                                    <div className="vision-block">
                                        <h4>Mission</h4>
                                        <ul>
                                            <li>To produce competent and disciplined high-quality professionals.</li>
                                            <li>To improve the quality of education through excellence in teaching.</li>
                                            <li>To provide excellent infrastructure and stimulating environment.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="sidebar">
                        {/* Recent Downloads */}
                        <div className="card sidebar-card">
                            <h3>Recent Downloads</h3>
                            <div className="downloads-list">
                                {RECENT_DOWNLOADS.map(download => (
                                    <div key={download.id} className="download-item">
                                        <div className="download-icon">📄</div>
                                        <div className="download-info">
                                            <p className="download-title">{download.title}</p>
                                            <span className="download-meta">{download.subject} • {download.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="btn btn-ghost btn-sm w-full mt-4">View All Downloads</button>
                        </div>
                    </aside>
                </div>
            </div>

            <style>{`
                .dashboard-hero {
                    background: white;
                    border-radius: 20px;
                    padding: 32px;
                    margin-bottom: 32px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    box-shadow: var(--shadow-card);
                    border: 1px solid rgba(255,255,255,0.5);
                }

                .hero-welcome h1 {
                    font-size: 32px;
                    margin: 8px 0;
                }

                .hero-stats-grid {
                    display: flex;
                    gap: 24px;
                }

                .stat-card {
                    background: var(--bg);
                    padding: 16px 24px;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    min-width: 160px;
                }

                .stat-icon {
                    width: 48px;
                    height: 48px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                }

                .stat-icon.blue { background: #e0f2fe; color: #0284c7; }
                .stat-icon.orange { background: #ffedd5; color: #ea580c; }
                .stat-icon.green { background: #dcfce7; color: #16a34a; }

                .stat-info {
                    display: flex;
                    flex-direction: column;
                }

                .stat-value {
                    font-size: 24px;
                    font-weight: 700;
                    color: var(--primary-dark);
                }

                .stat-label {
                    font-size: 13px;
                    color: var(--text-muted);
                }

                .dashboard-layout {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 32px;
                }

                .section {
                    margin-bottom:20px;
                }

                .quick-links-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                    gap: 16px;
                }

                .action-card {
                    background: white;
                    padding: 20px;
                    border-radius: 16px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                    text-align: center;
                    transition: var(--transition);
                    border: 1px solid var(--border);
                    color: var(--text-main);
                }

                .action-card:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-lg);
                    border-color: var(--primary);
                }

                .action-icon {
                    font-size: 32px;
                    background: var(--bg);
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: var(--transition);
                }

                .action-card:hover .action-icon {
                    background: var(--primary-light);
                    transform: scale(1.1);
                }

                .action-text {
                    font-weight: 600;
                    font-size: 14px;
                }

                .action-card.disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                    filter: grayscale(1);
                }

                .info-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 24px;
                    margin-top: 16px;
                }

                .info-item label {
                    display: block;
                    font-size: 12px;
                    color: var(--text-muted);
                    margin-bottom: 4px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .info-item p {
                    font-weight: 600;
                    color: var(--primary-dark);
                }

                .vision-content {
                    margin-top: 16px;
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .vision-block h4 {
                    color: var(--primary);
                    margin-bottom: 8px;
                    font-size: 16px;
                }

                .vision-block p, .vision-block li {
                    font-size: 14px;
                    color: var(--text-muted);
                    line-height: 1.6;
                }

                .vision-block ul {
                    list-style: disc;
                    padding-left: 20px;
                }

                .sidebar {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .events-list {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    margin-top: 16px;
                }

                .event-item {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                }

                .event-date {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: var(--bg);
                    padding: 8px;
                    border-radius: 12px;
                    min-width: 60px;
                    text-align: center;
                }

                .event-date span { font-size: 12px; text-transform: uppercase; }
                .event-date strong { font-size: 18px; color: var(--primary-dark); }
                
                .event-date.academic { color: var(--primary); background: var(--primary-light); }
                .event-date.event { color: #ea580c; background: #ffedd5; }
                .event-date.holiday { color: #dc2626; background: #fee2e2; }

                .event-details {
                    flex: 1;
                }

                .event-title {
                    font-weight: 600;
                    font-size: 14px;
                    margin-bottom: 2px;
                }

                .event-type {
                    font-size: 12px;
                    color: var(--text-muted);
                    text-transform: capitalize;
                }

                .downloads-list {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    margin-top: 16px;
                }

                .download-item {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                    padding: 12px;
                    border-radius: 12px;
                    transition: var(--transition);
                }

                .download-item:hover {
                    background: var(--bg);
                }

                .download-icon {
                    width: 40px;
                    height: 40px;
                    background: #f1f5f9;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                }

                .download-info {
                    flex: 1;
                }

                .download-title {
                    font-size: 14px;
                    font-weight: 500;
                    margin-bottom: 2px;
                }

                .download-meta {
                    font-size: 12px;
                    color: var(--text-muted);
                }

                .card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 24px;
                    padding-bottom: 16px;
                    border-bottom: 1px solid var(--border);
                }

                .card-header h3 {
                    margin: 0;
                    font-size: 18px;
                }

                @media (max-width: 968px) {
                    .dashboard-layout {
                        grid-template-columns: 1fr;
                    }

                    .dashboard-hero {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 24px;
                    }

                    .hero-stats-grid {
                        width: 100%;
                        overflow-x: auto;
                        padding-bottom: 8px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Dashboard;
