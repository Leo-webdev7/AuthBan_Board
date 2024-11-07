import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import auth from './utils/auth';

import Navbar from './components/Navbar';

function App() {
  useEffect(() => { 
    if (auth.loggedIn()) { 
      auth.startSessionTimer(); 
    } }, []);

  return (
    <div className='container'>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
