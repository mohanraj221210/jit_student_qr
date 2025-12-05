import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Toast from '../components/Toast';
import axios from 'axios';

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response =  await axios.post(`${API_URL}/api/login`,{ email, password });
      if(response.status === 200){
        const token = response.data.token;
        localStorage.setItem('token', token);
         setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
      }else if(response.status == 404){
        alert("User not found");
      }
    } catch (error) {
      alert("An error occurred during login");
    }
  };

  return (
    <div className="login-page">
      {showToast && (
        <Toast
          message="Login successful! Redirecting..."
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}

      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="logo-circle">🎓</div>
            <h1>Welcome Back</h1>
            <p className="text-muted">Enter your credentials to access the portal</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <div className="input-wrapper">
                <input
                  type="text"
                  id="email"
                  className="input floating-input"
                  placeholder=" "
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <span className="input-icon">👤</span>
              </div>
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="input floating-input"
                  placeholder=" "
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <button
                  type="button"
                  className="input-icon-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  title={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "👁️" : "🔒"}
                </button>
              </div>
            </div>

            <div className="form-actions">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Sign In
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(246, 249, 252, 0.9) 0%, rgba(224, 242, 254, 0.9) 100%), url('/src/assets/gate.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          padding: 20px;
        }

        .login-container {
          width: 100%;
          max-width: 420px;
        }

        .login-card {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(11, 59, 102, 0.1);
          border: 1px solid rgba(255,255,255,0.8);
          backdrop-filter: blur(10px);
        }

        .login-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .logo-circle {
          width: 60px;
          height: 60px;
          background: var(--primary-light);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          margin: 0 auto 16px;
        }

        .login-header h1 {
          font-size: 24px;
          margin-bottom: 8px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .input-wrapper {
          position: relative;
        }

        .floating-input {
          height: 50px;
          padding: 20px 16px 6px;
          font-size: 16px;
        }

        .floating-input:focus ~ label,
        .floating-input:not(:placeholder-shown) ~ label {
          transform: translateY(-12px) scale(0.85);
          color: var(--primary);
        }

        .input-wrapper label {
          position: absolute;
          left: 16px;
          top: 14px;
          color: var(--text-muted);
          transition: all 0.2s ease;
          pointer-events: none;
          transform-origin: left top;
        }

        .input-icon, .input-icon-btn {
          position: absolute;
          right: 16px;
          top: 14px;
          font-size: 18px;
          opacity: 0.5;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: opacity 0.2s;
        }

        .input-icon-btn:hover {
          opacity: 1;
        }

        .form-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          font-size: 14px;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          color: var(--text-muted);
        }

        .forgot-link {
          color: var(--primary);
          font-weight: 500;
        }

        .btn-block {
          width: 100%;
          height: 48px;
          font-size: 16px;
        }

        .login-footer {
          text-align: center;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
          font-size: 14px;
          color: var(--text-muted);
        }

        .login-footer a {
          color: var(--primary);
          font-weight: 500;
        }

        .demo-login {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
      `}</style>
    </div>
  );
};

export default Login;
