
// import './App.css';
import { useState,useEffect } from 'react';
import Login from './components/Login';
import Read from './components/Read';

function App() {
  const [email,setEmail]=useState('');
  const [isLoggedIn,setIsLoggedIn]=useState(false);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (email) => {
    setEmail(email);
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
  };
  const handleLogout = () => {
    setEmail("");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      
    {
      isLoggedIn?(<Read onLogout={handleLogout}/>):(<Login onLogin={handleLogin}/>)
    }
     
    </div>
  );
}

export default App;
