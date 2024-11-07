import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoginCheck(auth.loggedIn());
  }, []);

  const handleLogout = () => {
    auth.logout();
    navigate('/login');
    setLoginCheck(false);
  };

  return (
    <div className='nav'>
      <div className='nav-title'>
        <Link to='/'>Crazy Auth Ban Board</Link>
      </div>
      <ul>
        {
          !loginCheck ? (
            <li className='nav-item'>
              <button type='button'>
                <Link to='/login'>Login</Link>
              </button>
            </li>
          ) : (
            <li className='nav-item'>
              <button type='button' onClick={handleLogout}>Logout</button>
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default Navbar;



