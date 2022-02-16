import{Sun, Moon} from '../assents/Icons'

export default function Header({ changeTheme, isDark }){
    return (
        <header>
            <h1 className='title'>devfinder</h1>
            <div className='theme' onClick={changeTheme}>
                <span>{isDark ? 'LIGHT' : 'DARK'}</span>
                {isDark ? <Sun /> : <Moon />}
            </div>
        </header>
    )
}