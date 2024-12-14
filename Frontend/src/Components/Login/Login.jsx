import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {
  const navigate = useNavigate();

    return (
      <div className="container">
        <div className="left-side">
          <h2>Already have an account?</h2>
          <p>Your personal job finder is here</p>
          <form>
            <div>
              <input type="email" id="email" placeholder="Email" />
            </div>
            <div>
              <input type="password" id="password" placeholder="Password" />
            </div>
            <button className='submit-btn' type="submit">Sign in</button>
          </form>
          <p className='sign-up' >Don't have an account? <span onClick={() => navigate('/register')} >Sign Up</span></p>
        </div>
        <div className="right-side">
          <h2> Your Personal Job Finder</h2>
        </div>
      </div>
    );
  }
  
  export default Login;