import React from "react";
import { useNavigate } from "react-router-dom";
import { registerAPI } from "./api";
import './Register.css'

function App() {
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault()
    try {
      const res = await registerAPI()
    } catch (error) {
      
    }
  }

  return (
    <div className="register-container">
      <div className="form-section">
        <h1>Create an account</h1>
        <p>Your personal job finder is here</p>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Mobile" />
          <input type="password" placeholder="Password" />
          <div className="checkbox-section">
            <input type="checkbox" id="terms" checked={true} />
            <label htmlFor="terms">
              By creating an account, I agree to the terms of use and privacy
              policy.
            </label>
          </div>
          <button className="create-account-btn" onClick={handleCreate} >Create Account</button>
        </form>
        <p className="signin-text">
          Already have an account? <span onClick={() => navigate('/login')} >Sign In</span>
        </p>
      </div>
      <div className="image-section">
        <h2> Your Personal Job Finder</h2>
      </div>
    </div>
  );
}

export default App;
