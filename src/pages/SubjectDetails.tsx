import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import Toast from '../components/Toast';
import { SUBJECTS_DATA, UNITS_DATA, QUESTION_BANKS_DATA } from '../data/sampleData';

const SubjectDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const subject = SUBJECTS_DATA.find(s => s.id === id);
    const units = id ? UNITS_DATA[id] : [];
    const questionBanks = id ? QUESTION_BANKS_DATA[id] || [] : [];

    if (!subject) {
        return (
            <div className="page-container">
                <Nav />
                <div className="content-wrapper error-state">
                    <h2>Subject not found</h2>
                    <button onClick={() => navigate('/subjects')} className="btn btn-primary">
                        Back to Subjects
                    </button>
                </div>
            </div>
        );
    }

    const handleDownload = (e: React.MouseEvent, title: string) => {
        e.preventDefault();
        setToastMessage(`Downloading: ${title}`);
        setShowToast(true);
        // In a real app, the download would happen here via the anchor tag's default behavior
        // or a programmatic trigger.
    };

    return (
        <div className="page-container subject-details-page">
            <Nav />
            {showToast && (
                <Toast
                    message={toastMessage}
                    type="success"
                    onClose={() => setShowToast(false)}
                />
            )}

            <div className="content-wrapper">
                {/* Enhanced Header Banner */}
                <div className="subject-header">
                    <div className="header-overlay"></div>
                    <button onClick={() => navigate('/subjects')} className="back-btn">
                        ← Back to Subjects
                    </button>
                    <div className="header-content">
                        <span className="badge">Semester {subject.semester}</span>
                        <h1 className="subject-title">{subject.name}</h1>
                        <p className="subject-code">{subject.code || 'No code assigned'}</p>
                        <div className="subject-stats">
                            <div className="stat-item">
                                <span className="stat-icon">📚</span>
                                <span className="stat-text">{units?.length || 0} Units</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-icon">📝</span>
                                <span className="stat-text">{questionBanks.length} Question Papers</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="details-layout">
                    {/* Main Content - Units Section */}
                    <div className="main-content">
                        <div className="section-header">
                            <h2 className="section-title">📖 Study Units</h2>
                            <span className="unit-count">{units?.length || 0} units available</span>
                        </div>
                        <div className="units-list">
                            {units && units.length > 0 ? (
                                units.map((unit) => (
                                    <div key={unit.unitNumber} className="card unit-card">
                                        <div className="unit-badge">Unit {unit.unitNumber}</div>
                                        <div className="unit-content">
                                            <h3 className="unit-title">{unit.title}</h3>
                                            <p className="unit-desc">{unit.description}</p>
                                        </div>
                                        <div className="unit-footer">
                                            <a
                                                href={unit.downloadUrl}
                                                download
                                                className="btn btn-primary"
                                                onClick={(e) => handleDownload(e, unit.title)}
                                            >
                                                <span className="btn-icon">⬇️</span>
                                                Download PDF
                                            </a>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="empty-state card">
                                    <span className="empty-icon">📭</span>
                                    <p>No units available for this subject yet.</p>
                                    <span className="empty-hint">Check back later for updates</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar: Question Bank & Resources */}
                    <div className="resources-sidebar">
                        {/* Question Bank */}
                        <div className="card qb-card">
                            <div className="card-icon">📝</div>
                            <h3>Question Bank</h3>
                            <p className="card-subtitle">Previous year question papers</p>
                            <div className="qb-list">
                                {questionBanks.length > 0 ? (
                                    questionBanks.map((qb) => (
                                        <div key={qb.id} className="qb-item">
                                            <div className="qb-info">
                                                <span className="qb-year">{qb.year}</span>
                                                <p className="qb-title">{qb.title}</p>
                                            </div>
                                            <a
                                                href={qb.downloadUrl}
                                                download
                                                className="btn-icon-circle"
                                                title="Download"
                                                onClick={(e) => handleDownload(e, qb.title)}
                                            >
                                                ⬇️
                                            </a>
                                        </div>
                                    ))
                                ) : (
                                    <div className="empty-qb">
                                        <p className="text-muted">No question papers available yet.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Syllabus Card */}
                        <div className="card syllabus-card">
                            <div className="card-icon">📋</div>
                            <h3>Syllabus</h3>
                            <p className="card-subtitle">Complete course syllabus</p>
                            <button className="btn btn-secondary w-full">
                                <span className="btn-icon">⬇️</span>
                                Download Syllabus
                            </button>
                        </div>

                        {/* Quick Info Card */}
                        <div className="card info-card">
                            <div className="card-icon">ℹ️</div>
                            <h3>Quick Info</h3>
                            <div className="info-list">
                                <div className="info-row">
                                    <span className="info-label">Semester</span>
                                    <span className="info-value">{subject.semester}</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">Subject Code</span>
                                    <span className="info-value">{subject.code || 'N/A'}</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">Total Units</span>
                                    <span className="info-value">{units?.length || 0}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .subject-details-page {
                    background: #f8fafc;
                }

                /* Enhanced Header */
                .subject-header {
                    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
                    padding: 48px 40px;
                    border-radius: 24px;
                    color: white;
                    margin-bottom: 32px;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 10px 40px rgba(30, 58, 138, 0.3);
                }

                .header-overlay {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 400px;
                    height: 100%;
                    background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%);
                    pointer-events: none;
                }

                .back-btn {
                    background: rgba(255,255,255,0.15);
                    border: 1px solid rgba(255,255,255,0.3);
                    color: white;
                    padding: 10px 20px;
                    border-radius: 100px;
                    cursor: pointer;
                    margin-bottom: 24px;
                    transition: all 0.3s ease;
                    font-weight: 500;
                    backdrop-filter: blur(10px);
                }

                .back-btn:hover {
                    background: rgba(255,255,255,0.25);
                    transform: translateX(-4px);
                }

                .header-content {
                    position: relative;
                    z-index: 1;
                }

                .header-content .badge {
                    background: rgba(255,255,255,0.2);
                    color: white;
                    margin-bottom: 16px;
                    display: inline-block;
                    padding: 6px 16px;
                    border-radius: 100px;
                    font-size: 13px;
                    font-weight: 600;
                    border: 1px solid rgba(255,255,255,0.3);
                }

                .subject-title {
                    font-size: 36px;
                    color: white;
                    margin-bottom: 12px;
                    font-weight: 700;
                    line-height: 1.2;
                }

                .subject-code {
                    opacity: 0.9;
                    font-size: 16px;
                    margin-bottom: 24px;
                }

                .subject-stats {
                    display: flex;
                    gap: 32px;
                    margin-top: 24px;
                }

                .stat-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(255,255,255,0.15);
                    padding: 12px 20px;
                    border-radius: 12px;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.2);
                }

                .stat-icon {
                    font-size: 24px;
                }

                .stat-text {
                    font-weight: 600;
                    font-size: 15px;
                }

                /* Layout */
                .details-layout {
                    display: grid;
                    grid-template-columns: 1fr 380px;
                    gap: 32px;
                }

                /* Section Header */
                .section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 24px;
                }

                .section-title {
                    font-size: 24px;
                    font-weight: 700;
                    color: #1e293b;
                    margin: 0;
                }

                .unit-count {
                    color: #64748b;
                    font-size: 14px;
                    background: white;
                    padding: 8px 16px;
                    border-radius: 100px;
                    border: 1px solid #e2e8f0;
                }

                /* Units List */
                .units-list {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .unit-card {
                    border: 2px solid #e2e8f0;
                    padding: 0;
                    overflow: hidden;
                    transition: all 0.3s ease;
                    position: relative;
                }

                .unit-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 32px rgba(30, 58, 138, 0.15);
                    border-color: #3b82f6;
                }

                .unit-badge {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: linear-gradient(135deg, #1e3a8a, #3b82f6);
                    color: white;
                    padding: 6px 16px;
                    border-radius: 100px;
                    font-size: 12px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .unit-content {
                    padding: 24px 24px 16px;
                    padding-right: 120px;
                }

                .unit-title {
                    font-size: 20px;
                    margin-bottom: 12px;
                    color: #1e293b;
                    font-weight: 700;
                }

                .unit-desc {
                    color: #64748b;
                    font-size: 15px;
                    line-height: 1.6;
                }

                .unit-footer {
                    padding: 16px 24px;
                    background: #f8fafc;
                    border-top: 1px solid #e2e8f0;
                }

                /* Sidebar Cards */
                .resources-sidebar {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .card {
                    background: white;
                    border-radius: 16px;
                    padding: 24px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
                    border: 1px solid #e2e8f0;
                }

                .card-icon {
                    font-size: 32px;
                    margin-bottom: 12px;
                }

                .card h3 {
                    font-size: 18px;
                    margin-bottom: 8px;
                    color: #1e293b;
                    font-weight: 700;
                }

                .card-subtitle {
                    font-size: 13px;
                    color: #64748b;
                    margin-bottom: 20px;
                }

                /* Question Bank */
                .qb-list {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .qb-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 14px;
                    background: #f8fafc;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                    transition: all 0.3s ease;
                }

                .qb-item:hover {
                    background: #eff6ff;
                    border-color: #3b82f6;
                    transform: translateX(4px);
                }

                .qb-year {
                    font-size: 11px;
                    background: #1e3a8a;
                    color: white;
                    padding: 4px 8px;
                    border-radius: 6px;
                    margin-bottom: 6px;
                    display: inline-block;
                    font-weight: 700;
                }

                .qb-title {
                    font-size: 14px;
                    font-weight: 600;
                    color: #1e293b;
                    margin: 0;
                }

                .btn-icon-circle {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: #3b82f6;
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    font-size: 16px;
                }

                .btn-icon-circle:hover {
                    background: #1e3a8a;
                    transform: scale(1.1);
                }

                /* Info Card */
                .info-list {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .info-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 0;
                    border-bottom: 1px solid #f1f5f9;
                }

                .info-row:last-child {
                    border-bottom: none;
                }

                .info-label {
                    font-size: 13px;
                    color: #64748b;
                    font-weight: 500;
                }

                .info-value {
                    font-size: 14px;
                    color: #1e293b;
                    font-weight: 700;
                }

                /* Buttons */
                .btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 12px 24px;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 14px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    border: none;
                    text-decoration: none;
                }

                .btn-primary {
                    background: linear-gradient(135deg, #1e3a8a, #3b82f6);
                    color: white;
                    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
                }

                .btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
                }

                .btn-secondary {
                    background: white;
                    color: #1e3a8a;
                    border: 2px solid #1e3a8a;
                }

                .btn-secondary:hover {
                    background: #1e3a8a;
                    color: white;
                }

                .w-full {
                    width: 100%;
                }

                .btn-icon {
                    font-size: 16px;
                }

                /* Empty States */
                .empty-state {
                    text-align: center;
                    padding: 60px 40px;
                    color: #64748b;
                }

                .empty-icon {
                    font-size: 64px;
                    margin-bottom: 16px;
                    display: block;
                    opacity: 0.5;
                }

                .empty-state p {
                    font-size: 16px;
                    font-weight: 600;
                    margin-bottom: 8px;
                    color: #475569;
                }

                .empty-hint {
                    font-size: 14px;
                    color: #94a3b8;
                }

                .empty-qb {
                    text-align: center;
                    padding: 32px 16px;
                }

                /* Responsive */
                @media (max-width: 968px) {
                    .details-layout {
                        grid-template-columns: 1fr;
                    }

                    .subject-header {
                        padding: 32px 24px;
                    }

                    .subject-title {
                        font-size: 28px;
                    }

                    .subject-stats {
                        flex-direction: column;
                        gap: 12px;
                    }

                    .unit-content {
                        padding-right: 24px;
                    }

                    .unit-badge {
                        position: static;
                        margin-bottom: 12px;
                        display: inline-block;
                    }
                }
            `}</style>
        </div>
    );
};

export default SubjectDetails;
