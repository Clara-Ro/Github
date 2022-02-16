import { SearchIcon, LocationIcon, WebsiteIcon, TwitterIcon, CompanyIcon } from './assents/Icons/index'
import './App.css';
import { BallTriangle } from 'react-loader-spinner';
import Header from './components/header'
import { useState } from 'react';

function App({ changeTheme, isDark }) {

  const [userName, setUserName] = useState();
  const [loading, setLoading] = useState(false)

  function handleInput(e) {
    setUserName(e.target.value)

  }

  async function searchUser() {
    setLoading(true)
    const data = await fetch(`https://api.github.com/users/${userName}`).then((res) => res.json())
    console.log(data)
    setLoading(false)
  }

  return (
    <>
      <div className="container">
        <Header changeTheme={changeTheme} isDark={isDark} />
        <div className='search'>
          <SearchIcon />
          <input className='search-input' placeholder='Search GitHub username...'
            value={userName} onChange={handleInput} />
          <button className='search-button' onClick={searchUser} disabled={loading}>Search</button>
        </div>
        {loading ? (<div className='loading'>
          <BallTriangle
            heigth="100"
            width="100"
            color="grey"
            ariaLabel="loading-indicator"
          />
        </div>): null }
        <div className='user-container'>
          <img src='https://github.com/octocat.png' className='icon' />
          <div className='user'>
            <div className='user-profile'>
              <div className='user-content'>
                <span className='user-name'>The Octocat</span>
                <span className='date'> Joined 25 Jan 2011</span>
              </div>
              <a href='#'>@octcat</a>
              <p>This Profile has no bio</p>
            </div>

            <div className='dethails'>
              <div className='repos'>
                <span className='label'>Repos</span>
                <strong className='value'>8</strong>
              </div>
              <div className='followers'>
                <span className='label'>Followers</span>
                <strong className='value'>3938</strong>
              </div>
              <div className='following'>
                <span className='label'>Following</span>
                <strong className='value'>9</strong>
              </div>
            </div>

            <div className='social-media'>
              <span className='icons'><LocationIcon />San Francisco</span>
              <a href='#' className='icons'><WebsiteIcon />https://github.blog</a>
              <a href='#' className='icons not-found'><TwitterIcon /> @Clara</a>
              <span className='icons'><CompanyIcon />Empresa</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
