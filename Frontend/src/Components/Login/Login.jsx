import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {
  const navigate = useNavigate();

    return (
      <div className="login-container">
        <div className="left-side">
          <h1 className='text-2xl' >Already have an account?</h1>
          <p>Your personal job finder is here</p>
          <form>
            <div>
              <input required type="email" id="email" placeholder="Email" />
            </div>
            <div>
              <input required type="password" id="password" placeholder="Password" />
            </div>
            <button className='submit-btn' type="submit" onClick={(e) => e.preventDefault()} >Sign in</button>
          </form>
          <p className='sign-up' >Don't have an account? <span onClick={() => navigate('/register')} >Sign Up</span></p>
        </div>
        <div className="right-side">
          <h2 className='text-2xl' > Your Personal Job Finder</h2>
        </div>
      </div>
    );
  }
  
  export default Login;