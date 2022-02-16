import { SearchIcon } from "../assets/Icons"

export default function SearchBar({userName,handleInput,searchUser,loading}) {
    return (
        <div className='search'>
            <SearchIcon />
            <input className='search-input' placeholder='Search GitHub username...'
                value={userName} onChange={handleInput} />
            <button className='search-button' onClick={searchUser} disabled={loading}>Search</button>
        </div>
    )
}