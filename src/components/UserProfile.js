import { LocationIcon, WebsiteIcon, TwitterIcon, CompanyIcon } from '../assets/Icons/index'

export default function UserProfile({user}){
  const {
    login,
    bio,
    blog,
    name,
    created_at, 
    company, 
    followers,
    following,
    location,
    public_repos,
    twitter_username
  } = user;
  console.log(user)

  let date= new Intl.DateTimeFormat('pt-BR', {dateStyle:'medium'})
  .format(new Date (created_at))
    return(
        <div className='user-container'>
          <img src={`https://github.com/${login}.png`} className='icon' />
          <div className='user'>
            <div className='user-profile'>
              <div className='user-content'>
                <span className='user-name'>{name}</span>
                <span className='date'> {date}</span>
              </div>
              <a href='#'>@{login}</a>
              <p>{bio}</p>
            </div>

            <div className='dethails'>
              <div className='repos'>
                <span className='label'>Repos</span>
                <strong className='value'>{public_repos}</strong>
              </div>
              <div className='followers'>
                <span className='label'>Followers</span>
                <strong className='value'>{followers}</strong>
              </div>
              <div className='following'>
                <span className='label'>Following</span>
                <strong className='value'>{following}</strong>
              </div>
            </div>

            <div className='social-media'>
              <span className={`icons ${ location ? '' : 'not-found'}`}>
                <LocationIcon/>{location ? location : 'Not Available'}
              </span>
              <a href='#' className={`icons ${ blog ? '' : 'not-found'}`}>
                <WebsiteIcon/>{blog ? blog : 'Not Available'}
              </a>
              <a href='#' className={`icons ${twitter_username ? '' : 'not-found'}`}>
                <TwitterIcon/>{twitter_username ? twitter_username : 'Not Available'}
              </a>
              <span className={`icons ${ company ? '' : 'not-found'}`}>
                <CompanyIcon/>{company ? company : 'Not Available'}
              </span>
            </div>
          </div>
        </div>
    )
}