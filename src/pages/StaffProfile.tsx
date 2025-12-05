import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { STAFF_DATA } from '../data/sampleData';
import type { Staff } from '../data/sampleData';
import './StaffProfile.css';

const StaffProfile: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { staffId } = useParams<{ staffId: string }>();

    // Get staff data from navigation state or find by ID
    const staffFromState = location.state?.staff as Staff | undefined;
    const staff = staffFromState || STAFF_DATA.find(s => s.id === Number(staffId));

    // If no staff found, redirect back
    if (!staff) {
        navigate('/staffs');
        return null;
    }

    // Map staff data to profile format
    const staffData = {
        profileImage: staff.image || 'https://ui-avatars.com/api/?name=' + staff.name + '&background=1e3a8a&color=fff&size=200',
        name: staff.name,
        jobTitle: staff.designation,
        department: 'Information Technology',
        yearOfJoining: '2015',
        experience: '8',
        contact: {
            mobile: '+91 98765 43210',
            email: staff.name.toLowerCase().replace(/\s+/g, '.').replace(/\./g, '') + '@jit.edu.in',
            linkedin: 'https://linkedin.com/in/' + staff.name.toLowerCase().replace(/\s+/g, '')
        },
        academic: {
            subjectsHandling: staff.subjects,
            additionalRoles: [] as string[]
        }
    };

    const handleBackToDashboard = () => {
        navigate('/staffs');
    };

    const handleEditProfile = () => {
        navigate('/edit-profile');
    };

    return (
        <div className="staff-profile-container">
            <div className="profile-card">
                {/* Profile Header */}
                <div className="profile-header">
                    <div className="profile-image-wrapper">
                        <img
                            src={staffData.profileImage}
                            alt={staffData.name}
                            className="profile-image"
                            onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + staffData.name + '&background=1e3a8a&color=fff&size=200'; }}
                        />
                    </div>
                    <h1 className="staff-name">{staffData.name}</h1>
                    <div className="staff-basic-info">
                        <div className="info-item">
                            <span className="info-label">Job Title:</span>
                            <span className="info-value">{staffData.jobTitle}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Department:</span>
                            <span className="info-value">{staffData.department}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Qualification:</span>
                            <span className="info-value">{staff.qualification}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Experience:</span>
                            <span className="info-value">{staffData.experience} years</span>
                        </div>
                    </div>
                </div>

                {/* Contact Information Section */}
                <div className="profile-section">
                    <h2 className="section-title">Contact Information</h2>
                    <div className="section-content">
                        <div className="contact-item">
                            <i className="icon-phone">📱</i>
                            <div className="contact-details">
                                <span className="contact-label">Mobile Number</span>
                                <span className="contact-value">{staffData.contact.mobile}</span>
                            </div>
                        </div>
                        <div className="contact-item">
                            <i className="icon-email">✉️</i>
                            <div className="contact-details">
                                <span className="contact-label">Email ID</span>
                                <span className="contact-value">{staffData.contact.email}</span>
                            </div>
                        </div>
                        <div className="contact-item">
                            <i className="icon-linkedin">🔗</i>
                            <div className="contact-details">
                                <span className="contact-label">LinkedIn Profile</span>
                                <a
                                    href={staffData.contact.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-link"
                                >
                                    View Profile
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Academic Details Section */}
                <div className="profile-section">
                    <h2 className="section-title">Academic Details</h2>
                    <div className="section-content">
                        <div className="academic-subsection">
                            <h3 className="subsection-title">Subjects Handling</h3>
                            <ul className="subjects-list">
                                {staffData.academic.subjectsHandling.map((subject, index) => (
                                    <li key={index} className="subject-item">{subject}</li>
                                ))}
                            </ul>
                        </div>
                        {staffData.academic.additionalRoles.length > 0 && (
                            <div className="academic-subsection">
                                <h3 className="subsection-title">Additional Roles</h3>
                                <ul className="roles-list">
                                    {staffData.academic.additionalRoles.map((role, index) => (
                                        <li key={index} className="role-item">{role}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="action-buttons">
                    <button className="btn btn-secondary" onClick={handleBackToDashboard}>
                        <span className="btn-icon">←</span>
                        Back to Staffs
                    </button>
                    <button className="btn btn-primary" onClick={handleEditProfile}>
                        <span className="btn-icon">✏️</span>
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StaffProfile;
