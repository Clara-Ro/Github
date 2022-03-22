
import './App.css';
import { BallTriangle } from 'react-loader-spinner';
import Header from './components/Header'
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';

function App({ changeTheme, isDark }) {

  const [userName, setUserName] = useState();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  

  function handleInput(e) {
    setUserName(e.target.value)

  }

  async function searchUser() {
    setLoading(true)
    const data = await fetch(`https://api.github.com/users/${userName}`).then((res) => res.json())
    setUser(data)
    setLoading(false)
  }

  return (
    <>
      <div className="container">
        <Header changeTheme={changeTheme} isDark={isDark} />
        <SearchBar userName={userName} handleInput={handleInput} searchUser={searchUser} loading={loading}/>
        {loading ? (<div className='loading'>
          <BallTriangle
            heigth="100"
            width="100"
            color="grey"
            ariaLabel="loading-indicator"
          />
        </div>): null }
         {!loading && user && <UserProfile user={user}/>}
      </div>
    </>
  );
}

export default App;
