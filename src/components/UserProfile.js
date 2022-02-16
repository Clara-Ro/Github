import { LocationIcon, WebsiteIcon, TwitterIcon, CompanyIcon } from '../assets/Icons/index'

export default function UserProfile(){
    return(
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
    )
}